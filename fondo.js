// Fondo neón compartido: se inyecta al inicio del <body>.
// Para cambiar el fondo de todas las páginas, edita este archivo.
document.body.insertAdjacentHTML("afterbegin", `
<svg class="fondo-neon" viewBox="0 0 100 170" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <path id="ch" d="M-15 26 L50 0 L115 26" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="hz" d="M-30 0 L120 -72" fill="none" stroke-linecap="round"/>
  </defs>
  <g stroke-width="5" opacity="0.30">
    <use href="#ch" transform="translate(0,167)" stroke="#ff2fb3"/>
    <use href="#ch" transform="translate(0,142)" stroke="#3b82f6"/>
    <use href="#ch" transform="translate(0,117)" stroke="#00e5a0"/>
    <use href="#ch" transform="translate(0,92)" stroke="#8b5cf6"/>
    <use href="#ch" transform="translate(0,67)" stroke="#ff2fb3"/>
    <use href="#ch" transform="translate(0,42)" stroke="#3b82f6"/>
    <use href="#ch" transform="translate(0,17)" stroke="#00e5a0"/>
    <use href="#ch" transform="translate(0,-8)" stroke="#8b5cf6"/>
    <use href="#hz" transform="translate(0,96)" stroke="#4de3ff" opacity="0.55"/>
    <use href="#hz" transform="translate(0,152)" stroke="#ff2fb3" opacity="0.5"/>
  </g>
  <g stroke-width="1.7" opacity="0.8">
    <use href="#ch" transform="translate(0,167)" stroke="#ff2fb3"/>
    <use href="#ch" transform="translate(0,142)" stroke="#3b82f6"/>
    <use href="#ch" transform="translate(0,117)" stroke="#00e5a0"/>
    <use href="#ch" transform="translate(0,92)" stroke="#8b5cf6"/>
    <use href="#ch" transform="translate(0,67)" stroke="#ff2fb3"/>
    <use href="#ch" transform="translate(0,42)" stroke="#3b82f6"/>
    <use href="#ch" transform="translate(0,17)" stroke="#00e5a0"/>
    <use href="#ch" transform="translate(0,-8)" stroke="#8b5cf6"/>
    <use href="#hz" transform="translate(0,96)" stroke="#4de3ff" opacity="0.6"/>
    <use href="#hz" transform="translate(0,152)" stroke="#ff2fb3" opacity="0.55"/>
  </g>
  <g stroke-width="0.7" opacity="0.95">
    <use href="#ch" transform="translate(0,167)" stroke="#ffd7ef"/>
    <use href="#ch" transform="translate(0,142)" stroke="#cfe4ff"/>
    <use href="#ch" transform="translate(0,117)" stroke="#d2fcec"/>
    <use href="#ch" transform="translate(0,92)" stroke="#ddd0ff"/>
    <use href="#ch" transform="translate(0,67)" stroke="#ffd7ef"/>
    <use href="#ch" transform="translate(0,42)" stroke="#cfe4ff"/>
    <use href="#ch" transform="translate(0,17)" stroke="#d2fcec"/>
    <use href="#ch" transform="translate(0,-8)" stroke="#ddd0ff"/>
    <use href="#hz" transform="translate(0,96)" stroke="#d9f9ff" opacity="0.7"/>
    <use href="#hz" transform="translate(0,152)" stroke="#ffd7ef" opacity="0.65"/>
  </g>
</svg>
<div class="luz-ambiente a"></div>
<div class="luz-ambiente b"></div>
<div class="luz-ambiente c"></div>
<div class="velo"></div>
`);
