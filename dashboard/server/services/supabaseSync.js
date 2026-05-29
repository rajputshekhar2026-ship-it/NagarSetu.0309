// server/services/supabaseSync.js
const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws');

let io;

function init(socketIo) {
  io = socketIo;
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn('[Supabase] Keys not set — using in-memory store only');
    return;
  }

  // Create client with explicit WebSocket transport for Node.js 20 compatibility
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    realtime: {
      transport: WebSocket,
    }
  });

  // Listen for new live_alerts from Android app
  supabase.channel('admin-live-alerts')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'live_alerts' }, payload => {
      const row = payload.new;
      io?.emit('new_alert', {
        id: row.id,
        title: row.title,
        message: row.description,
        type: row.type,
        ward: row.ward,
        severity: row.severity,
        timestamp: new Date(row.created_at).getTime(),
        acknowledged: !row.is_active
      });
      console.log('[Supabase→Admin] New live alert:', row.title);
    })
    .subscribe();

  // Listen for new incidents (civic_reports table)
  supabase.channel('admin-reports')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'civic_reports' }, payload => {
      const row = payload.new;
      io?.emit('new_incident', {
        id: row.id,
        type: row.type,
        lat: row.lat,
        lng: row.lng,
        description: row.description,
        ward: row.ward,
        status: row.status || 'pending',
        timestamp: row.created_at,
        reportedBy: row.uid,
        severity: 3,
        aiScore: null,
        photos: row.photo_url ? [row.photo_url] : []
      });
      console.log('[Supabase→Admin] New incident:', row.type);
    })
    .subscribe();

  console.log('[Supabase] Realtime listeners registered');
}

module.exports = { init };
