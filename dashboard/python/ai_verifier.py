#!/usr/bin/env python3
"""
NagarSetu AI Verifier
False alarm detection using NLP + heuristics on incident reports.
In production: plug in a real model (transformers, sklearn, etc.)
"""

import sys
import json
import re
import math

HIGH_RISK_KEYWORDS = [
    'weapon', 'gun', 'knife', 'threat', 'attack', 'bleeding', 'fire', 'explosion',
    'chase', 'scream', 'child', 'helpless', 'abuse', 'unsafe', 'robbery', 'assault'
]

LOW_RISK_INDICATORS = [
    'not sure', 'might be', 'maybe', 'unclear', 'heard something', 'seems like',
    'probably nothing', 'test', 'demo', 'fake', 'hello', 'checking'
]

NOISE_PATTERNS = [
    r'\b(test|demo|sample|xyz|abc|123)\b',
    r'^.{0,10}$',                     # very short descriptions
    r'(.)\1{4,}',                     # repeated characters like "aaaaaaa"
]

def compute_text_score(description: str) -> float:
    """Score based on text analysis (0-1, higher = more credible)."""
    desc = description.lower()
    score = 0.5  # base

    # Keyword boost
    for kw in HIGH_RISK_KEYWORDS:
        if kw in desc:
            score += 0.08

    # Low risk penalty
    for lr in LOW_RISK_INDICATORS:
        if lr in desc:
            score -= 0.15

    # Noise pattern detection
    for pat in NOISE_PATTERNS:
        if re.search(pat, desc, re.IGNORECASE):
            score -= 0.30

    # Length bonus (more detail = more credible)
    word_count = len(desc.split())
    if word_count > 15:
        score += 0.1
    elif word_count < 5:
        score -= 0.2

    return max(0.0, min(1.0, score))

def compute_severity_score(severity: int) -> float:
    """Normalize severity 1-5 to 0-1."""
    return (severity - 1) / 4.0

def compute_temporal_score(timestamp_ms: int) -> float:
    """Recent reports get higher credibility (decay over 24h)."""
    import time
    age_hours = (time.time() * 1000 - timestamp_ms) / 3600000
    return max(0.0, 1.0 - (age_hours / 24.0))

def classify_incident(score: float) -> tuple:
    if score >= 0.80:
        return 'HIGH', 'Likely genuine — recommend immediate verification'
    elif score >= 0.55:
        return 'MODERATE', 'Plausible report — standard review recommended'
    elif score >= 0.30:
        return 'LOW', 'Uncertain — secondary verification needed'
    else:
        return 'VERY_LOW', 'Likely false alarm — low confidence in report'

def extract_tags(incident: dict) -> list:
    tags = []
    desc = incident.get('description', '').lower()
    t = incident.get('type', '')

    if incident.get('severity', 0) >= 4:
        tags.append('high-severity')
    if 'child' in desc or 'school' in desc:
        tags.append('vulnerable-area')
    if t == 'HARASSMENT':
        tags.append('safety-concern')
    if t == 'POOR_LIGHTING':
        tags.append('infrastructure')
    if t == 'UNSAFE_SPOT':
        tags.append('physical-hazard')
    if incident.get('aiScore', 0.5) > 0.8:
        tags.append('auto-verified')

    return tags or ['standard']

def verify_incident(incident: dict) -> dict:
    text_score = compute_text_score(incident.get('description', ''))
    severity_score = compute_severity_score(incident.get('severity', 3))
    temporal_score = compute_temporal_score(incident.get('timestamp', 0))

    # Weighted combination
    final_score = (text_score * 0.5) + (severity_score * 0.3) + (temporal_score * 0.2)
    risk_level, feedback = classify_incident(final_score)
    tags = extract_tags(incident)

    recommended_action = {
        'HIGH': 'auto_verify',
        'MODERATE': 'manual_review',
        'LOW': 'flag_for_review',
        'VERY_LOW': 'auto_reject'
    }[risk_level]

    return {
        'score': round(final_score, 3),
        'risk_level': risk_level,
        'feedback': feedback,
        'tags': tags,
        'recommended_action': recommended_action,
        'breakdown': {
            'text_credibility': round(text_score, 3),
            'severity_weight': round(severity_score, 3),
            'recency_weight': round(temporal_score, 3)
        }
    }

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(json.dumps({'error': 'No incident data provided'}))
        sys.exit(1)

    try:
        incident = json.loads(sys.argv[1])
        result = verify_incident(incident)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({'error': str(e), 'score': 0.5, 'feedback': 'Analysis failed', 'tags': []}))
        sys.exit(1)
