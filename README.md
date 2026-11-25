# ClimaAcción — Prototipo Interactivo Hi-Fi

🔗 **Demo interactiva (GitHub Pages):** https://mrfr4nktv.github.io/ClimaAccionApp/

Prototipo móvil navegable de alta fidelidad (**Hi-Fi**) diseñado para las familias de **Guaymas, Sonora**, alineado con el **ODS 13 (Acción por el Clima) · Meta 13.3** de las Naciones Unidas: educación, sensibilización y capacidad de preparación frente a riesgos climáticos y alertas tempranas.

## Flujo de Usuario Principal (Storyboard: Carlos Mendoza)

Carlos Mendoza, gerente de logística y padre de dos hijos en el Sector Miramar (Guaymas), utiliza **ClimaAcción** durante lluvias intensas:

1. **Alerta (`01 · ClimaAcción`):** Recibe una alerta temprana sobre lluvias intensas y posible crecida de arroyos con el Semáforo en Rojo.
2. **Recomendaciones Oficiales:** Abre el boletín detallado y consulta las medidas inmediatas de Protección Civil.
3. **Preparación Familiar (`03 · Hogar Resiliente`):** Accede desde la alerta a las listas interactivas de *Protección ante inundaciones* y *Kit de emergencia* para reunir documentos y artículos esenciales con su familia.
4. **Resiliencia sin Red (`Modo Offline`):** Cuando falla el internet durante la tormenta, sus guías descargadas, listas y contactos oficiales permanecen disponibles localmente.
5. **Respuesta y Evacuación (`04 · Red de Apoyo`):** Consulta el marcado rápido (`Protección Civil`, `Cruz Roja`, `911`) y el mapa offline de albergues con ruta segura evitando cauces de arroyos hacia el *Albergue Municipal*.

Además, en **`02 · Mi Huella Verde`**, la familia calcula sus emisiones mensuales (`Luz`, `Agua`, `Basura`), conecta el diagnóstico con la guía de *Aislamiento térmico* ante olas de `+45°C` y da seguimiento a sus *Retos Semanales*.

## Estructura del Proyecto

- `index.html` — Maquetación semántica accesible de las 4 pestañas principales, sub-vistas conectadas, modales *bottom sheet* y panel guía del storyboard.
- `styles.css` — Sistema de diseño Hi-Fi responsivo (`392×824` en escritorio y pantalla completa `100dvh` en dispositivos móviles reales).
- `app.js` — Estado interactivo, calculadora de emisiones, checklists, filtros, mapa SVG de albergues y simulación de Modo Offline.
- `favicon.svg` — Icono vectorial de la aplicación.
- `.nojekyll` — Despliegue directo de archivos estáticos en GitHub Pages.
