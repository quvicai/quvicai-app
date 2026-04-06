import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();
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
      return Response.json({ error: 'Error guardando diagnóstico', details: error.message }, { status: 500 });
    }
    return Response.json(data);
  } catch (err) {
    console.error('Server error:', err);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
