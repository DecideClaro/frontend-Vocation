export const careersPageStyles = `
.main-shell { max-width: 960px; margin: 0 auto; padding: 24px; }
.section-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
.eyebrow { font-size: 12px; color:#6b7280; letter-spacing:.04em; text-transform:uppercase; margin:0; }
.card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; box-shadow:0 1px 2px rgba(0,0,0,.04); padding:16px; }
.grid { display:grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap:12px; }
.career { border:1px solid #e5e7eb; border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px; }
.career h4 { margin:0; font-size:16px; }
.career p { margin:0; color:#4b5563; }
.meta { display:flex; gap:8px; flex-wrap:wrap; color:#374151; font-size:12px; }
.actions { display:flex; gap:8px; margin-top:8px; }
.primary-action { background:#2563eb; color:white; border:none; border-radius:8px; padding:8px 12px; cursor:pointer; }
.secondary-action { background:transparent; color:#111827; border:1px solid #d1d5db; border-radius:8px; padding:8px 12px; cursor:pointer; }

.modal-backdrop { position:fixed; inset:0; background:rgba(0,0,0,.3); display:grid; place-items:center; }
.modal-card { width:min(680px, 94vw); background:#fff; border-radius:16px; box-shadow:0 12px 28px rgba(0,0,0,.16); border:1px solid #e5e7eb; }
.modal-header { display:flex; justify-content:space-between; align-items:center; padding:14px 16px; border-bottom:1px solid #e5e7eb; }
.modal-body { padding:16px; display:grid; gap:12px; }
.close-btn { background:transparent; border:1px solid #e5e7eb; border-radius:999px; padding:6px 10px; cursor:pointer; }
@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
`;