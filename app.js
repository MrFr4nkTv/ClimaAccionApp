// Estado central del prototipo ClimaAcción (Guaymas, Sonora)
const initialState = () => ({
  activeTab: 'alerta',
  activeView: 'screen-alerta',
  semaforo: 'rojo',
  offlineMode: false,
  selectedAlertKey: 'arroyos',
  guideFilter: 'todos',
  selectedGuideKey: 'proteccion-inundaciones',
  selectedShelterKey: 'municipal',
  sliders: {
    luz: 480,
    agua: 320,
    basura: 6
  },
  calcVisible: false,
  retos: [
    {
      id: 'reto-ac',
      title: 'Reducir uso de A/C',
      sub: 'Ajustar termostato a 25°C y sellar rendijas',
      impact: '-18 kg CO₂',
      done: true
    },
    {
      id: 'reto-agua',
      title: 'Ahorrar agua',
      sub: 'Duchas de 5 min y reutilizar agua fría inicial',
      impact: '-210 L/sem',
      done: false
    },
    {
      id: 'reto-basura',
      title: 'Separar residuos',
      sub: 'Separar orgánicos, PET y aluminio en casa',
      impact: '-4 kg basura',
      done: false
    }
  ],
  guides: {
    'aislamiento-termico': {
      key: 'aislamiento-termico',
      title: 'Aislamiento térmico',
      categories: ['calor'],
      catLabel: 'Calor',
      thumbClass: 'heat',
      savedOffline: true,
      summary: 'Protege a tu familia ante olas de +45°C y reduce carga eléctrica.',
      officialTip: 'Protección Civil Sonora recomienda ventilar de madrugada y bloquear radiación directa en ventanas orientadas al poniente.',
      svg: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3"/><path d="M12 8v1"/><path d="M12 17v1"/></svg>`,
      steps: [
        { id: 'at-1', title: 'Cubrir ventanas soleadas (11:00 a 17:00)', sub: 'Instalar cortinas térmicas, cartón reflectante o malla sombra exterior', done: true },
        { id: 'at-2', title: 'Sellar puertas y marcos con burletes', sub: 'Evita fugas de aire fresco en las habitaciones de los niños', done: true },
        { id: 'at-3', title: 'Impermeabilizante blanco reflectivo en techo', sub: 'Disminuye hasta 6°C la temperatura interior de la vivienda', done: false },
        { id: 'at-4', title: 'Hidratación preventiva y Vida Suero Oral', sub: 'Tener sobres disponibles y agua fresca antes de horas pico', done: false }
      ]
    },
    'proteccion-inundaciones': {
      key: 'proteccion-inundaciones',
      title: 'Protección ante inundaciones',
      categories: ['inundaciones'],
      catLabel: 'Inundaciones',
      thumbClass: 'flood',
      savedOffline: true,
      summary: 'Acciones clave para lluvias intensas y crecida de arroyos en tu sector.',
      officialTip: 'En Guaymas, los arroyos aumentan su caudal en minutos. Si el agua sube o hay alerta roja, prioriza evacuar temprano por calles altas.',
      svg: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M2 21c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0"/></svg>`,
      steps: [
        { id: 'pi-1', title: 'Despejar desagües, canaletas y patio', sub: 'Retira objetos sueltos que puedan obstruir la salida pluvial', done: true },
        { id: 'pi-2', title: 'Resguardar documentos familiares en bolsa hermética', sub: 'Actas, identificaciones, cartillas médicas de los niños y pólizas', done: true },
        { id: 'pi-3', title: 'Elevar aparatos eléctricos y muebles esenciales', sub: 'Desconectar electrodomésticos cercanos al nivel del piso', done: true },
        { id: 'pi-4', title: 'Ubicar interruptor general de luz y llave de gas', sub: 'Listos para cortar suministro si el agua ingresa a la vivienda', done: false },
        { id: 'pi-5', title: 'Acordar ruta y punto de reunión con la familia', sub: 'Ruta hacia Albergue Municipal evitando cruces de arroyo', done: false }
      ]
    },
    'kit-emergencia': {
      key: 'kit-emergencia',
      title: 'Kit de emergencia',
      categories: ['calor', 'inundaciones'],
      catLabel: 'Familiar · 72h',
      thumbClass: 'kit',
      savedOffline: true,
      summary: 'Mochila familiar lista para Carlos y sus dos hijos ante cualquier contingencia.',
      officialTip: 'Guarda la mochila cerca de la puerta principal y verifica fechas de caducidad cada 6 meses en familia.',
      svg: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="14" rx="3"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>`,
      steps: [
        { id: 'ke-1', title: 'Agua potable embotellada (mínimo 72 horas)', sub: 'Considerar 3 litros por persona al día para los 4 integrantes', done: true },
        { id: 'ke-2', title: 'Botiquín y medicamentos de los niños', sub: 'Analgésicos, Vida Suero Oral, vendas y recetas médicas', done: true },
        { id: 'ke-3', title: 'Linterna LED, pilas extra y radio portátil', sub: 'Indispensable cuando se corta la luz o falla el internet', done: true },
        { id: 'ke-4', title: 'Alimentos no perecederos abre-fácil', sub: 'Atún, barras energéticas, galletas y comida para niños', done: false },
        { id: 'ke-5', title: 'Batería externa (Powerbank) al 100% y silbato', sub: 'Para mantener comunicación de emergencia con Protección Civil', done: false },
        { id: 'ke-6', title: 'Muda de ropa ligera, impermeable y llaves duplicadas', sub: 'Guardadas en bolsas plásticas selladas dentro de la mochila', done: false }
      ]
    }
  }
});

let state = initialState();

// Datos de Alertas Detalladas
const alertsCatalog = {
  arroyos: {
    badge: '● Alerta Roja · Lluvias Intensas en Guaymas',
    badgeStyle: 'background:#fee2e2;color:#b91c1c;',
    title: 'Crecida de Arroyos e Inundación',
    sector: 'Sector Miramar, San Vicente y Sector Norte · Emitido hace 12 min',
    source: 'Coordinación Estatal de Protección Civil Sonora / SMN',
    description:
      'Se registran lluvias intensas con escurrimientos rápidos hacia los cauces urbanos de Guaymas. Posible corte temporal de energía e internet en zonas bajas.',
    recommendations: [
      'No intentes cruzar arroyos, vados ni calles con corriente, ni a pie ni en vehículo.',
      'Reúne a tu familia, prepara documentos y artículos esenciales usando tu lista de Hogar Resiliente.',
      'Ten a la mano los contactos oficiales y ubica tu albergue seguro antes de que falle la señal de datos.'
    ],
    primaryCtaLabel: '📋 Ir a Lista: Protección ante inundaciones',
    primaryGuideKey: 'proteccion-inundaciones',
    primaryFilter: 'inundaciones',
    secondaryCtaLabel: '🎒 Abrir lista de Kit de emergencia familiar',
    secondaryGuideKey: 'kit-emergencia'
  },
  calor: {
    badge: '▲ Vigilancia Térmica · Sonora',
    badgeStyle: 'background:#fef3c7;color:#b45309;',
    title: 'Calor Extremo +45°C',
    sector: 'Zona Urbana y Costera de Guaymas · Pronóstico 12:00 – 17:00 h',
    source: 'Servicio Meteorológico Nacional · Secretaría de Salud',
    description:
      'Temperaturas máximas superiores a 45°C con índice UV extremo y alta demanda eléctrica residencial.',
    recommendations: [
      'Evita exposición directa al sol entre 11:00 y 17:00 h, especialmente niños y adultos mayores.',
      'Hidrata constantemente aunque no sientas sed y ten sobres de Vida Suero Oral en casa.',
      'Aplica aislamiento pasivo en ventanas y techos para conservar fresco el hogar y ahorrar energía.'
    ],
    primaryCtaLabel: '🏠 Ir a Guía: Aislamiento térmico',
    primaryGuideKey: 'aislamiento-termico',
    primaryFilter: 'calor',
    secondaryCtaLabel: '🌿 Calcular consumo de A/C en Mi Huella',
    secondaryTab: 'huella'
  }
};

// Datos de Albergues en Mapa Offline
const sheltersCatalog = {
  municipal: {
    name: 'Albergue Municipal',
    shortMeta: 'Abierto · A 1.2 km · Ruta segura sin arroyos',
    address: 'Gimnasio Municipal de Guaymas (Zona Centro Alta)',
    capacity: 'Habilitado · 68% de espacio disponible',
    routePath: 'M44 96 L68 96 L68 56',
    steps: [
      'Sal hacia el oriente por calle pavimentada alta (2 cuadras).',
      'Gira al norte por Av. Principal evitando el cauce punteado del arroyo.',
      'Llega al Gimnasio Municipal (personal de Protección Civil en acceso).'
    ],
    services: 'Agua potable, área familiar para niños, atención médica y planta eléctrica.'
  },
  miramar: {
    name: 'Centro Cívico Miramar',
    shortMeta: 'Abierto · A 1.6 km · Punto alto certificado',
    address: 'Blvd. Bacochibampo s/n, Col. Miramar Alta',
    capacity: 'Habilitado · 80% de espacio disponible',
    routePath: 'M44 96 L44 84 L198 84 L198 102',
    steps: [
      'Toma la avenida superior evitando bajar hacia la línea costera.',
      'Continúa recto 1.4 km por el corredor seguro señalizado.',
      'Ingresa por la explanada norte del Centro Cívico.'
    ],
    services: 'Hidratación, primeros auxilios, colchonetas y radio comunicación VHF.'
  },
  norte: {
    name: 'Secundaria Técnica No. 30',
    shortMeta: 'Preventivo · A 2.1 km · Sector Norte',
    address: 'Av. Tecnológico, Sector Norte, Guaymas',
    capacity: 'En apertura preventiva · 90% disponible',
    routePath: 'M44 96 L44 38 L274 38 L274 46',
    steps: [
      'Incorporarse al corredor norte antes de lluvias torrenciales.',
      'Avanzar 1.9 km sobre vía primaria elevada.',
      'Acceso vehicular y peatonal por portón principal.'
    ],
    services: 'Aulas climatizadas, sanitarios, agua potable y módulo DIF.'
  }
};

// Datos de Contactos de Marcado Rápido
const contactsCatalog = {
  proteccion: {
    name: 'Protección Civil Guaymas',
    phone: '(622) 222-7510',
    badge: 'Guardia Operativa 24/7 · Llamada por voz celular',
    protocol: 'Indica tu colonia (Sector Miramar), número de integrantes (2 adultos y 2 menores) y si observas nivel de agua subiendo en tu calle.'
  },
  cruzroja: {
    name: 'Cruz Roja Mexicana · Guaymas',
    phone: '(622) 222-0485',
    badge: 'Urgencias Médicas y Golpe de Calor',
    protocol: 'Solicita orientación médica ante deshidratación, lesiones o traslado prioritario de menores o personas vulnerables.'
  },
  '911': {
    name: '911 Emergencias Nacionales',
    phone: '911',
    badge: 'Enlace prioritario sin datos móviles',
    protocol: 'Funciona con cualquier antena celular disponible aunque no tengas saldo ni conexión a internet.'
  }
};

// Semáforo textos
const semaforoMessages = {
  verde:
    '<strong>Nivel Verde (Preventivo):</strong> Condiciones estables en Guaymas. Momento ideal para revisar tu Huella Verde y completar el Kit familiar.',
  amarillo:
    '<strong>Nivel Amarillo (Precaución):</strong> Pronóstico de lluvias fuertes en las próximas horas. Revisa desagües y reúne documentos importantes.',
  rojo:
    '<strong>Alerta Roja en Guaymas:</strong> Lluvias puntuales fuertes (65 mm/h). Evita cruzar arroyos y ten listo tu Kit de Emergencia.'
};

// Referencias DOM principales
const phoneScreen = document.getElementById('phoneScreen');
const netStatusChip = document.getElementById('netStatusChip');
const flowLocationIndicator = document.getElementById('flowLocationIndicator');
const sheetBackdrop = document.getElementById('phoneSheetBackdrop');
const sheetBody = document.getElementById('phoneSheetBody');

// Navegación central entre pantallas y pestañas
function navigateTo(viewId, tabId = null, flowLabel = '') {
  document.querySelectorAll('.screen-view').forEach((el) => el.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }
  state.activeView = viewId;

  if (tabId) {
    state.activeTab = tabId;
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
  }

  if (flowLabel) {
    flowLocationIndicator.textContent = flowLabel;
  }
  closeSheet();
}

// Renderizar Semáforo de Alerta Temprana
function renderSemaforo() {
  document.querySelectorAll('.light-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.level === state.semaforo);
  });

  document.querySelectorAll('.semaforo-row').forEach((row) => {
    row.classList.remove('active-green', 'active-amber', 'active-red');
    if (row.dataset.level === state.semaforo) {
      if (state.semaforo === 'verde') row.classList.add('active-green');
      if (state.semaforo === 'amarillo') row.classList.add('active-amber');
      if (state.semaforo === 'rojo') row.classList.add('active-red');
    }
  });

  document.getElementById('semaforoDynamicMsg').innerHTML = semaforoMessages[state.semaforo];
  const dot = document.getElementById('alertTabDot');
  dot.style.background =
    state.semaforo === 'rojo' ? '#dc2626' : state.semaforo === 'amarillo' ? '#d97706' : '#16a34a';
}

// Abrir sub-pantalla de Detalle de Alerta Oficial
function openAlertDetail(alertKey) {
  state.selectedAlertKey = alertKey;
  const info = alertsCatalog[alertKey];
  const container = document.getElementById('alertDetailContent');

  const recsHtml = info.recommendations
    .map(
      (rec, i) => `
      <div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:${
        i < info.recommendations.length - 1 ? '1px solid #e2e8f0' : 'none'
      };">
        <span style="width:22px;height:22px;border-radius:50%;background:#0f766e;color:#fff;font-size:11.5px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">${
          i + 1
        }</span>
        <p style="font-size:12.5px;color:#1e293b;line-height:1.42;">${rec}</p>
      </div>
    `
    )
    .join('');

  container.innerHTML = `
    <div class="card-box" style="margin-bottom:14px;">
      <span class="risk-badge" style="${info.badgeStyle}margin-bottom:8px;">${info.badge}</span>
      <h3 style="font-size:19px;font-weight:800;color:#0f172a;margin-bottom:4px;">${info.title}</h3>
      <p style="font-size:11.5px;font-weight:600;color:#0f766e;margin-bottom:8px;">📍 ${info.sector}</p>
      <p style="font-size:12.5px;color:#475569;line-height:1.45;margin-bottom:10px;">${info.description}</p>
      <div style="font-size:11px;color:#64748b;background:#f8fafc;padding:7px 9px;border-radius:8px;border:1px solid #e2e8f0;">
        Fuente oficial: <strong>${info.source}</strong>
      </div>
    </div>

    <div class="section-label">
      <span>Recomendaciones Inmediatas</span>
    </div>

    <div class="card-box" style="padding:10px 14px;margin-bottom:14px;">
      ${recsHtml}
    </div>

    <div class="section-label">
      <span>Acciones Conectadas para tu Familia</span>
    </div>

    <div style="display:flex;flex-direction:column;gap:9px;">
      <button type="button" class="primary-btn" id="btnAlertPrimaryAction">
        ${info.primaryCtaLabel}
      </button>
      <button type="button" class="secondary-btn" id="btnAlertSecondaryAction">
        ${info.secondaryCtaLabel}
      </button>
      <button type="button" class="secondary-btn" id="btnAlertToApoyo" style="border-color:#cbd5e1;color:#334155;">
        🛡️ Ver Red de Apoyo y Albergues cercanos →
      </button>
    </div>
  `;

  document.getElementById('btnAlertPrimaryAction').addEventListener('click', () => {
    state.guideFilter = info.primaryFilter || 'todos';
    renderGuidesList();
    openGuideDetail(info.primaryGuideKey);
    highlightStoryStep(3);
  });

  document.getElementById('btnAlertSecondaryAction').addEventListener('click', () => {
    if (info.secondaryGuideKey) {
      openGuideDetail(info.secondaryGuideKey);
      highlightStoryStep(3);
    } else if (info.secondaryTab === 'huella') {
      navigateTo('screen-huella', 'huella', '02 · Mi Huella Verde → Calculadora');
    }
  });

  document.getElementById('btnAlertToApoyo').addEventListener('click', () => {
    navigateTo('screen-apoyo', 'apoyo', '04 · Red de Apoyo → Contactos y Albergues');
    highlightStoryStep(5);
  });

  navigateTo(
    'screen-alerta-detalle',
    'alerta',
    `01 · Alerta → Detalle: ${info.title}`
  );
}

function syncSliderFill(sliderEl) {
  const min = Number(sliderEl.min);
  const max = Number(sliderEl.max);
  const val = Number(sliderEl.value);
  const pct = ((val - min) / (max - min)) * 100;
  sliderEl.style.setProperty('--slider-pct', `${pct}%`);
}

// Renderizar Calculadora y Retos en Mi Huella Verde
function updateHuellaCalculation() {
  const { luz, agua, basura } = state.sliders;
  document.getElementById('valLuz').textContent = `${luz} kWh/mes`;
  document.getElementById('valAgua').textContent = `${agua} L/día`;
  document.getElementById('valBasura').textContent = `${basura} bolsas/sem`;

  ['Luz', 'Agua', 'Basura'].forEach((name) => {
    const el = document.getElementById(`slider${name}`);
    if (el) syncSliderFill(el);
  });

  // Estimación ilustrativa de emisiones mensuales para un hogar en Sonora
  const kg = Math.round(luz * 0.43 + agua * 0.11 + basura * 4.5);
  const kgEl = document.getElementById('calcKgText');
  const badgeEl = document.getElementById('calcBadge');
  const tipEl = document.getElementById('calcTipText');

  kgEl.textContent = `${kg} kg CO₂e / mes`;

  if (kg < 190) {
    badgeEl.textContent = 'Impacto Bajo';
    badgeEl.style.background = '#dcfce7';
    badgeEl.style.color = '#15803d';
    tipEl.textContent =
      '¡Excelente manejo energético familiar! Mantén tus retos semanales y revisa tu Kit de emergencia.';
  } else if (kg <= 310) {
    badgeEl.textContent = 'Impacto Medio';
    badgeEl.style.background = '#fef3c7';
    badgeEl.style.color = '#b45309';
    tipEl.textContent =
      'El uso de A/C en temporada cálida eleva tu huella. Aplicar aislamiento térmico en ventanas reduce hasta 30% tu consumo.';
  } else {
    badgeEl.textContent = 'Impacto Alto';
    badgeEl.style.background = '#fee2e2';
    badgeEl.style.color = '#b91c1c';
    tipEl.textContent =
      'Consumo elevado para un hogar de 4 integrantes en Guaymas. Te recomendamos iniciar hoy la guía de Aislamiento térmico.';
  }
}

function renderRetos() {
  const listEl = document.getElementById('retosList');
  const doneCount = state.retos.filter((r) => r.done).length;
  document.getElementById('retosProgressText').textContent =
    doneCount === state.retos.length
      ? `¡${doneCount} de ${state.retos.length} logrados! 🎉`
      : `${doneCount} de ${state.retos.length} logrados`;

  listEl.innerHTML = state.retos
    .map(
      (r) => `
      <div class="check-item ${r.done ? 'checked' : ''}" data-reto="${r.id}" role="checkbox" aria-checked="${r.done}" tabindex="0">
        <div class="custom-box">✓</div>
        <div class="check-text">
          <div class="check-title">${r.title}</div>
          <div class="check-sub">${r.sub}</div>
        </div>
        <span class="impact-tag">${r.impact}</span>
      </div>
    `
    )
    .join('');

  listEl.querySelectorAll('.check-item').forEach((item) => {
    const toggleReto = () => {
      const target = state.retos.find((r) => r.id === item.dataset.reto);
      if (target) {
        target.done = !target.done;
        renderRetos();
      }
    };
    item.addEventListener('click', toggleReto);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleReto();
      }
    });
  });
}

// Renderizar lista de Guías en Hogar Resiliente (Wireframe 3)
function renderGuidesList() {
  document.querySelectorAll('.pill-btn').forEach((btn) => {
    const isActive = btn.dataset.filter === state.guideFilter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  const allGuides = Object.values(state.guides);
  const filtered =
    state.guideFilter === 'todos'
      ? allGuides
      : allGuides.filter((g) => g.categories.includes(state.guideFilter));

  document.getElementById('guiasCountHint').textContent = `${filtered.length} disponibles`;

  const container = document.getElementById('guideCardsContainer');
  container.innerHTML = filtered
    .map((g) => {
      const doneSteps = g.steps.filter((s) => s.done).length;
      return `
        <button type="button" class="guide-card" data-guide="${g.key}">
          <div class="guide-thumb ${g.thumbClass}" aria-hidden="true">
            ${g.svg}
          </div>
          <div class="guide-body">
            <div class="guide-tags">
              <span class="guide-cat">${g.catLabel}</span>
              <span class="guide-offline-tag">${g.savedOffline ? '✓ Guardada offline' : '○ Online'}</span>
            </div>
            <div class="guide-title">${g.title}</div>
            <div class="guide-progress-text">${doneSteps} de ${g.steps.length} pasos completados · Abrir lista →</div>
          </div>
        </button>
      `;
    })
    .join('');

  container.querySelectorAll('.guide-card').forEach((card) => {
    card.addEventListener('click', () => {
      openGuideDetail(card.dataset.guide);
    });
  });
}

// Abrir sub-pantalla de Guía Paso a Paso + Lista Interactiva Familiar
function openGuideDetail(guideKey) {
  state.selectedGuideKey = guideKey;
  const g = state.guides[guideKey];
  if (!g) return;

  const doneCount = g.steps.filter((s) => s.done).length;
  const pct = Math.round((doneCount / g.steps.length) * 100);

  const badge = document.getElementById('guideOfflineBadge');
  badge.textContent = g.savedOffline ? '✓ Guardada Offline' : '+ Guardar Offline';
  badge.style.cursor = 'pointer';
  badge.onclick = () => {
    g.savedOffline = !g.savedOffline;
    openGuideDetail(guideKey);
    renderGuidesList();
  };

  const stepsHtml = g.steps
    .map(
      (s) => `
      <div class="check-item ${s.done ? 'checked' : ''}" data-step-id="${s.id}" role="checkbox" aria-checked="${s.done}" tabindex="0">
        <div class="custom-box">✓</div>
        <div class="check-text">
          <div class="check-title">${s.title}</div>
          <div class="check-sub">${s.sub}</div>
        </div>
      </div>
    `
    )
    .join('');

  const offlineNoticeHtml =
    state.offlineMode && !g.savedOffline
      ? `<div class="card-box" style="background:#fffbeb;border-color:#fcd34d;margin-bottom:12px;padding:10px 12px;font-size:11.5px;color:#92400e;">
           ⚠️ <strong>Sin respaldo local:</strong> Desactivaste el guardado offline de esta guía. Reconecta internet para sincronizar cambios.
         </div>`
      : state.offlineMode && g.savedOffline
      ? `<div class="card-box" style="background:#f0fdf4;border-color:#86efac;margin-bottom:12px;padding:10px 12px;font-size:11.5px;color:#166534;">
           ✓ <strong>Respaldo local activo:</strong> Estás consultando esta guía sin internet tal como la guardaste en tu teléfono.
         </div>`
      : '';

  const detailContainer = document.getElementById('guideDetailContent');
  detailContainer.innerHTML = `
    ${offlineNoticeHtml}
    <div class="card-box" style="margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <div class="guide-thumb ${g.thumbClass}" style="width:48px;height:48px;border-radius:12px;">
          ${g.svg}
        </div>
        <div>
          <span class="guide-cat">${g.catLabel}</span>
          <h3 style="font-size:18px;font-weight:800;color:#0f172a;margin-top:3px;">${g.title}</h3>
        </div>
      </div>
      <p style="font-size:12.5px;color:#475569;line-height:1.42;">${g.summary}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:12px;font-weight:700;color:#0f766e;">
        <span>Avance de preparación familiar</span>
        <span>${doneCount} / ${g.steps.length} (${pct}%)</span>
      </div>
      <div class="progress-bar-track" style="margin-bottom:4px;">
        <div class="progress-bar-fill" style="width:${pct}%;"></div>
      </div>
    </div>

    <div class="section-label">
      <span>Lista Interactiva Paso a Paso</span>
      <span class="hint">Marca al reunir</span>
    </div>

    <div class="check-list" id="guideStepChecklist" style="margin-bottom:14px;">
      ${stepsHtml}
    </div>

    <div class="card-box" style="background:#f8fafc;margin-bottom:14px;padding:12px;">
      <div style="font-size:11.5px;font-weight:800;color:#0f172a;margin-bottom:3px;">💡 Indicación oficial</div>
      <p style="font-size:11.5px;color:#475569;line-height:1.4;">${g.officialTip}</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
      <button type="button" class="primary-btn" id="btnGuideToSupport">
        🛡️ Ir a Contactos y Albergue Seguro →
      </button>
      <button type="button" class="secondary-btn" id="btnSimulateOutageFromGuide">
        ${state.offlineMode ? '✓ Modo Offline activo (sin red)' : '📡 Simular corte de internet (Modo Offline)'}
      </button>
    </div>
  `;

  detailContainer.querySelectorAll('.check-item').forEach((el) => {
    const toggleStep = () => {
      const stepObj = g.steps.find((st) => st.id === el.dataset.stepId);
      if (stepObj) {
        stepObj.done = !stepObj.done;
        openGuideDetail(guideKey);
        renderGuidesList();
      }
    };
    el.addEventListener('click', toggleStep);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleStep();
      }
    });
  });

  document.getElementById('btnGuideToSupport').addEventListener('click', () => {
    navigateTo('screen-apoyo', 'apoyo', '04 · Red de Apoyo → Contactos y Albergues');
    highlightStoryStep(5);
  });

  document.getElementById('btnSimulateOutageFromGuide').addEventListener('click', () => {
    setOfflineMode(!state.offlineMode);
    if (state.offlineMode) highlightStoryStep(4);
  });

  navigateTo(
    'screen-guia-detalle',
    'guias',
    `03 · Hogar Resiliente → ${g.title}`
  );
}

// Modo Offline Global (Escena 4 del Storyboard de Carlos Mendoza)
function setOfflineMode(enabled) {
  state.offlineMode = enabled;
  phoneScreen.classList.toggle('is-offline', enabled);

  const btnOffline = document.getElementById('btnToggleOffline');
  const labelOffline = document.getElementById('offlineBtnLabel');
  btnOffline.classList.toggle('active', enabled);
  btnOffline.setAttribute('aria-pressed', String(enabled));
  labelOffline.textContent = enabled ? 'Offline Activo' : 'Modo Offline';

  netStatusChip.textContent = enabled ? 'SIN DATOS · Offline' : '5G · Online';
  document.getElementById('mapCacheBadge').textContent = enabled
    ? '⚡ Sin internet · Mapa offline activo'
    : '🗺️ Mapa local guardado (Guaymas)';

  if (state.activeView === 'screen-guia-detalle' && state.selectedGuideKey) {
    openGuideDetail(state.selectedGuideKey);
  }
}

// Renderizar selección de Albergue en el Mapa de Guaymas
function selectShelter(shelterKey) {
  state.selectedShelterKey = shelterKey;
  const info = sheltersCatalog[shelterKey];
  if (!info) return;

  document.getElementById('selectedShelterName').textContent = info.name;
  document.getElementById('selectedShelterMeta').textContent = info.shortMeta;
  document.getElementById('safeRoutePath').setAttribute('d', info.routePath);

  document.querySelectorAll('.map-pin-group').forEach((pin) => {
    const isSelected = pin.dataset.shelter === shelterKey;
    const pathEl = pin.querySelector('path');
    const haloEl = pin.querySelector('.pin-halo');
    pathEl.setAttribute('fill', isSelected ? '#0f766e' : '#475569');
    haloEl.setAttribute('opacity', isSelected ? '0.24' : '0');
  });
}

// Bottom Sheets (Llamadas de emergencia, Ruta de Albergue y Ficha ODS 13.3)
function openSheet(htmlContent) {
  sheetBody.innerHTML = `<div class="sheet-handle"></div>${htmlContent}`;
  sheetBackdrop.classList.add('open');
}

function closeSheet() {
  sheetBackdrop.classList.remove('open');
}

function openCallSheet(contactKey) {
  const c = contactsCatalog[contactKey];
  if (!c) return;
  openSheet(`
    <div style="text-align:center;margin-bottom:14px;">
      <div style="width:52px;height:52px;border-radius:16px;background:${
        contactKey === '911' ? '#fee2e2;color:#dc2626' : '#ccfbf1;color:#0f766e'
      };display:inline-flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:8px;">
        📞
      </div>
      <div style="font-size:11px;font-weight:700;color:#0f766e;margin-bottom:3px;">${c.badge}</div>
      <h3 style="font-size:18px;font-weight:800;color:#0f172a;">${c.name}</h3>
      <p style="font-size:16px;font-weight:800;color:#334155;margin-top:2px;">${c.phone}</p>
    </div>

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-bottom:12px;">
      <div style="font-size:11px;font-weight:800;color:#0f172a;margin-bottom:4px;">📍 Datos familiares guardados para dictar al operador:</div>
      <p style="font-size:12px;color:#334155;line-height:1.4;">
        <strong>Familia Mendoza</strong> · Sector Miramar, Guaymas, Sonora.<br/>
        Integrantes: 2 adultos y 2 niños.
      </p>
    </div>

    <p style="font-size:12px;color:#475569;line-height:1.4;margin-bottom:14px;">
      ${c.protocol}
    </p>

    <div style="display:flex;gap:8px;">
      <button type="button" class="primary-btn" id="btnConfirmSimulatedCall" style="${
        contactKey === '911' ? 'background:#dc2626;' : ''
      }">
        Iniciar llamada de voz
      </button>
      <button type="button" class="secondary-btn" id="btnCloseSheetNow" style="width:auto;padding:10px 16px;border-color:#cbd5e1;color:#475569;">
        Cerrar
      </button>
    </div>
  `);

  document.getElementById('btnConfirmSimulatedCall').addEventListener('click', (e) => {
    e.target.textContent = '🔊 Conectando por red celular...';
    e.target.style.background = '#15803d';
  });
  document.getElementById('btnCloseSheetNow').addEventListener('click', closeSheet);
}

function openShelterSheet() {
  const s = sheltersCatalog[state.selectedShelterKey];
  const stepsHtml = s.steps
    .map(
      (st, idx) =>
        `<li style="margin-bottom:6px;font-size:12px;color:#334155;line-height:1.38;"><strong>Paso ${
          idx + 1
        }:</strong> ${st}</li>`
    )
    .join('');

  openSheet(`
    <span class="saved-pill" style="margin-bottom:8px;">✓ Ruta disponible sin internet</span>
    <h3 style="font-size:18px;font-weight:800;color:#0f172a;margin-bottom:3px;">${s.name}</h3>
    <p style="font-size:12px;color:#475569;margin-bottom:8px;">${s.address}</p>
    <div style="font-size:11.5px;font-weight:700;color:#15803d;background:#dcfce7;padding:6px 10px;border-radius:8px;margin-bottom:12px;">
      ● ${s.capacity}
    </div>

    <div style="font-size:12px;font-weight:800;color:#0f172a;margin-bottom:6px;">Ruta peatonal/vehicular evitando arroyos:</div>
    <ul style="list-style:none;padding-left:0;margin-bottom:12px;">
      ${stepsHtml}
    </ul>

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:9px 11px;font-size:11.5px;color:#475569;margin-bottom:14px;">
      <strong>Servicios activos:</strong> ${s.services}
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
      <button type="button" class="primary-btn" id="btnShelterToKit">
        🎒 Revisar mi Kit de emergencia antes de salir →
      </button>
      <button type="button" class="secondary-btn" id="btnCloseShelterSheet" style="border-color:#cbd5e1;color:#475569;">
        Volver al mapa
      </button>
    </div>
  `);

  document.getElementById('btnShelterToKit').addEventListener('click', () => {
    closeSheet();
    openGuideDetail('kit-emergencia');
  });
  document.getElementById('btnCloseShelterSheet').addEventListener('click', closeSheet);
}

function openOdsProfileSheet() {
  openSheet(`
    <span class="saved-pill" style="margin-bottom:8px;">ODS 13 · Meta 13.3 ONU</span>
    <h3 style="font-size:18px;font-weight:800;color:#0f172a;margin-bottom:4px;">Perfil Familiar: Carlos Mendoza</h3>
    <p style="font-size:12.5px;color:#475569;line-height:1.45;margin-bottom:12px;">
      Hogar en <strong>Sector Miramar, Guaymas, Sonora</strong> (Carlos + 2 hijos). ClimaAcción traduce boletines técnicos en preparación práctica incluso cuando cae la red de internet.
    </p>
    <div style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:12px;padding:10px 12px;font-size:12px;color:#134e4a;line-height:1.42;margin-bottom:14px;">
      <strong>Meta 13.3:</strong> Mejorar la educación, la sensibilización y la capacidad humana respecto de la mitigación del cambio climático, la adaptación, la reducción de sus efectos y la alerta temprana.
    </div>
    <button type="button" class="primary-btn" id="btnCloseOds">Entendido</button>
  `);
  document.getElementById('btnCloseOds').addEventListener('click', closeSheet);
}

// Sincronización con los pasos del Storyboard lateral
function highlightStoryStep(stepNum) {
  document.querySelectorAll('.story-step-btn').forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.story) === stepNum);
  });
}

function runStoryboardStep(stepNum) {
  highlightStoryStep(stepNum);

  if (stepNum === 1) {
    state.semaforo = 'rojo';
    renderSemaforo();
    navigateTo('screen-alerta', 'alerta', '01 · ClimaAcción → Semáforo en Rojo');
  } else if (stepNum === 2) {
    state.semaforo = 'rojo';
    renderSemaforo();
    openAlertDetail('arroyos');
  } else if (stepNum === 3) {
    state.guideFilter = 'inundaciones';
    renderGuidesList();
    openGuideDetail('proteccion-inundaciones');
  } else if (stepNum === 4) {
    setOfflineMode(true);
    openGuideDetail('kit-emergencia');
    flowLocationIndicator.textContent = 'Modo Offline Activo → Kit Familiar Guardado';
  } else if (stepNum === 5) {
    setOfflineMode(true);
    selectShelter('municipal');
    navigateTo('screen-apoyo', 'apoyo', '04 · Red de Apoyo (Offline) → Albergue Municipal');
  }
}

// Inicialización de Eventos
function initEvents() {
  // Pestañas inferiores
  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab === 'alerta') {
        navigateTo('screen-alerta', 'alerta', '01 · ClimaAcción → Semáforo y Alertas');
      } else if (tab === 'huella') {
        navigateTo('screen-huella', 'huella', '02 · Mi Huella Verde → Calculadora y Retos');
      } else if (tab === 'guias') {
        renderGuidesList();
        navigateTo('screen-guias', 'guias', '03 · Hogar Resiliente → Guías Paso a Paso');
      } else if (tab === 'apoyo') {
        navigateTo('screen-apoyo', 'apoyo', '04 · Red de Apoyo → Contactos y Albergues');
      }
    });
  });

  // Semáforo interactivo (clic y teclado)
  document.querySelectorAll('[data-level]').forEach((el) => {
    const setLevel = () => {
      state.semaforo = el.dataset.level;
      renderSemaforo();
    };
    el.addEventListener('click', setLevel);
    if (el.tagName !== 'BUTTON') {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setLevel();
        }
      });
    }
  });

  // Abrir detalle de alerta desde banner push o tarjetas
  document.getElementById('pushFloodBanner').addEventListener('click', () => {
    openAlertDetail('arroyos');
    highlightStoryStep(2);
  });

  document.querySelectorAll('[data-open-alert]').forEach((card) => {
    card.addEventListener('click', () => {
      openAlertDetail(card.dataset.openAlert);
      if (card.dataset.openAlert === 'arroyos') highlightStoryStep(2);
    });
  });

  document.getElementById('btnBackFromAlert').addEventListener('click', () => {
    navigateTo('screen-alerta', 'alerta', '01 · ClimaAcción → Semáforo y Alertas');
  });

  // Mi Huella Verde: Sliders y Calcular
  ['Luz', 'Agua', 'Basura'].forEach((name) => {
    const slider = document.getElementById(`slider${name}`);
    slider.addEventListener('input', () => {
      state.sliders[name.toLowerCase()] = Number(slider.value);
      updateHuellaCalculation();
    });
  });

  document.getElementById('btnCalcularHuella').addEventListener('click', () => {
    state.calcVisible = true;
    updateHuellaCalculation();
    document.getElementById('calcResultBox').classList.add('visible');
  });

  document.getElementById('btnHuellaToGuia').addEventListener('click', () => {
    state.guideFilter = 'calor';
    renderGuidesList();
    openGuideDetail('aislamiento-termico');
  });

  // Hogar Resiliente: Filtros y botón volver
  document.querySelectorAll('.pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.guideFilter = btn.dataset.filter;
      renderGuidesList();
    });
  });

  document.getElementById('btnBackFromGuide').addEventListener('click', () => {
    renderGuidesList();
    navigateTo('screen-guias', 'guias', '03 · Hogar Resiliente → Guías Paso a Paso');
  });

  // Red de Apoyo: Modo Offline, llamadas y mapa
  document.getElementById('btnToggleOffline').addEventListener('click', () => {
    setOfflineMode(!state.offlineMode);
    if (state.offlineMode) highlightStoryStep(4);
  });

  document.getElementById('btnBannerReconnect').addEventListener('click', () => {
    setOfflineMode(false);
  });

  document.querySelectorAll('[data-call]').forEach((btn) => {
    btn.addEventListener('click', () => openCallSheet(btn.dataset.call));
  });

  document.querySelectorAll('.map-pin-group').forEach((pin) => {
    const choosePin = () => selectShelter(pin.dataset.shelter);
    pin.addEventListener('click', choosePin);
    pin.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        choosePin();
      }
    });
  });

  document.getElementById('btnOpenShelterDetail').addEventListener('click', openShelterSheet);

  // Cerrar sheet tocando el fondo oscuro o con tecla Escape
  sheetBackdrop.addEventListener('click', (e) => {
    if (e.target === sheetBackdrop) closeSheet();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sheetBackdrop.classList.contains('open')) {
      closeSheet();
    }
  });

  // Ficha ODS 13.3 / Carlos Mendoza
  document.getElementById('btnOpenOdsSheet').addEventListener('click', openOdsProfileSheet);

  // Botones del panel lateral (Storyboard)
  document.querySelectorAll('.story-step-btn').forEach((btn) => {
    btn.addEventListener('click', () => runStoryboardStep(Number(btn.dataset.story)));
  });

  // Barra superior: Solo teléfono y Reiniciar
  const btnToggleClean = document.getElementById('btnToggleClean');
  btnToggleClean.addEventListener('click', () => {
    const isClean = document.body.classList.toggle('clean-mode');
    btnToggleClean.classList.toggle('active-clean', isClean);
    btnToggleClean.textContent = isClean ? '📋 Mostrar guía de flujo' : '📱 Solo teléfono';
  });

  document.getElementById('btnResetDemo').addEventListener('click', () => {
    state = initialState();
    document.getElementById('sliderLuz').value = state.sliders.luz;
    document.getElementById('sliderAgua').value = state.sliders.agua;
    document.getElementById('sliderBasura').value = state.sliders.basura;
    document.getElementById('calcResultBox').classList.remove('visible');
    setOfflineMode(false);
    renderSemaforo();
    updateHuellaCalculation();
    renderRetos();
    renderGuidesList();
    selectShelter('municipal');
    highlightStoryStep(1);
    navigateTo('screen-alerta', 'alerta', '01 · ClimaAcción → Semáforo y Alertas');
  });
}

// Arranque inicial
renderSemaforo();
updateHuellaCalculation();
renderRetos();
renderGuidesList();
selectShelter('municipal');
initEvents();
