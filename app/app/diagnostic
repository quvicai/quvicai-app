// ═══════════════════════════════════════════════════════════
// API ROUTE: /api/diagnostic
// ═══════════════════════════════════════════════════════════
// QUÉ HACE: Recibe los datos del diagnóstico completado
// (score, respuestas, dimensiones) y los guarda en Supabase
// usando la función save_diagnostic() que creamos en el SQL.
//
// SE LLAMA DESDE: el frontend, después de calcular el score
// (en la función runCalc del JavaScript del diagnóstico).
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

// Conexión a Supabase usando las variables de entorno
// (las configuramos en Vercel → Settings → Environment Variables)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    // Llamamos a la función save_diagnostic que creamos en Supabase
    // Esta función hace todo en una sola transacción:
    // 1. Busca o crea el usuario por email
    // 2. Guarda el diagnóstico con score y respuestas
    // 3. Inserta las 5 dimension_scores
    // 4. Crea el placeholder del informe IA
    const { data, error } = await supabase.rpc('save_diagnostic', {
      p_name:        body.name,
      p_email:       body.email,
      p_industry:    body.industry,
      p_country:     body.country,
      p_score_total: body.score_total,
      p_level_key:   body.level_key,
      p_raw_score:   body.raw_score,
      p_raw_answers: body.raw_answers,
      p_dimensions:  body.dimensions,
    });

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Error guardando diagnóstico', details: error.message },
        { status: 500 }
      );
    }

    // data contiene: { user_id, diagnostic_id, success: true }
    return Response.json(data);

  } catch (err) {
    console.error('Server error:', err);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
