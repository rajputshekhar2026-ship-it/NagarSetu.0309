package com.nagarsetu.raksha.presentation

import androidx.compose.animation.*
import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Emergency
import androidx.compose.material.icons.filled.Cancel
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import com.nagarsetu.core.ui.components.NagarSetuScreenBackground
import com.nagarsetu.core.ui.components.NagarSetuTopBar
import com.nagarsetu.core.ui.strings.LocalAppStrings
import com.nagarsetu.core.ui.theme.AlertRed
import com.nagarsetu.core.ui.theme.NagarSetuColors
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Composable
fun RakshaScreen(
    viewModel: RakshaViewModel = hiltViewModel(),
    onNavigateToSettings: () -> Unit = {},
    onNavigateToLiveTrack: () -> Unit = {},
    onNavigateToEmergencyGuide: () -> Unit = {},
    permissionsState: Any? = null // Ignored for pure SOS focus
) {
    val s = LocalAppStrings.current
    val sosTriggered by viewModel.sosTriggered.collectAsState()
    val isSosLoading by viewModel.isSosLoading.collectAsState()

    NagarSetuScreenBackground {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            NagarSetuTopBar(
                title = "Emergency SOS",
                subtitle = if (sosTriggered) "Help is on the way!" else "Press and hold for assistance"
            )

            Box(
                modifier = Modifier.weight(1f),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    SimpleSosButton(
                        isActive = sosTriggered,
                        onTrigger = { viewModel.triggerSosTap() },
                        onCancel = { viewModel.clearSos() }
                    )
                    
                    Spacer(Modifier.height(32.dp))
                    
                    if (isSosLoading) {
                        CircularProgressIndicator(color = AlertRed)
                        Text("Sending alert...", modifier = Modifier.padding(top = 8.dp), color = AlertRed)
                    } else if (sosTriggered) {
                        Text("SOS ACTIVE", fontSize = 24.sp, fontWeight = FontWeight.Black, color = AlertRed)
                        Text("Command Center notified", color = NagarSetuColors.TextSecondary)
                    } else {
                        Text("HOLD BUTTON TO ACTIVATE", fontSize = 14.sp, fontWeight = FontWeight.Bold, color = NagarSetuColors.TextSecondary)
                    }
                }
            }
        }
    }
}

@Composable
private fun SimpleSosButton(
    isActive: Boolean,
    onTrigger: () -> Unit,
    onCancel: () -> Unit
) {
    val haptic = LocalHapticFeedback.current
    val scope = rememberCoroutineScope()
    var isHolding by remember { mutableStateOf(false) }
    var holdProgress by remember { mutableStateOf(0f) }

    val infinite = rememberInfiniteTransition(label = "sos_pulse")
    val pulseScale by infinite.animateFloat(
        initialValue = 1f,
        targetValue = if (isActive) 1.2f else 1.05f,
        animationSpec = infiniteRepeatable(
            animation = tween(800, easing = LinearOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulse"
    )

    Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier
            .size(240.dp)
            .pointerInput(isActive) {
                if (isActive) {
                    detectTapGestures(onTap = { onCancel() })
                } else {
                    detectTapGestures(
                        onPress = {
                            isHolding = true
                            holdProgress = 0f
                            val startTime = System.currentTimeMillis()
                            val holdJob = scope.launch {
                                while (isHolding && holdProgress < 1f) {
                                    delay(30)
                                    holdProgress = (System.currentTimeMillis() - startTime) / 3000f
                                    if (holdProgress >= 1f) {
                                        haptic.performHapticFeedback(HapticFeedbackType.LongPress)
                                        onTrigger()
                                        isHolding = false
                                        holdProgress = 0f
                                    }
                                }
                            }
                            try { awaitRelease() } finally { isHolding = false; holdProgress = 0f; holdJob.cancel() }
                        }
                    )
                }
            }
    ) {
        // Outer pulsing ring
        Box(
            Modifier
                .size(220.dp)
                .scale(pulseScale)
                .border(4.dp, if (isActive) AlertRed.copy(0.4f) else Color.Red.copy(0.2f), CircleShape)
        )

        // Hold Progress
        if (isHolding) {
            CircularProgressIndicator(
                progress = { holdProgress },
                modifier = Modifier.size(240.dp),
                color = Color.White,
                strokeWidth = 8.dp,
                trackColor = Color.Transparent
            )
        }

        // Main Button
        Surface(
            modifier = Modifier.size(180.dp),
            shape = CircleShape,
            color = if (isActive) Color.DarkGray else AlertRed,
            tonalElevation = 8.dp,
            shadowElevation = 12.dp
        ) {
            Column(
                modifier = Modifier.fillMaxSize(),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Icon(
                    imageVector = if (isActive) Icons.Default.Cancel else Icons.Default.Emergency,
                    contentDescription = null,
                    modifier = Modifier.size(48.dp),
                    tint = Color.White
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    text = if (isActive) "CANCEL" else "SOS",
                    color = Color.White,
                    fontWeight = FontWeight.ExtraBold,
                    fontSize = 28.sp
                )
            }
        }
    }
}
