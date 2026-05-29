/**
 * NagarSetu Risk Score Calculator (C++)
 * High-performance ward-level risk computation.
 * Compile: g++ -O2 -o risk_calc risk_calculator.cpp
 * Usage:   ./risk_calc <incidents_json>
 */

#include <iostream>
#include <string>
#include <vector>
#include <cmath>
#include <sstream>
#include <algorithm>

struct Incident {
    double lat, lng;
    int severity;
    std::string status;
    long long timestamp;
    std::string type;
};

struct RiskZone {
    double centerLat, centerLng;
    double radius;   // degrees (~111km per degree)
    double riskScore;
    int incidentCount;
    std::string level; // LOW, MODERATE, HIGH, CRITICAL
};

// Haversine distance in km
double haversine(double lat1, double lng1, double lat2, double lng2) {
    const double R = 6371.0;
    double dLat = (lat2 - lat1) * M_PI / 180.0;
    double dLng = (lng2 - lng1) * M_PI / 180.0;
    double a = sin(dLat/2)*sin(dLat/2) +
               cos(lat1 * M_PI/180.0)*cos(lat2 * M_PI/180.0)*
               sin(dLng/2)*sin(dLng/2);
    return R * 2 * atan2(sqrt(a), sqrt(1-a));
}

// Gaussian decay: incidents close to center weigh more
double spatialWeight(double distKm, double sigmaKm = 0.5) {
    return exp(-(distKm * distKm) / (2 * sigmaKm * sigmaKm));
}

// Temporal decay: older incidents contribute less
double temporalWeight(long long ageMs) {
    double ageHours = ageMs / 3600000.0;
    return exp(-ageHours / 24.0); // half-life = 24h
}

std::string riskLevel(double score) {
    if (score >= 0.75) return "CRITICAL";
    if (score >= 0.50) return "HIGH";
    if (score >= 0.25) return "MODERATE";
    return "LOW";
}

// Compute risk for a grid cell (lat, lng center)
double computeCellRisk(double cellLat, double cellLng,
                       const std::vector<Incident>& incidents,
                       long long nowMs) {
    double risk = 0.0;
    for (const auto& inc : incidents) {
        if (inc.status == "rejected") continue;
        double distKm = haversine(cellLat, cellLng, inc.lat, inc.lng);
        if (distKm > 2.0) continue; // only nearby incidents matter

        double sw = spatialWeight(distKm);
        double tw = temporalWeight(nowMs - inc.timestamp);
        double sv = inc.severity / 5.0;

        // Type multiplier
        double typeMultiplier = 1.0;
        if (inc.type == "HARASSMENT") typeMultiplier = 1.4;
        else if (inc.type == "UNSAFE_SPOT") typeMultiplier = 1.2;
        else if (inc.type == "SUSPICIOUS_ACTIVITY") typeMultiplier = 1.1;

        risk += sw * tw * sv * typeMultiplier;
    }
    return std::min(1.0, risk);
}

// Simple JSON serialization (no deps)
std::string toJson(const std::vector<RiskZone>& zones) {
    std::ostringstream ss;
    ss << "[";
    for (size_t i = 0; i < zones.size(); i++) {
        const auto& z = zones[i];
        ss << "{";
        ss << "\"lat\":" << z.centerLat << ",";
        ss << "\"lng\":" << z.centerLng << ",";
        ss << "\"radius\":" << z.radius << ",";
        ss << "\"riskScore\":" << z.riskScore << ",";
        ss << "\"incidentCount\":" << z.incidentCount << ",";
        ss << "\"level\":\"" << z.level << "\"";
        ss << "}";
        if (i + 1 < zones.size()) ss << ",";
    }
    ss << "]";
    return ss.str();
}

int main() {
    // Demo: hardcoded Bhopal incidents for standalone testing
    // In production: read JSON from stdin or file
    std::vector<Incident> incidents = {
        {23.2599, 77.4126, 4, "verified", 1700000000000LL - 3600000, "HARASSMENT"},
        {23.2620, 77.4200, 2, "verified", 1700000000000LL - 7200000, "POOR_LIGHTING"},
        {23.2550, 77.4050, 5, "pending",  1700000000000LL - 1800000, "UNSAFE_SPOT"},
        {23.2680, 77.4300, 3, "rejected", 1700000000000LL - 14400000, "SUSPICIOUS_ACTIVITY"},
        {23.2530, 77.4100, 4, "verified", 1700000000000LL - 5400000, "HARASSMENT"},
    };

    long long nowMs = 1700000000000LL;

    // Generate 4x4 risk grid over Bhopal area
    std::vector<RiskZone> zones;
    double startLat = 23.24, startLng = 77.39;
    double step = 0.01;

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            double lat = startLat + i * step;
            double lng = startLng + j * step;
            double risk = computeCellRisk(lat, lng, incidents, nowMs);

            // Count incidents in this cell
            int count = 0;
            for (const auto& inc : incidents) {
                if (haversine(lat, lng, inc.lat, inc.lng) < 1.5) count++;
            }

            zones.push_back({lat, lng, step/2, risk, count, riskLevel(risk)});
        }
    }

    std::cout << toJson(zones) << std::endl;
    return 0;
}
