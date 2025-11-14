# ToDo Traker — Ejemplo con Tailwind CLI

Estructura mínima para usar Tailwind CSS con Tailwind CLI.

Estructura creada:

- `src/` - archivos fuente (HTML, CSS)
  - `src/styles.css` - entrada para Tailwind con directivas `@tailwind`.
  - `src/index.html` - HTML fuente de ejemplo.
- `dist/` - salida (CSS compilado y HTML listo para abrir en el navegador).
- `public/` - recursos públicos (opcional).
- `assets/` - imágenes y otros activos.
- `tailwind.config.cjs` - configuración de Tailwind.
- `package.json` - scripts para construir y ver CSS con Tailwind CLI.

Cómo usar

1. Instala Tailwind CLI localmente (opcional, puedes usar npx):

```bash
npm install -D tailwindcss
# o usar npx sin instalar:
# npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch
```

2. Generar CSS una vez:

```bash
npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify
```

3. En desarrollo (observa cambios):

```bash
npm run dev:css
```

4. Abre `dist/index.html` en un navegador.

Notas

- El script `dev:css` usa Tailwind CLI en modo `--watch` y genera `dist/styles.css`.
- Ajusta `tailwind.config.cjs` según necesites (rutas `content`).
