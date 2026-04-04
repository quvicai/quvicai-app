// ═══════════════════════════════════════════════════════════
// API ROUTE: /api/lead
// ═══════════════════════════════════════════════════════════
// QUÉ HACE: Guarda un lead del formulario post-diagnóstico
// (el card azul "Recibí tu análisis estratégico completo").
//
// SE LLAMA DESDE: el frontend, cuando el usuario completa
// el formulario de lead capture con nombre y WhatsApp/email.
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from('leads')
      .insert({
        name:      body.name,
        contact:   body.contact,
        score:     body.score,
        level_key: body.level_key,
        source:    'quvicai-score',
        metadata:  body.userData || {},
      })
      .select('id')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Error guardando lead' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, lead_id: data.id });

  } catch (err) {
    console.error('Server error:', err);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
