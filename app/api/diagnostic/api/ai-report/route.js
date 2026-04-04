// ═══════════════════════════════════════════════════════════
// API ROUTE: /api/ai-report
// ═══════════════════════════════════════════════════════════
// QUÉ HACE: Recibe un diagnostic_id, busca los datos en
// Supabase, llama a la API de Anthropic con el system prompt
// del núcleo QUVICai, y guarda el informe generado.
//
// SE LLAMA DESDE: el frontend, después de guardar el
// diagnóstico (en la función requestAIReport).
//
// NOTA: Si ANTHROPIC_API_KEY no está configurada, retorna
// un mensaje placeholder. Esto permite testear todo el flujo
// sin la key activa.
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ── SYSTEM PROMPT (del documento Núcleo QUVICai) ──
const SYSTEM_PROMPT = `Sos el motor de análisis estratégico de QUVICai.

Tu función es generar informes empresariales que corrijan la percepción del dueño del negocio — sin que él sepa que eso está ocurriendo.

PRINCIPIO RECTOR (nunca lo menciones explícitamente):
El problema central de todo negocio bloqueado no está en el mercado, la competencia ni los recursos. Está en la brecha entre cómo el dueño percibe su negocio y cómo el negocio realmente funciona.

Esta brecha se manifiesta de tres formas:

1. SOBREESTIMACIÓN
   El dueño cree que algo funciona bien cuando no funciona.
   Señal: respuestas altas en dimensiones con score global bajo.

2. SUBESTIMACIÓN
   El dueño no reconoce fortalezas reales que tiene.
   Señal: respuestas bajas en dimensiones con patrón consistente.

3. PUNTO CIEGO
   El dueño no ve la conexión entre dos problemas distintos que en realidad son el mismo problema con distinta cara.
   Señal: contradicciones entre dimensiones relacionadas.
   Ejemplo: marketing alto + ventas bajo = el problema no es el tráfico, es la conversión. Pero él cree que necesita más marketing.

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
      return Response.json(
        { error: 'diagnostic_id es requerido' },
        { status: 400 }
      );
    }

    // ── 1. Obtener datos del diagnóstico de Supabase ──
    const { data: diagData, error: diagError } = await supabase
      .rpc('get_diagnostic_for_ai', { p_diagnostic_id: diagnostic_id });

    if (diagError || !diagData) {
      console.error('Error obteniendo diagnóstico:', diagError);
      return Response.json(
        { error: 'Diagnóstico no encontrado' },
        { status: 404 }
      );
    }

    // ── 2. Verificar si tenemos API key de Anthropic ──
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!anthropicKey) {
      // Sin API key: actualizar estado y retornar placeholder
      await supabase
        .from('ai_reports')
        .update({
          report_status: 'pending',
          report_html: null,
        })
        .eq('diagnostic_id', diagnostic_id);

      return Response.json({
        report_html: null,
        status: 'pending',
        message: 'API de Anthropic no configurada todavía. El diagnóstico fue guardado correctamente.'
      });
    }

    // ── 3. Actualizar estado a "generating" ──
    await supabase
      .from('ai_reports')
      .update({ report_status: 'generating' })
      .eq('diagnostic_id', diagnostic_id);

    // ── 4. Construir el user prompt con los datos ──
    const userPrompt = `Generá el Informe Estratégico QUVICai para este usuario.

DATOS DEL DIAGNÓSTICO:
${JSON.stringify(diagData, null, 2)}

ANTES DE ESCRIBIR, analizá internamente:
— ¿Cuál es la brecha de percepción dominante? (sobreestimación / subestimación / punto ciego)
— ¿Cuáles son las 2 dimensiones más contradictorias entre sí?
— ¿Qué cree el usuario que es su problema principal vs. cuál es realmente?

Luego generá el informe con esta estructura exacta:

════════════════════════════════════
INFORME ESTRATÉGICO QUVICai
Score: ${diagData.diagnostic.score_total} / 100  |  ${diagData.diagnostic.level_key}
════════════════════════════════════

1. DIAGNÓSTICO GENERAL
─────────────────────
[3-4 líneas. Estado real del negocio. Específico con la industria. No empieces con el score.]

2. LO QUE TUS NÚMEROS REVELAN
─────────────────────────────
[Analizá las 2-3 dimensiones con mayor brecha. Por cada una: qué muestra, qué significa realmente, qué está generando hoy. Nombrá la contradicción si existe.]

3. EL PROBLEMA CENTRAL
──────────────────────
[Una sola frase. El bloqueo real detrás de todo. No el síntoma — la causa. Formato: "El problema central es [X]."]

4. LO QUE ESTÁ COSTANDO HOY
────────────────────────────
[2-3 líneas. Consecuencias concretas y actuales. En términos de tiempo, dinero o energía desperdiciada.]

5. LO QUE VA A PASAR SI NADA CAMBIA
─────────────────────────────────────
[2-3 líneas. Proyección realista. Sin catastrofismo. Con la incomodidad justa para que quiera actuar.]

6. LAS 3 PRIORIDADES INMEDIATAS
────────────────────────────────
[3 acciones ordenadas por impacto real. Cada acción: qué hacer + por qué ahora + qué cambia. Concretas. Medibles.]

7. CIERRE
─────────
[2-3 líneas. Sin motivación. Sin pregunta retórica. Cerrá con una afirmación, no con una promesa.]`;

    // ── 5. Llamar a Anthropic API ──
    const aiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system: SYSTEM_PROMPT,
        messages: [
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    const aiData = await aiResponse.json();

    if (!aiResponse.ok) {
      console.error('Anthropic API error:', aiData);
      await supabase
        .from('ai_reports')
        .update({
          report_status: 'failed',
          error_message: JSON.stringify(aiData),
        })
        .eq('diagnostic_id', diagnostic_id);

      return Response.json(
        { error: 'Error generando informe IA', details: aiData },
        { status: 500 }
      );
    }

    // ── 6. Extraer el texto del informe ──
    const reportText = aiData.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('\n');

    // Convertir saltos de línea a HTML para renderizar
    const reportHtml = reportText
      .replace(/═+/g, '<hr style="border:none;border-top:2px solid var(--blue);margin:16px 0">')
      .replace(/─+/g, '')
      .replace(/\n/g, '<br>');

    // ── 7. Detectar brecha de percepción dominante ──
    // (análisis simple basado en las dimensiones)
    const dims = diagData.dimensions || [];
    const scores = dims.map(d => ({ dim: d.dimension, pct: d.score_pct }));
    const avgScore = diagData.diagnostic.score_total;
    const highDims = scores.filter(s => s.pct > avgScore + 15);
    const lowDims = scores.filter(s => s.pct < avgScore - 15);

    let perceptionGap = 'punto_ciego';
    if (highDims.length > 0 && avgScore < 50) perceptionGap = 'sobreestimacion';
    else if (lowDims.length > 0 && avgScore > 50) perceptionGap = 'subestimacion';

    // ── 8. Guardar informe en Supabase ──
    await supabase
      .from('ai_reports')
      .update({
        report_status: 'completed',
        report_html: reportHtml,
        perception_gap: perceptionGap,
        central_problem: reportText.match(/El problema central es (.+?)[\.\n]/)?.[1] || null,
        generated_at: new Date().toISOString(),
        error_message: null,
      })
      .eq('diagnostic_id', diagnostic_id);

    // ── 9. Retornar informe al frontend ──
    return Response.json({
      report_html: reportHtml,
      perception_gap: perceptionGap,
      status: 'completed',
    });

  } catch (err) {
    console.error('Server error:', err);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
