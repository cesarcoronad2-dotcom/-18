# Dados para Dos

Juego de dados íntimo para parejas adultas 18+, con tres intensidades —Coqueto, Picante e Intenso—, acciones y zonas compatibles, poses en siluetas SVG y retos con duración. Todas las sugerencias son opcionales: cualquiera puede cambiar o pasar cualquier resultado, o detener el juego en cualquier momento.

## Ejecutar localmente

Abra `index.html` directamente en un navegador moderno. No hay que instalar dependencias ni iniciar un servidor. También puede servir esta carpeta con cualquier servidor estático local.

## Publicar en GitHub

1. Cree un repositorio en GitHub y suba los archivos de este proyecto a la raíz.
2. Abra **Settings → Pages** en el repositorio.
3. En **Build and deployment**, elija **Deploy from a branch**.
4. Seleccione la rama principal y la carpeta **/(root)**, y guarde.
5. GitHub Pages publicará el sitio en la dirección que muestra esa pantalla.

## Archivos

- `index.html`: pantallas, controles y metadatos SEO.
- `style.css`: diseño adaptable, dados y animaciones.
- `script.js`: conjuntos de juego, compatibilidad de acciones, zonas y poses, turnos, aleatoriedad, historial y preferencias locales.
- `assets/logo.svg`: icono vectorial local.

## Privacidad y compatibilidad

No hay backend, cuentas, base de datos ni transmisión de datos. Los nombres, las caras personalizadas, intensidad, duración y preferencias se guardan en `localStorage` de este navegador. El historial solo vive en memoria durante la sesión y se borra al recargar o cerrar la página. El sitio puede alojarse como archivos estáticos en GitHub Pages.

No se requieren librerías, fuentes, imágenes ni APIs externas. El icono y las ilustraciones de poses son SVG locales o integrados en el código. GitHub Pages puede servir el proyecto directamente desde la raíz del repositorio.
