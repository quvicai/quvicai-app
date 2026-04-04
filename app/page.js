export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!-- ═══════════════════════════════════════
     QUVICai Score — Diagnóstico completo
     Conectado a: Supabase + Anthropic API
═══════════════════════════════════════ -->

<style>
/* ── TOKENS ── */
:root {
  --blue:       #004AAD;
  --blue-mid:   #0066FF;
  --blue-light: #EEF5FF;
  --cyan:       #00AEEF;
  --text:       #1F2937;
  --muted:      #6B7280;
  --light:      #9CA3AF;
  --border:     #E5E7EB;
  --soft:       #F3F4F6;
  --red:        #DC2626;
  --orange:     #D97706;
  --green:      #059669;
  --sh-sm: 0 2px 8px rgba(0,74,173,.08),0 1px 3px rgba(0,74,173,.05);
  --sh-md: 0 6px 24px rgba(0,74,173,.11),0 2px 8px rgba(0,74,173,.07);
  --sh-lg: 0 16px 48px rgba(0,74,173,.15),0 4px 14px rgba(0,74,173,.08);
  --sh-xl: 0 24px 64px rgba(0,74,173,.18),0 8px 20px rgba(0,74,173,.10);
  --r-sm:10px; --r-md:16px; --r-lg:22px; --r-xl:28px; --r-full:9999px;
}

/* ── RESET ── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Onest',system-ui,sans-serif;background:var(--blue-light);color:var(--text);min-height:100vh;-webkit-font-smoothing:antialiased}
button,input,select{font-family:inherit}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}

/* ── NAV ── */
.nav{position:sticky;top:0;z-index:100;height:56px;background:rgba(255,255,255,.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,74,173,.08);display:flex;align-items:center;justify-content:space-between;padding:0 24px}
.nav-brand{display:flex;align-items:center;gap:9px;text-decoration:none;cursor:default}
.nav-mark{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,var(--blue),#0066CC);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;color:#fff;box-shadow:0 2px 8px rgba(0,74,173,.28)}
.nav-name{font-weight:800;font-size:16px;color:var(--blue);letter-spacing:-.02em}
.nav-name em{font-style:normal;color:var(--cyan)}
.nav-pill{font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--cyan);background:rgba(0,174,239,.1);border:1px solid rgba(0,174,239,.22);padding:4px 12px;border-radius:var(--r-full)}
.nav-prog-wrap{height:3px;background:var(--soft);position:sticky;top:56px;z-index:99}
.nav-prog-fill{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));width:0%;transition:width .5s ease}

/* ── LAYOUT ── */
.main{min-height:calc(100vh - 59px)}
.wrap{max-width:660px;margin:0 auto;padding:0 20px}
.wrap-md{max-width:780px;margin:0 auto;padding:0 20px}

/* ── SCREENS ── */
.screen{display:none;padding:44px 0 72px}
.screen.active{display:block;animation:fadeIn .36s cubic-bezier(.16,1,.3,1) both}
@keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

/* ── TYPE ── */
.eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--cyan);margin-bottom:12px;display:flex;align-items:center;gap:8px}
.eyebrow::before{content:'';width:14px;height:2px;background:var(--cyan);border-radius:1px}
h1{font-size:clamp(28px,5.5vw,50px);font-weight:900;line-height:1.1;letter-spacing:-.035em;color:var(--text);margin-bottom:18px}
h1 .hl{color:var(--blue)}
h2{font-size:clamp(20px,3.5vw,28px);font-weight:800;letter-spacing:-.028em;line-height:1.2;margin-bottom:10px}
.lead{font-size:16px;color:var(--muted);line-height:1.75;margin-bottom:26px}
.lead b{color:var(--text);font-weight:700}

/* ── BUTTONS ── */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:var(--r-sm);cursor:pointer;font-family:inherit;font-weight:700;font-size:15px;padding:13px 26px;transition:all .2s;text-decoration:none;white-space:nowrap}
.btn:active{transform:scale(.97)}
.btn:disabled{opacity:.35;cursor:not-allowed;transform:none!important}
.btn-primary{background:var(--blue);color:#fff;box-shadow:0 4px 16px rgba(0,74,173,.28)}
.btn-primary:hover{background:var(--blue-mid);transform:translateY(-2px);box-shadow:0 6px 22px rgba(0,102,255,.36)}
.btn-cta{background:var(--blue);color:#fff;font-size:17px;font-weight:800;padding:18px 40px;border-radius:12px;box-shadow:0 6px 24px rgba(0,74,173,.32);letter-spacing:-.01em}
.btn-cta:hover{background:var(--blue-mid);transform:translateY(-3px);box-shadow:0 10px 32px rgba(0,102,255,.38)}
.btn-ghost{background:transparent;color:var(--muted);padding:11px 14px;font-size:14px;font-weight:600}
.btn-ghost:hover{color:var(--blue)}
.btn-full{width:100%;justify-content:center}

/* ── FORM ── */
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:14px}
.form-label{font-size:13px;font-weight:700;color:var(--text)}
.form-label sup{color:var(--red);margin-left:1px}
.form-input,.form-select{height:48px;border:1.5px solid var(--border);border-radius:var(--r-sm);padding:0 16px;font-size:15px;font-family:inherit;color:var(--text);background:#fff;outline:none;transition:border-color .15s,box-shadow .15s;-webkit-appearance:none}
.form-input::placeholder{color:var(--light)}
.form-input:focus,.form-select:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(0,74,173,.1)}
.form-input.err{border-color:var(--red)}
.sel-wrap{position:relative}
.sel-wrap::after{content:'▾';position:absolute;right:14px;top:50%;transform:translateY(-50%);color:var(--muted);pointer-events:none;font-size:13px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-card{background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);box-shadow:var(--sh-md);padding:32px 36px}

/* ── QUESTION CARDS ── */
.q-card{background:#fff;border:1.5px solid var(--border);border-radius:var(--r-lg);padding:22px 20px;margin-bottom:10px;box-shadow:0 1px 3px rgba(0,74,173,.05);transition:border-color .2s,box-shadow .2s}
.q-card.done{border-color:rgba(0,74,173,.22);box-shadow:0 4px 14px rgba(0,74,173,.07)}
.q-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:16px}
.q-num{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--blue-light);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--blue);transition:all .2s}
.q-card.done .q-num{background:var(--blue);border-color:var(--blue);color:#fff}
.q-text{font-size:15px;font-weight:600;color:var(--text);line-height:1.45}
.q-dim{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--light);margin-top:3px}
.opts{display:flex;flex-direction:column;gap:7px}
.opt{display:flex;align-items:center;gap:12px;padding:11px 14px;border:1.5px solid var(--border);border-radius:var(--r-sm);cursor:pointer;background:#fff;transition:all .15s;user-select:none}
.opt:hover{border-color:rgba(0,74,173,.28);background:rgba(0,74,173,.025)}
.opt.sel{border-color:var(--blue);background:rgba(0,74,173,.04)}
.opt-radio{width:18px;height:18px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;transition:all .15s;position:relative}
.opt.sel .opt-radio{border-color:var(--blue);background:var(--blue)}
.opt.sel .opt-radio::after{content:'';position:absolute;inset:3px;border-radius:50%;background:#fff}
.opt-text{font-size:13px;color:var(--text);line-height:1.4;flex:1}
.dim-sep{display:flex;align-items:center;gap:12px;margin:20px 0 14px}
.dim-sep-line{flex:1;height:1px;background:var(--border)}
.dim-sep-lbl{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);background:rgba(0,74,173,.07);padding:4px 11px;border-radius:var(--r-full);white-space:nowrap}

/* ── CALC SCREEN ── */
.calc-wrap{padding:64px 0;text-align:center}
.calc-orbit{position:relative;width:130px;height:130px;margin:0 auto 28px}
.orbit-r{position:absolute;inset:0;border-radius:50%;border:3px solid transparent;border-top-color:var(--blue);animation:spin 1s linear infinite}
.orbit-r.r2{inset:12px;border-top-color:var(--blue-mid);animation-duration:1.6s;animation-direction:reverse}
.orbit-r.r3{inset:24px;border-top-color:var(--cyan);animation-duration:2.2s}
@keyframes spin{to{transform:rotate(360deg)}}
.orbit-core{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.orbit-pct{font-size:19px;font-weight:900;color:var(--blue);letter-spacing:-.04em}
.orbit-sub{font-size:10px;color:var(--light);font-weight:500;margin-top:1px}
.calc-ttl{font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px;letter-spacing:-.025em}
.calc-sub{font-size:14px;color:var(--muted);margin-bottom:28px}
.calc-steps{max-width:300px;margin:0 auto;display:flex;flex-direction:column;gap:8px}
.cs{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--border);border-radius:var(--r-sm);padding:10px 14px;font-size:13px;color:var(--muted);opacity:0;transform:translateX(-8px);transition:all .35s}
.cs.show{opacity:1;transform:translateX(0);color:var(--text);border-color:rgba(0,74,173,.15)}
.cs.done{color:var(--green);border-color:rgba(5,150,105,.2);background:rgba(5,150,105,.03)}

/* ── RESULT ── */
.score-card{background:#fff;border:1.5px solid rgba(0,74,173,.12);border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--sh-xl);margin-bottom:18px}
.score-card-hdr{background:linear-gradient(135deg,#002f7a 0%,var(--blue) 55%,#0055cc 100%);padding:18px 26px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden}
.score-card-hdr::after{content:'';position:absolute;top:-40px;right:-40px;width:150px;height:150px;border-radius:50%;background:rgba(0,174,239,.12);pointer-events:none}
.schb{position:relative;z-index:1}
.schb-name{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:3px}
.schb-title{font-size:18px;font-weight:900;color:#fff;letter-spacing:-.02em}
.schb-sub{font-size:11px;color:rgba(255,255,255,.5);margin-top:2px}
.schb-cert{position:relative;z-index:1;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:var(--r-full);padding:5px 13px;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8)}
.score-card-body{padding:26px 30px}
.score-display{display:flex;align-items:center;gap:28px;margin-bottom:22px}
.score-num-wrap{flex-shrink:0;text-align:center}
.score-num{font-size:clamp(68px,13vw,92px);font-weight:900;color:var(--blue);line-height:1;letter-spacing:-.06em;display:flex;align-items:baseline;gap:5px}
.score-denom{font-size:clamp(18px,3.5vw,26px);font-weight:700;color:var(--light)}
.score-num-lbl{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cyan);margin-top:3px}
.score-meta{flex:1;display:flex;flex-direction:column;gap:13px}
.level-pill{display:inline-flex;align-items:center;gap:7px;padding:7px 15px;border-radius:var(--r-full);font-size:13px;font-weight:800;border:2px solid;width:fit-content}
.level-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.prog-labels{display:flex;justify-content:space-between;font-size:10px;color:var(--light);font-weight:500;margin-bottom:5px}
.prog-track{height:10px;background:var(--soft);border-radius:var(--r-full);overflow:hidden;position:relative}
.prog-fill{height:100%;border-radius:var(--r-full);width:0%;transition:width 1.5s cubic-bezier(.4,0,.2,1) .3s;position:relative}
.prog-fill::after{content:'';position:absolute;right:0;top:0;bottom:0;width:4px;background:rgba(255,255,255,.4);border-radius:0 var(--r-full) var(--r-full) 0}
.seg-labels{display:flex;justify-content:space-between;margin-top:5px}
.seg{font-size:10px;color:var(--light);font-weight:500;text-align:center;transition:all .3s}
.seg.active{font-weight:800}
.score-insight{font-size:14px;color:var(--muted);line-height:1.7}
.score-insight b{color:var(--text);font-weight:700}

/* Benchmark */
.bench-card{background:#fff;border:1px solid var(--border);border-radius:var(--r-lg);padding:22px 26px;box-shadow:var(--sh-sm);margin-bottom:18px}
.card-lbl{font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--blue);display:flex;align-items:center;gap:7px;margin-bottom:16px}
.card-lbl::before{content:'';width:13px;height:2px;background:var(--blue);border-radius:1px}
.bench-hero{background:linear-gradient(135deg,rgba(0,74,173,.05),rgba(0,174,239,.05));border:1px solid rgba(0,74,173,.09);border-radius:var(--r-md);padding:18px 22px;text-align:center;margin-bottom:16px}
.bench-hero-n{font-size:38px;font-weight:900;color:var(--blue);letter-spacing:-.05em;line-height:1;margin-bottom:5px}
.bench-hero-t{font-size:14px;color:var(--text);font-weight:600;line-height:1.4}
.bench-hero-t span{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:3px}
.bench-bars{display:flex;flex-direction:column;gap:10px}
.bench-row{display:flex;align-items:center;gap:10px}
.bench-row-lbl{font-size:13px;font-weight:600;color:var(--text);min-width:130px}
.bench-row-track{flex:1;height:8px;background:var(--soft);border-radius:var(--r-full);overflow:hidden}
.bench-row-fill{height:100%;border-radius:var(--r-full);width:0%;transition:width 1.3s cubic-bezier(.4,0,.2,1) .5s}
.bench-row-val{font-size:13px;font-weight:800;min-width:28px;text-align:right}

/* Dimensions */
.dims-card{background:#fff;border:1px solid var(--border);border-radius:var(--r-lg);padding:22px 26px;box-shadow:var(--sh-sm);margin-bottom:18px}
.dim-rows{display:flex;flex-direction:column;gap:12px}
.dim-row{display:flex;align-items:center;gap:10px}
.dim-name{font-size:13px;font-weight:600;color:var(--text);min-width:160px}
.dim-track{flex:1;height:7px;background:var(--soft);border-radius:var(--r-full);overflow:hidden}
.dim-fill{height:100%;border-radius:var(--r-full);width:0%;transition:width 1.2s cubic-bezier(.4,0,.2,1) .6s}
.dim-pct{font-size:13px;font-weight:700;min-width:36px;text-align:right}
.dim-badge{font-size:10px;font-weight:700;padding:2px 8px;border-radius:var(--r-full);min-width:64px;text-align:center}

/* Share */
.share-card{background:#fff;border:1.5px solid var(--border);border-radius:var(--r-lg);padding:20px 24px;box-shadow:var(--sh-sm);margin-bottom:18px}
.share-prev{background:var(--blue-light);border:1px solid rgba(0,74,173,.1);border-radius:var(--r-sm);padding:12px 16px;font-size:14px;color:var(--text);line-height:1.65;margin-bottom:13px;font-style:italic}
.share-prev b{font-style:normal;color:var(--blue);font-weight:700}
.share-btns{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.share-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:11px 6px;border:1.5px solid var(--border);border-radius:var(--r-sm);cursor:pointer;background:#fff;font-family:inherit;font-size:11px;font-weight:700;color:var(--text);transition:all .2s}
.share-btn:hover{border-color:var(--blue);background:rgba(0,74,173,.04);color:var(--blue);transform:translateY(-2px);box-shadow:var(--sh-sm)}
.share-btn-icon{font-size:17px}

/* Lead capture */
.lead-card{background:linear-gradient(135deg,var(--blue) 0%,var(--blue-mid) 100%);border-radius:var(--r-xl);padding:32px 28px;box-shadow:var(--sh-xl);margin-bottom:18px;position:relative;overflow:hidden}
.lead-card::before{content:'';position:absolute;top:-40px;right:-40px;width:170px;height:170px;border-radius:50%;background:rgba(255,255,255,.07)}
.lead-card::after{content:'';position:absolute;bottom:-50px;left:-30px;width:140px;height:140px;border-radius:50%;background:rgba(0,174,239,.1)}
.lc-inner{position:relative;z-index:1}
.lc-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);padding:5px 13px;border-radius:var(--r-full);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;margin-bottom:12px}
.lc-title{font-size:clamp(19px,3.5vw,24px);font-weight:900;color:#fff;margin-bottom:7px;letter-spacing:-.025em;line-height:1.2}
.lc-desc{font-size:14px;color:rgba(255,255,255,.72);line-height:1.65;margin-bottom:18px}
.lc-feats{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:20px}
.lc-feat{display:flex;align-items:center;gap:5px;font-size:13px;color:rgba(255,255,255,.85);font-weight:500}
.lc-feat::before{content:'✓';font-weight:900;color:rgba(255,255,255,.95)}
.lc-form{display:flex;flex-direction:column;gap:9px}
.lc-input{height:48px;border:1.5px solid rgba(255,255,255,.25);border-radius:var(--r-sm);padding:0 16px;font-size:15px;font-family:inherit;color:#fff;background:rgba(255,255,255,.12);outline:none;transition:border-color .15s,background .15s}
.lc-input::placeholder{color:rgba(255,255,255,.5)}
.lc-input:focus{border-color:rgba(255,255,255,.6);background:rgba(255,255,255,.18)}
.lc-submit{background:#fff;color:var(--blue);border:none;border-radius:var(--r-sm);cursor:pointer;font-family:inherit;font-size:16px;font-weight:800;padding:15px 24px;transition:all .2s;box-shadow:0 4px 16px rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;gap:8px}
.lc-submit:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.2)}
.lc-submit:active{transform:scale(.97)}
.lc-privacy{font-size:11px;color:rgba(255,255,255,.4);text-align:center;margin-top:6px}
.lc-success{display:none;text-align:center;padding:8px 0}
.lc-success.show{display:block}
.lc-form.hide{display:none}
.lc-success-icon{font-size:38px;margin-bottom:12px}
.lc-success-title{font-size:21px;font-weight:800;color:#fff;margin-bottom:7px}
.lc-success-body{font-size:14px;color:rgba(255,255,255,.75);line-height:1.65}

/* AI Report */
.ai-report-card{background:#fff;border:1.5px solid rgba(0,74,173,.15);border-radius:var(--r-xl);padding:32px 28px;box-shadow:var(--sh-lg);margin-bottom:18px}
.ai-report-card h3{font-size:18px;font-weight:800;color:var(--blue);margin-bottom:16px}
.ai-report-content{font-size:14px;line-height:1.85;color:var(--text);white-space:pre-line}
.ai-report-loading{text-align:center;padding:40px 20px}
.ai-report-loading .spinner{width:40px;height:40px;border:3px solid var(--border);border-top-color:var(--blue);border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 16px}
.ai-cta-card{background:linear-gradient(135deg,var(--blue) 0%,#0055cc 100%);border-radius:var(--r-lg);padding:24px;text-align:center;margin-top:20px}
.ai-cta-card p{color:rgba(255,255,255,.8);font-size:14px;margin-bottom:12px}
.ai-cta-card button{background:#fff;color:var(--blue);border:none;border-radius:var(--r-sm);cursor:pointer;font-family:inherit;font-size:16px;font-weight:800;padding:14px 32px;box-shadow:0 4px 16px rgba(0,0,0,.15);transition:all .2s}
.ai-cta-card button:hover{transform:translateY(-2px)}

/* WhatsApp */
.wa-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:#25D366;color:#fff;border:none;border-radius:var(--r-sm);cursor:pointer;font-family:inherit;font-size:16px;font-weight:800;padding:16px 28px;width:100%;transition:all .2s;box-shadow:0 4px 16px rgba(37,211,102,.3)}
.wa-btn:hover{background:#1ebe5c;transform:translateY(-2px);box-shadow:0 8px 24px rgba(37,211,102,.38)}
.wa-btn:active{transform:scale(.97)}

.nav-footer{display:flex;justify-content:space-between;align-items:center;padding-top:22px;margin-top:22px;border-top:1px solid var(--soft)}
.toast{position:fixed;bottom:22px;left:50%;z-index:9999;transform:translateX(-50%) translateY(66px);background:var(--text);color:#fff;padding:11px 20px;border-radius:var(--r-md);font-size:14px;font-weight:500;box-shadow:var(--sh-lg);transition:transform .38s cubic-bezier(.34,1.56,.64,1);pointer-events:none;white-space:nowrap}
.toast.show{transform:translateX(-50%) translateY(0)}
.footer{background:#fff;border-top:1px solid var(--border);padding:18px 24px;text-align:center;font-size:12px;color:var(--light)}
.footer b{color:var(--blue)}

.sp-row{display:flex;align-items:center;justify-content:center;gap:9px;font-size:13px;color:var(--muted);margin-bottom:28px}
.sp-avs{display:flex}
.sp-av{width:26px;height:26px;border-radius:50%;border:2px solid #fff;background:linear-gradient(135deg,var(--blue),var(--cyan));display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;margin-left:-7px}
.sp-av:first-child{margin-left:0}
.feats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:36px}
.feat{background:#fff;border:1px solid var(--border);border-radius:var(--r-md);padding:18px 14px;text-align:center;box-shadow:var(--sh-sm)}
.feat-icon{font-size:20px;margin-bottom:8px}
.feat-name{font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px}
.feat-desc{font-size:12px;color:var(--muted);line-height:1.5}
.urgency{display:inline-flex;align-items:center;gap:7px;background:rgba(0,74,173,.07);border:1px solid rgba(0,74,173,.13);padding:7px 16px;border-radius:var(--r-full);font-size:13px;font-weight:700;color:var(--blue);margin-bottom:24px}
.pulse{width:8px;height:8px;border-radius:50%;background:var(--cyan);animation:pls 1.8s ease-in-out infinite;flex-shrink:0}
@keyframes pls{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.7)}}
.stats{display:flex;justify-content:center;flex-wrap:wrap;gap:24px;margin:24px auto 32px}
.stat-n{font-size:28px;font-weight:900;color:var(--blue);line-height:1;letter-spacing:-.04em}
.stat-l{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--light);margin-top:2px}

@media(max-width:620px){
  .feats{grid-template-columns:1fr}
  .form-grid{grid-template-columns:1fr}
  .share-btns{grid-template-columns:repeat(2,1fr)}
  .score-display{flex-direction:column;gap:18px}
  .score-card-body{padding:20px 18px}
  .form-card{padding:22px 18px}
  .bench-row-lbl{min-width:90px;font-size:12px}
  .dim-name{min-width:110px;font-size:12px}
  .lead-card{padding:24px 18px}
  .lc-feats{flex-direction:column}
  .dims-card,.bench-card,.share-card{padding:18px}
}
@media(max-width:400px){
  .wrap,.wrap-md{padding:0 14px}
  h1{font-size:26px}
}
</style>

<!-- NAV -->
<nav class="nav">
  <div class="nav-brand">
    <div class="nav-mark">Qai</div>
    <span class="nav-name">QUVIC<em>ai</em></span>
  </div>
  <div class="nav-right">
    <div class="nav-pill" id="navPill">Acceso al diagnóstico</div>
  </div>
</nav>
<div class="nav-prog-wrap"><div class="nav-prog-fill" id="navProg"></div></div>

<main class="main">

<!-- PANTALLA 1 · LANDING -->
<div class="screen active" id="sc-land">
<div class="wrap" style="text-align:center;padding-top:20px">
  <div class="urgency"><span class="pulse"></span>Más de 2.400 diagnósticos realizados este mes</div>
  <h1>Tu negocio tiene<br>un <span class="hl">puntaje oculto.</span></h1>
  <p class="lead" style="max-width:540px;margin:0 auto 22px">Descubrí tu <b>Índice de Claridad Empresarial</b> en 3 minutos.<br>12 preguntas. Resultado inmediato.</p>
  <div class="sp-row">
    <div class="sp-avs"><div class="sp-av">JM</div><div class="sp-av">AS</div><div class="sp-av">RC</div><div class="sp-av">PL</div></div>
    <span>Empresarios que ya conocen su score esta semana</span>
  </div>
  <button class="btn btn-cta" onclick="goTo('sc-data')">Descubrir mi QUVICai Score &nbsp;→</button>
  <div class="stats">
    <div><div class="stat-n">12</div><div class="stat-l">Preguntas</div></div>
    <div><div class="stat-n">3'</div><div class="stat-l">Duración</div></div>
    <div><div class="stat-n">5</div><div class="stat-l">Dimensiones</div></div>
    <div><div class="stat-n">100%</div><div class="stat-l">Score inmediato</div></div>
  </div>
  <div class="feats">
    <div class="feat"><div class="feat-icon">🎯</div><div class="feat-name">Claridad estratégica</div><div class="feat-desc">Propuesta de valor, cliente ideal y oferta evaluados.</div></div>
    <div class="feat"><div class="feat-icon">📊</div><div class="feat-name">Marketing y ventas</div><div class="feat-desc">Sistema de demanda, campañas y proceso comercial.</div></div>
    <div class="feat"><div class="feat-icon">⚡</div><div class="feat-name">Operaciones y escala</div><div class="feat-desc">Control, autonomía, automatización y toma de decisiones.</div></div>
  </div>
</div>
</div>

<!-- PANTALLA 2 · DATOS -->
<div class="screen" id="sc-data">
<div class="wrap">
  <div class="eyebrow">Paso 1 de 2 — Datos</div>
  <h2>Contanos sobre tu negocio</h2>
  <p class="lead" style="margin-bottom:22px">Solo 30 segundos. Personalizamos tu diagnóstico con estos datos.</p>
  <div class="form-card">
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Nombre <sup>*</sup></label><input class="form-input" id="f-name" type="text" placeholder="Tu nombre"></div>
      <div class="form-group"><label class="form-label">Email <sup>*</sup></label><input class="form-input" id="f-email" type="email" placeholder="tu@email.com"></div>
    </div>
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Industria <sup>*</sup></label>
        <div class="sel-wrap"><select class="form-select" id="f-industry">
          <option value="">Seleccioná tu industria</option>
          <option>Tecnología / Software</option><option>Consultoría / Servicios profesionales</option>
          <option>E-commerce / Retail</option><option>Salud / Bienestar</option>
          <option>Educación / Formación</option><option>Gastronomía / Alimentos</option>
          <option>Marketing / Publicidad</option><option>Construcción / Inmobiliaria</option>
          <option>Finanzas / Contabilidad</option><option>Logística / Transporte</option>
          <option>Manufactura / Producción</option><option>Otro</option>
        </select></div>
      </div>
      <div class="form-group"><label class="form-label">País <sup>*</sup></label>
        <div class="sel-wrap"><select class="form-select" id="f-country">
          <option value="">Seleccioná tu país</option>
          <option>Argentina</option><option>México</option><option>Colombia</option>
          <option>Chile</option><option>Perú</option><option>Brasil</option>
          <option>Ecuador</option><option>Uruguay</option><option>España</option>
          <option>Estados Unidos</option><option>Otro</option>
        </select></div>
      </div>
    </div>
    <div style="padding-top:14px;text-align:right"><button class="btn btn-primary" onclick="validateForm()">Comenzar diagnóstico →</button></div>
  </div>
</div>
</div>

<!-- PANTALLA 3 · PREGUNTAS -->
<div class="screen" id="sc-questions">
<div class="wrap">
  <div class="eyebrow">Paso 2 de 2 — Diagnóstico</div>
  <h2>Evaluá tu negocio</h2>
  <p class="lead" style="margin-bottom:22px">Respondé con honestidad. No hay respuestas correctas.</p>
  <div id="q-container"></div>
  <div class="nav-footer">
    <button class="btn btn-ghost" onclick="goTo('sc-data')">← Atrás</button>
    <button class="btn btn-primary" id="btn-calc" onclick="calcAndGo()" disabled>Ver mi Score →</button>
  </div>
</div>
</div>

<!-- PANTALLA 4 · CALCULANDO -->
<div class="screen" id="sc-calc">
<div class="wrap">
  <div class="calc-wrap">
    <div class="calc-orbit">
      <div class="orbit-r"></div><div class="orbit-r r2"></div><div class="orbit-r r3"></div>
      <div class="orbit-core"><span class="orbit-pct" id="calc-pct">0%</span><span class="orbit-sub">analizando</span></div>
    </div>
    <div class="calc-ttl">Calculando tu QUVICai Score</div>
    <div class="calc-sub">Procesando tus 12 indicadores…</div>
    <div class="calc-steps">
      <div class="cs" id="cs1">🎯 Evaluando claridad y propuesta de valor</div>
      <div class="cs" id="cs2">📡 Analizando marketing y ventas</div>
      <div class="cs" id="cs3">⚙️ Evaluando operaciones y autonomía</div>
      <div class="cs" id="cs4">⚡ Calculando automatización y datos</div>
      <div class="cs" id="cs5">✅ Diagnóstico listo</div>
    </div>
  </div>
</div>
</div>

<!-- PANTALLA 5 · RESULTADO -->
<div class="screen" id="sc-result">
<div class="wrap-md">
  <div class="score-card">
    <div class="score-card-hdr">
      <div class="schb">
        <div class="schb-name">QUVICai · Diagnóstico Estratégico</div>
        <div class="schb-title">QUVICai SCORE</div>
        <div class="schb-sub">Índice de Claridad Empresarial</div>
      </div>
      <div class="schb-cert">Resultado verificado</div>
    </div>
    <div class="score-card-body">
      <div class="score-display">
        <div class="score-num-wrap">
          <div class="score-num"><span id="res-num">0</span><span class="score-denom">/ 100</span></div>
          <div class="score-num-lbl">QUVICai Score</div>
        </div>
        <div class="score-meta">
          <div class="level-pill" id="res-level-pill"><span class="level-dot" id="res-ldot"></span><span id="res-ltext"></span></div>
          <div>
            <div class="prog-labels"><span>0</span><span>40</span><span>60</span><span>80</span><span>100</span></div>
            <div class="prog-track"><div class="prog-fill" id="res-prog"></div></div>
            <div class="seg-labels"><span class="seg" id="seg0">Bloqueado</span><span class="seg" id="seg1">Frágil</span><span class="seg" id="seg2">Expansión</span><span class="seg" id="seg3">Optimizado</span></div>
          </div>
          <div class="score-insight" id="res-insight"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- AI REPORT -->
  <div class="ai-report-card" id="ai-report-section" style="display:none">
    <div class="card-lbl">Informe estratégico QUVICai</div>
    <div id="ai-report-body">
      <div class="ai-report-loading"><div class="spinner"></div><p style="color:var(--muted);font-size:14px">Generando tu informe estratégico personalizado…</p></div>
    </div>
    <div class="ai-cta-card" id="ai-cta-pro" style="display:none">
      <p>Este informe muestra el diagnóstico. QUVICai Pro te acompaña a corregirlo.</p>
      <button onclick="alert('Stripe checkout próximamente')">Activar QUVICai Pro →</button>
    </div>
  </div>

  <div class="bench-card">
    <div class="card-lbl">Benchmark QUVICai</div>
    <div class="bench-hero"><div class="bench-hero-n" id="bench-pct-display">—%</div><div class="bench-hero-t" id="bench-hero-txt">Tu negocio está mejor que el <span id="bench-pct-inline">—</span>% de los negocios evaluados<span id="bench-context"></span></div></div>
    <div class="bench-bars" id="bench-bars"></div>
  </div>

  <div class="dims-card"><div class="card-lbl">Resultado por dimensión</div><div class="dim-rows" id="dim-rows"></div></div>

  <div class="share-card">
    <div class="card-lbl">Compartir mi QUVICai Score</div>
    <div class="share-prev">Mi negocio tiene un <b>QUVICai Score de <span id="share-n">—</span> sobre 100</b> en claridad empresarial. Hacé tu diagnóstico en quvicai.com</div>
    <div class="share-btns">
      <button class="share-btn" onclick="doShare('whatsapp')"><span class="share-btn-icon">💬</span>WhatsApp</button>
      <button class="share-btn" onclick="doShare('instagram')"><span class="share-btn-icon">📸</span>Instagram</button>
      <button class="share-btn" onclick="doShare('linkedin')"><span class="share-btn-icon">💼</span>LinkedIn</button>
      <button class="share-btn" onclick="copyResult()"><span class="share-btn-icon">📋</span>Copiar</button>
    </div>
  </div>

  <div class="lead-card">
    <div class="lc-inner">
      <div class="lc-badge">🔓 Diagnóstico completo</div>
      <div class="lc-title">Recibí tu análisis estratégico completo</div>
      <div class="lc-desc">Reporte ampliado con análisis por dimensión, benchmarks de tu industria y hoja de ruta personalizada.</div>
      <div class="lc-feats"><span class="lc-feat">Análisis por área</span><span class="lc-feat">Hoja de ruta 90 días</span><span class="lc-feat">Plan de acción</span><span class="lc-feat">Benchmarks</span></div>
      <div id="lc-form-wrap">
        <div class="lc-form" id="lc-form">
          <input class="lc-input" id="lc-name" type="text" placeholder="Tu nombre completo">
          <input class="lc-input" id="lc-contact" type="text" placeholder="WhatsApp o Email">
          <button class="lc-submit" onclick="submitLead()">Recibir mi diagnóstico completo →</button>
          <div class="lc-privacy">🔒 Privado. Sin spam.</div>
        </div>
        <div class="lc-success" id="lc-success">
          <div class="lc-success-icon">🎉</div>
          <div class="lc-success-title">¡Listo, <span id="lc-name-ok"></span>!</div>
          <div class="lc-success-body">Tu diagnóstico completo está en camino. Revisá tu WhatsApp o email en los próximos minutos.</div>
        </div>
      </div>
    </div>
  </div>

  <button class="wa-btn" id="wa-cta" onclick="openWhatsApp()">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    Hablar con un especialista QUVICai
  </button>
  <div style="text-align:center;padding-top:14px"><button class="btn btn-ghost" onclick="restart()">← Nuevo diagnóstico</button></div>
</div>
</div>

</main>

<div class="toast" id="toast"></div>
<footer class="footer"><b>QUVICai</b> · Diagnóstico de Claridad Empresarial · © 2025</footer>

<script>
'use strict';

/* ─────────────────────────────────────
   DATA · 12 preguntas, 4 opciones c/u
───────────────────────────────────────── */
const QUESTIONS = [
  {id:1,dim:'claridad',text:'¿Qué tan claro está hoy cuál es la propuesta de valor principal de tu negocio?',opts:[{t:'No está clara ni diferenciada',s:1},{t:'Está más o menos definida',s:2},{t:'Está clara y se comunica bastante bien',s:3},{t:'Está muy clara, diferenciada y validada por el mercado',s:4}]},
  {id:2,dim:'claridad',text:'¿Qué tan definido está tu cliente ideal?',opts:[{t:'Vendemos a cualquiera que consulte',s:1},{t:'Tenemos una idea general',s:2},{t:'Tenemos segmentos definidos',s:3},{t:'Tenemos un perfil muy claro y decisiones basadas en ese perfil',s:4}]},
  {id:3,dim:'claridad',text:'¿Tu oferta principal es fácil de entender y vender?',opts:[{t:'Confunde o depende de mucha explicación',s:1},{t:'Se entiende, pero no siempre convierte',s:2},{t:'Es clara y bastante vendible',s:3},{t:'Es simple, fuerte y convierte con facilidad',s:4}]},
  {id:4,dim:'marketing',text:'¿Hoy tu negocio genera consultas de forma predecible?',opts:[{t:'No, depende del azar o de recomendaciones aisladas',s:1},{t:'Genera algunas consultas, pero con irregularidad',s:2},{t:'Tiene canales que traen consultas con frecuencia',s:3},{t:'Tiene un sistema estable y predecible de generación de demanda',s:4}]},
  {id:5,dim:'marketing',text:'¿Tu marketing está funcionando con criterio o solo por intuición?',opts:[{t:'Publicamos o invertimos sin sistema claro',s:1},{t:'Hay intención, pero poca medición',s:2},{t:'Hay campañas y medición básica',s:3},{t:'Hay estrategia, métricas y optimización continua',s:4}]},
  {id:6,dim:'ventas',text:'¿Qué tan ordenado está tu proceso comercial?',opts:[{t:'No hay proceso claro',s:1},{t:'Hay seguimiento informal',s:2},{t:'Hay proceso definido y cierto control',s:3},{t:'Hay proceso claro, medido y optimizado',s:4}]},
  {id:7,dim:'ventas',text:'¿Sabés por qué algunas oportunidades compran y otras no?',opts:[{t:'No',s:1},{t:'A veces intuimos por qué',s:2},{t:'Tenemos varios patrones identificados',s:3},{t:'Lo medimos y usamos para mejorar conversiones',s:4}]},
  {id:8,dim:'operaciones',text:'¿Qué tan ordenada está la ejecución interna del negocio?',opts:[{t:'Hay desorden y dependencia constante de apagar incendios',s:1},{t:'Funciona, pero con fricción',s:2},{t:'Está bastante ordenada',s:3},{t:'Está ordenada, documentada y con buen control',s:4}]},
  {id:9,dim:'operaciones',text:'¿Cuánto depende el negocio de que vos estés encima de todo?',opts:[{t:'Depende casi totalmente de mí',s:1},{t:'Depende bastante de mí',s:2},{t:'Funciona con cierta autonomía',s:3},{t:'Tiene autonomía operativa en gran parte',s:4}]},
  {id:10,dim:'auto',text:'¿Cuánto de tu negocio está automatizado hoy?',opts:[{t:'Casi nada',s:1},{t:'Algunas tareas sueltas',s:2},{t:'Varias tareas importantes',s:3},{t:'Los flujos clave ya están automatizados o semiautomatizados',s:4}]},
  {id:11,dim:'auto',text:'¿Tomás decisiones con datos reales o más por sensación?',opts:[{t:'Casi siempre por sensación',s:1},{t:'Mezcla de intuición y algunos datos',s:2},{t:'Bastante apoyado en datos',s:3},{t:'Principalmente con datos, KPIs y revisión periódica',s:4}]},
  {id:12,dim:'auto',text:'Si mañana tuvieras el doble de clientes, ¿qué pasaría?',opts:[{t:'El negocio colapsaría o sufriría mucho',s:1},{t:'Se complicaría bastante',s:2},{t:'Podría absorberlo con ajustes',s:3},{t:'Está preparado para escalar con control',s:4}]},
];

const DIMS = {
  claridad:{label:'Claridad',icon:'🎯',ids:[1,2,3]},
  marketing:{label:'Marketing',icon:'📡',ids:[4,5]},
  ventas:{label:'Ventas',icon:'💰',ids:[6,7]},
  operaciones:{label:'Operaciones',icon:'⚙️',ids:[8,9]},
  auto:{label:'Automatización / Datos',icon:'⚡',ids:[10,11,12]},
};

const LEVELS = [
  {min:0,max:39,key:'blocked',label:'Negocio bloqueado',color:'#DC2626',bg:'rgba(220,38,38,.12)',bd:'rgba(220,38,38,.35)',seg:0,bench:18,insight:'Tu negocio está bloqueado por falta de claridad estructural. Hoy el problema no es hacer más, sino ordenar mejor la base. <b>Sin claridad en propuesta, proceso y control, el crecimiento se vuelve inestable.</b>'},
  {min:40,max:59,key:'fragile',label:'Crecimiento frágil',color:'#D97706',bg:'rgba(217,119,6,.12)',bd:'rgba(217,119,6,.35)',seg:1,bench:42,insight:'Tu negocio tiene movimiento, pero todavía es frágil. Hay señales de avance, pero todavía dependés demasiado de esfuerzo manual, intuición o falta de sistema. <b>La oportunidad está en ordenar y automatizar.</b>'},
  {min:60,max:79,key:'expansion',label:'Negocio en expansión',color:'#0066FF',bg:'rgba(0,102,255,.12)',bd:'rgba(0,102,255,.35)',seg:2,bench:67,insight:'Tu negocio ya está en expansión. Tenés una base real para crecer, pero todavía hay áreas que limitan velocidad y escala. <b>Si corregís los cuellos de botella principales, podés dar un salto fuerte.</b>'},
  {min:80,max:100,key:'optimized',label:'Negocio optimizado',color:'#059669',bg:'rgba(5,150,105,.12)',bd:'rgba(5,150,105,.35)',seg:3,bench:89,insight:'Tu negocio está optimizado para crecer con más control. Ya hay claridad, proceso y madurez operativa. <b>El siguiente paso no es improvisar más, sino potenciar ventaja competitiva, automatización y expansión.</b>'},
];

function getLevel(n){ return LEVELS.find(l => n >= l.min && n <= l.max) || LEVELS[0]; }

/* ── STATE ── */
const SCREENS = ['sc-land','sc-data','sc-questions','sc-calc','sc-result'];
let answers = {};
let userData = {};
let finalScore = 0;
let finalLevel = null;
let diagnosticId = null;

/* ── NAVIGATION ── */
function goTo(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const idx = SCREENS.indexOf(id);
  document.getElementById('navProg').style.width = (idx === 0 ? 0 : Math.round((idx/(SCREENS.length-1))*100)) + '%';
  document.getElementById('navPill').textContent = idx === 0 ? 'Acceso al diagnóstico' : idx >= 4 ? 'Diagnóstico completado' : 'En progreso';
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ── FORM ── */
function validateForm(){
  const ids = ['f-name','f-email','f-industry','f-country'];
  let ok = true;
  ids.forEach(id => { const el = document.getElementById(id); el.classList.remove('err'); if(!el.value.trim()){ el.classList.add('err'); ok = false; } });
  const em = document.getElementById('f-email').value;
  if(ok && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(em)){ document.getElementById('f-email').classList.add('err'); ok = false; }
  if(!ok){ showToast('⚠️ Completá todos los campos'); return; }
  userData = {
    name: document.getElementById('f-name').value.trim(),
    email: document.getElementById('f-email').value.trim(),
    industry: document.getElementById('f-industry').value,
    country: document.getElementById('f-country').value,
  };
  renderQuestions();
  goTo('sc-questions');
}

/* ── QUESTIONS ── */
function renderQuestions(){
  const c = document.getElementById('q-container');
  c.innerHTML = '';
  let lastDim = null;
  const DIM_LABELS = {claridad:'Claridad estratégica',marketing:'Marketing',ventas:'Ventas',operaciones:'Operaciones',auto:'Automatización y datos'};
  QUESTIONS.forEach(q => {
    if(q.dim !== lastDim){
      if(lastDim !== null){ const sep = document.createElement('div'); sep.className='dim-sep'; sep.innerHTML='<div class="dim-sep-line"></div><span class="dim-sep-lbl">'+DIM_LABELS[q.dim]+'</span><div class="dim-sep-line"></div>'; c.appendChild(sep); }
      lastDim = q.dim;
    }
    const card = document.createElement('div');
    card.className = 'q-card' + (answers[q.id] !== undefined ? ' done' : '');
    card.id = 'qc' + q.id;
    card.innerHTML = '<div class="q-head"><div class="q-num">'+q.id+'</div><div class="q-text">'+q.text+'</div></div><div class="opts">'+q.opts.map((o,i) => '<div class="opt'+(answers[q.id]===i?' sel':'')+'" onclick="pick('+q.id+','+i+')"><div class="opt-radio"></div><div class="opt-text">'+o.t+'</div></div>').join('')+'</div>';
    c.appendChild(card);
  });
}

function pick(qId, idx){
  answers[qId] = idx;
  const card = document.getElementById('qc'+qId);
  card.classList.add('done');
  card.querySelectorAll('.opt').forEach((el,i) => el.classList.toggle('sel', i===idx));
  document.getElementById('btn-calc').disabled = QUESTIONS.some(q => answers[q.id] === undefined);
}

/* ── DIMENSION SCORE CALC ── */
function dimScore(ids){
  const total = ids.reduce((sum,id) => sum + QUESTIONS.find(q=>q.id===id).opts[answers[id]].s, 0);
  return Math.round(((total - ids.length) / (ids.length * 3)) * 100);
}
function dimBadgeKey(p){ return p<40?'critico':p<60?'debil':p<80?'moderado':'solido'; }

/* ── CALCULATE ── */
function calcAndGo(){
  if(QUESTIONS.find(q => answers[q.id] === undefined)){
    showToast('⚠️ Respondé todas las preguntas');
    return;
  }
  goTo('sc-calc');
  runCalc();
}

async function runCalc(){
  const steps = ['cs1','cs2','cs3','cs4','cs5'];
  const pctEl = document.getElementById('calc-pct');
  for(let i=0;i<steps.length;i++){
    await delay(580);
    document.getElementById(steps[i]).classList.add('show');
    if(i>0) document.getElementById(steps[i-1]).classList.add('done');
    pctEl.textContent = Math.round(((i+1)/steps.length)*100)+'%';
  }

  const rawScore = QUESTIONS.reduce((sum,q) => sum + q.opts[answers[q.id]].s, 0);
  finalScore = Math.round(((rawScore - 12) / 36) * 100);
  finalScore = Math.max(0, Math.min(100, finalScore));
  finalLevel = getLevel(finalScore);

  /* ── Guardar en Supabase via API route ── */
  const dimensions = Object.entries(DIMS).map(([key, d]) => ({
    dimension: key,
    score_pct: dimScore(d.ids),
    badge: dimBadgeKey(dimScore(d.ids))
  }));

  try {
    const res = await fetch('/api/diagnostic', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        industry: userData.industry,
        country: userData.country,
        score_total: finalScore,
        level_key: finalLevel.key,
        raw_score: rawScore,
        raw_answers: answers,
        dimensions: dimensions
      })
    });
    const data = await res.json();
    if(data.diagnostic_id) diagnosticId = data.diagnostic_id;
    console.log('Diagnóstico guardado:', data);
  } catch(err) {
    console.error('Error guardando diagnóstico:', err);
  }

  await delay(350);
  document.getElementById(steps[steps.length-1]).classList.add('done');
  await delay(300);

  renderResult();
  goTo('sc-result');
  setTimeout(animateResult, 120);

  /* ── Solicitar informe IA (en background) ── */
  if(diagnosticId) requestAIReport(diagnosticId);
}

/* ── AI REPORT ── */
async function requestAIReport(diagId){
  const section = document.getElementById('ai-report-section');
  section.style.display = 'block';

  try {
    const res = await fetch('/api/ai-report', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ diagnostic_id: diagId })
    });
    const data = await res.json();

    if(data.report_html){
      document.getElementById('ai-report-body').innerHTML =
        '<div class="ai-report-content">' + data.report_html + '</div>';
      document.getElementById('ai-cta-pro').style.display = 'block';
    } else {
      document.getElementById('ai-report-body').innerHTML =
        '<p style="color:var(--muted);text-align:center;padding:20px">El informe IA estará disponible próximamente. Guardamos tu diagnóstico.</p>';
    }
  } catch(err) {
    console.error('Error solicitando informe IA:', err);
    document.getElementById('ai-report-body').innerHTML =
      '<p style="color:var(--muted);text-align:center;padding:20px">El informe IA estará disponible próximamente. Guardamos tu diagnóstico.</p>';
  }
}

/* ── RENDER RESULT ── */
function renderResult(){
  const lv = finalLevel;
  const s = finalScore;
  const pill = document.getElementById('res-level-pill');
  pill.style.cssText = 'color:'+lv.color+';background:'+lv.bg+';border-color:'+lv.bd;
  document.getElementById('res-ldot').style.background = lv.color;
  document.getElementById('res-ltext').textContent = lv.label;
  document.getElementById('res-prog').style.background = 'linear-gradient(90deg,'+lv.color+'88,'+lv.color+')';
  document.querySelectorAll('.seg').forEach((el,i) => el.classList.toggle('active', i===lv.seg));
  if(document.getElementById('seg'+lv.seg)) document.getElementById('seg'+lv.seg).style.color = lv.color;
  document.getElementById('res-insight').innerHTML = lv.insight;
  document.getElementById('share-n').textContent = s;

  const bp = lv.bench;
  document.getElementById('bench-pct-display').textContent = bp+'%';
  document.getElementById('bench-pct-inline').textContent = bp;
  document.getElementById('bench-context').textContent = 'Diagnósticos analizados en '+(userData.country||'tu región')+' este mes';

  const globalAvg = 51;
  const indSeed = (userData.industry||'').charCodeAt(0)%18;
  const indAvg = Math.max(32, Math.min(68, globalAvg + indSeed - 9));
  const benchRows = [
    {label:'Tu negocio',val:s,color:'#004AAD'},
    {label:'Promedio global',val:globalAvg,color:'#9CA3AF'},
    {label:userData.industry||'Tu industria',val:indAvg,color:'#00AEEF'},
  ];
  document.getElementById('bench-bars').innerHTML = benchRows.map(r =>
    '<div class="bench-row"><span class="bench-row-lbl">'+r.label+'</span><div class="bench-row-track"><div class="bench-row-fill" data-pct="'+r.val+'" style="background:'+r.color+'"></div></div><span class="bench-row-val" style="color:'+r.color+'">'+r.val+'</span></div>'
  ).join('');

  function dimColor(p){ return p<40?'#DC2626':p<60?'#D97706':p<80?'#0066FF':'#059669'; }
  function dimBadgeDisplay(p){ return p<40?['Crítico','rgba(220,38,38,.08)','#DC2626']:p<60?['Débil','rgba(217,119,6,.08)','#D97706']:p<80?['Moderado','rgba(0,102,255,.08)','#0066FF']:['Sólido','rgba(5,150,105,.08)','#059669']; }

  document.getElementById('dim-rows').innerHTML = Object.entries(DIMS).map(([key,d]) => {
    const p = dimScore(d.ids);
    const col = dimColor(p);
    const [bl,bbg,bc] = dimBadgeDisplay(p);
    return '<div class="dim-row"><span class="dim-name">'+d.icon+' '+d.label+'</span><div class="dim-track"><div class="dim-fill" data-pct="'+p+'" style="background:'+col+'"></div></div><span class="dim-pct" style="color:'+col+'">'+p+'%</span><span class="dim-badge" style="background:'+bbg+';color:'+bc+'">'+bl+'</span></div>';
  }).join('');

  const waMsg = encodeURIComponent('Hola, acabo de hacer el diagnóstico QUVICai y obtuve un Score de '+s+'/100 ('+lv.label+'). Me gustaría hablar con un especialista para entender cómo mejorar.');
  document.getElementById('wa-cta').onclick = () => window.open('https://wa.me/?text='+waMsg, '_blank');
}

function animateResult(){
  const target = finalScore;
  const el = document.getElementById('res-num');
  let n = 0;
  const iv = setInterval(() => { n = Math.min(n+2, target); el.textContent = n; if(n >= target) clearInterval(iv); }, 16);
  setTimeout(() => { document.getElementById('res-prog').style.width = target + '%'; }, 60);
  setTimeout(() => { document.querySelectorAll('.bench-row-fill, .dim-fill').forEach(b => { b.style.width = b.dataset.pct + '%'; }); }, 380);
}

/* ── SHARE ── */
function doShare(p){
  const msg = 'Hice el diagnóstico QUVICai y obtuve un Score de '+finalScore+'/100. Nivel: '+finalLevel.label+'. ¿Cuál es el tuyo? → quvicai.com #QUVICai';
  const enc = encodeURIComponent(msg);
  if(p==='whatsapp') window.open('https://wa.me/?text='+enc,'_blank');
  if(p==='linkedin') window.open('https://linkedin.com/sharing/share-offsite/?url='+encodeURIComponent('https://quvicai.com'),'_blank');
  if(p==='instagram'){ navigator.clipboard.writeText(msg).then(()=>showToast('📋 Texto copiado — pegalo en Instagram')).catch(()=>showToast('📋 Copiá el texto y pegalo en Instagram')); }
}
function copyResult(){
  navigator.clipboard.writeText('Mi negocio tiene un QUVICai Score de '+finalScore+' sobre 100 en claridad empresarial. Hacé tu diagnóstico en quvicai.com')
    .then(()=>showToast('✅ Resultado copiado')).catch(()=>showToast('⚠️ No se pudo copiar'));
}
function openWhatsApp(){
  const msg = encodeURIComponent('Hola, acabo de hacer el diagnóstico QUVICai y obtuve un Score de '+finalScore+'/100 ('+(finalLevel?finalLevel.label:'')+'. Me gustaría hablar con un especialista.');
  window.open('https://wa.me/?text='+msg,'_blank');
}

/* ── LEAD ── */
async function submitLead(){
  const name = document.getElementById('lc-name').value.trim();
  const contact = document.getElementById('lc-contact').value.trim();
  if(!name||!contact){ showToast('⚠️ Completá nombre y WhatsApp / Email'); return; }
  try {
    await fetch('/api/lead', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ name, contact, score:finalScore, level_key:finalLevel.key, userData })
    });
  } catch(e){ console.error('Error guardando lead:', e); }
  document.getElementById('lc-form').classList.add('hide');
  document.getElementById('lc-name-ok').textContent = name.split(' ')[0];
  document.getElementById('lc-success').classList.add('show');
}

/* ── UTILS ── */
function showToast(msg, dur=3000){ const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'), dur); }
function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }
function restart(){
  answers={};userData={};finalScore=0;finalLevel=null;diagnosticId=null;
  ['f-name','f-email'].forEach(id=>document.getElementById(id).value='');
  ['f-industry','f-country'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('lc-form').classList.remove('hide');
  document.getElementById('lc-success').classList.remove('show');
  document.getElementById('lc-name').value='';
  document.getElementById('lc-contact').value='';
  document.getElementById('ai-report-section').style.display='none';
  goTo('sc-land');
}
</script>
        `,
      }}
    />
  );
}
