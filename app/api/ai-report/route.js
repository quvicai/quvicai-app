import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SYSTEM_PROMPT = `Sos el motor de análisis estratégico de QUVICai.
Tu función es generar informes empresariales que corrijan la percepción del dueño del negocio — sin que él sepa que eso está ocurriendo.
PRINCIPIO RECTOR (nunca lo menciones explícitamente):
El problema central de todo negocio bloqueado no está en el mercado, la competencia ni los recursos. Está en la brecha entre cómo el dueño percibe su negocio y cómo el negocio realmente funciona.
Esta brecha se manifiesta de tres formas:
1. SOBREESTIMACIÓN - El dueño cree que algo funciona bien cuando no funciona.
2. SUBESTIMACIÓN - El dueño no reconoce fortalezas reales que tiene.
3. PUNTO CIEGO - El dueño no ve la conexión entre dos problemas distintos que en realidad son el mismo problema con distinta cara.
TU TRABAJO EN CADA INFORME:
— Detectar cuál de estas tres formas está activa
— Nombrar el problema real, no el síntoma que el usuario ve
— Generar la incomodidad justa que abre la puerta al cambio
— Bajar todo a acciones ejecutables y medibles
REGLAS ABSOLUTAS:
— Nunca uses lenguaje motivacional ni espiritual
— Nunca menciones percepción, conciencia ni creencias
— Nunca cites frameworks, metodologías ni teorías
— Nunca suavices un problema real
— Nunca uses la palabra "potencial"
— Sé específico con la industria del usuario
— Extensión: 650 a 800 palabras
— Tono: consultor senior. Directo. Sin adornos.
— Usá el nombre del usuario de forma natural, no repetitiva`;

export async function POST(request) {
  try {
    const { diagnostic_id } = await request.json();
    if (!diagnostic_id) {
      return Response.json({ error: 'diagnostic_id es requerido' }, { status: 400 });
    }

    const { data: diagData, error: diagError } = await supabase
      .rpc('get_diagnostic_for_ai', { p_diagnostic_id: diagnostic_id });

    if (diagError || !diagData) {
      return Response.json({ error: 'Diagnóstico no encontrado' }, { status: 404 });
    }

    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    if (!anthropicKey) {
      await supabase.from('ai_reports').update({ report_status: 'pending' }).eq('diagnostic_id', diagnostic_id);
      return Response.json({ report_html: null, status: 'pending', message: 'API de Anthropic no configurada todavía.' });
    }

    await supabase.from('ai_reports').update({ report_status: 'generating' }).eq('diagnostic_id', diagnostic_id);

    const userPrompt = `Generá el Informe Estratégico QUVICai para este usuario.\n\nDATOS DEL DIAGNÓSTICO:\n${JSON.stringify(diagData, null, 2)}\n\nGenerá el informe con las 7 secciones: DIAGNÓSTICO GENERAL, LO QUE TUS NÚMEROS REVELAN, EL PROBLEMA CENTRAL, LO QUE ESTÁ COSTANDO HOY, LO QUE VA A PASAR SI NADA CAMBIA, LAS 3 PRIORIDADES INMEDIATAS, CIERRE.`;

    const aiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': anthropicKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 2000, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: userPrompt }] }),
    });

    const aiData = await aiResponse.json();
    if (!aiResponse.ok) {
      await supabase.from('ai_reports').update({ report_status: 'failed', error_message: JSON.stringify(aiData) }).eq('diagnostic_id', diagnostic_id);
      return Response.json({ error: 'Error generando informe IA' }, { status: 500 });
    }

    const reportText = aiData.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
    const reportHtml = reportText.replace(/\n/g, '<br>');

    await supabase.from('ai_reports').update({
      report_status: 'completed', report_html: reportHtml, generated_at: new Date().toISOString(),
    }).eq('diagnostic_id', diagnostic_id);

    return Response.json({ report_html: reportHtml, status: 'completed' });
  } catch (err) {
    console.error('Server error:', err);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
