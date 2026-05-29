package com.nagarsetu.watch

import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.*
import com.google.android.gms.wearable.Node
import com.google.android.gms.wearable.Wearable
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await

class WatchMainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            WatchApp()
        }
    }

    private suspend fun sendSosToPhone(): Boolean {
        return try {
            val nodeClient = Wearable.getNodeClient(this)
            val messageClient = Wearable.getMessageClient(this)
            
            val nodes = nodeClient.connectedNodes.await()
            if (nodes.isEmpty()) {
                Log.e("WatchSOS", "No paired phone found!")
                return false
            }
            
            var success = false
            nodes.forEach { node: Node ->
                try {
                    messageClient.sendMessage(
                        node.id,
                        "/raksha/sos",
                        "TRIGGER".toByteArray()
                    ).await()
                    Log.i("WatchSOS", "SOS sent to: ${node.displayName}")
                    success = true
                } catch (e: Exception) {
                    Log.e("WatchSOS", "Failed to send to ${node.displayName}: ${e.message}")
                }
            }
            success
        } catch (e: Exception) {
            Log.e("WatchSOS", "Wearable API Error: ${e.message}")
            false
        }
    }

    @Composable
    fun WatchApp() {
        val coroutineScope = rememberCoroutineScope()
        var status by remember { mutableStateOf("Ready") }
        var isSending by remember { mutableStateOf(false) }

        Scaffold(
            timeText = { TimeText() }
        ) {
            Column(
                modifier = Modifier.fillMaxSize().padding(8.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Button(
                    onClick = {
                        if (!isSending) {
                            isSending = true
                            status = "SIGNALING PHONE..."
                            coroutineScope.launch {
                                val ok = sendSosToPhone()
                                if (ok) {
                                    status = "SOS SENT!"
                                    delay(2000)
                                    status = "Ready"
                                } else {
                                    status = "PHONE NOT FOUND"
                                    delay(3000)
                                    status = "Ready"
                                }
                                isSending = false
                            }
                        }
                    },
                    modifier = Modifier.size(110.dp),
                    colors = ButtonDefaults.buttonColors(backgroundColor = Color.Red),
                    enabled = !isSending
                ) {
                    Text("SOS", fontSize = 28.sp, fontWeight = FontWeight.Black, color = Color.White)
                }
                Spacer(modifier = Modifier.height(4.dp))
                Text(status, fontSize = 10.sp, color = if (status.contains("NOT")) Color.Yellow else Color.LightGray)
            }
        }
    }
}
