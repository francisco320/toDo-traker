# Aora — App de Notas

Documentación del proyecto: una aplicación sencilla para crear, editar y gestionar notas.

**Descripción**:

- **Aora Notes App** es una aplicación de notas pensada para capturar ideas, tareas y recordatorios de forma rápida. Proporciona una interfaz minimalista y almacenamiento local (o persistencia según la configuración) para que el usuario pueda gestionar sus notas fácilmente.

**Características principales**:

- Crear nuevas notas con título y contenido.
- Editar y eliminar notas existentes.
- Búsqueda y filtrado por texto.
- Interfaz responsive (diseño móvil/desktop).

**Tecnologías**:

- HTML, CSS (Tailwind CSS - Tailwind CLI) y JavaScript.
- Estructura de proyecto mínima lista para compilar CSS con Tailwind CLI.

Estructura del proyecto (resumen):

- `src/` — archivos fuente (HTML y CSS de entrada).
  - `src/index.html` — HTML principal de la app.
  - `src/styles.css` — entrada de Tailwind con `@tailwind`.
- `src/components/` — componentes UI (si aplica).
- `public/` — recursos públicos opcionales.
- `assets/` — imágenes y demás activos.
- `dist/` — salida: archivos generados listos para servir (`dist/styles.css`, `dist/index.html`).
- `tailwind.config.cjs` — configuración de Tailwind.
- `package.json` — scripts de utilidad (compilar Tailwind, ver en modo watch).

Instalación y uso (desarrollo)

1. Instalar dependencias de desarrollo (incluye Tailwind si aún no está instalado):

```bash
npm install
```

2. Generar CSS con Tailwind (compilación única):

```bash
npx --package tailwindcss tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify
```

3. En desarrollo (modo observador):

```bash
npx --package tailwindcss tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch
```

También puedes usar los scripts del `package.json`:

```bash
npm run build:css   # compila y minifica el CSS
npm run dev:css     # ejecuta Tailwind en modo watch
```

4. Abrir la aplicación:

- Abre `dist/index.html` en tu navegador, o sirve la carpeta `dist/` con un servidor estático (por ejemplo `npx serve dist`).

Guía rápida de desarrollo

- Estructura los componentes UI en `src/components/` y enlaza o importa sus estilos desde `src/styles.css`.
- Añade rutas en `tailwind.config.cjs` dentro de `content` si creas nuevos archivos HTML/JS para que Tailwind purgue correctamente el CSS.

Buenas prácticas

- Usa clases utilitarias de Tailwind para velocidad de desarrollo y crea componentes reutilizables con `@layer components` en `src/styles.css`.
- Mantén la salida en `dist/` ignorada en git (`.gitignore` ya configurado).

Contribuir

- Si quieres contribuir, crea un fork, trabaja en una rama y abre un Pull Request con una descripción de los cambios.

Contacto

- Para dudas o mejoras, abre un issue en el repositorio o contacta al mantenedor.
