# Landing - Gestor de Créditos (APK)

Esta carpeta contiene una landing page estática para promocionar y distribuir el APK de la app Android.

## Reemplazos necesarios
- En `index.html`, reemplaza los enlaces de descarga ("https://ejemplo.com/descargas/gestor-creditos.apk") por tu URL real (por ejemplo, un enlace a GitHub Releases, Google Drive con acceso público o tu propio hosting).
- Actualiza los correos de contacto `soporte@tudominio.com`, `ventas@tudominio.com`.
- Agrega tus imágenes en esta carpeta (`logo.png`, `mockup.png`, `screen-1.png`, etc.).

## Estructura
- `index.html`: Landing principal
- `privacy.html`: Política de privacidad
- `styles.css`: Estilos
- `script.js`: Interacciones básicas
- `robots.txt`: Reglas para buscadores

## Despliegue

### GitHub Pages
1. Crea un repositorio (o usa el existente) y sube el contenido de `landing/` en la raíz del repositorio público, o en la carpeta `docs/`.
2. Si usas raíz: habilita Pages en Settings → Pages → Build and deployment → Deploy from a branch → main → `/root`.
   Si usas `docs/`: mueve el contenido y selecciona `/docs`.
3. Accede a la URL que te dará GitHub Pages.

### Netlify
1. Crea cuenta en Netlify y selecciona "Add new site".
2. Conecta tu repositorio y define el directorio de publicación como `landing`.
3. Deploy. Obtendrás un dominio `*.netlify.app`. Puedes agregar tu dominio propio.

### Vercel
1. Crea cuenta en Vercel y "Add New... → Project".
2. Importa el repositorio y define `landing` como directorio de salida.
3. Deploy. Obtendrás un dominio `*.vercel.app`. Puedes agregar dominio propio.

## SEO básico
- Ajusta `<title>` y `<meta name="description">` en `index.html`.
- Sube un `sitemap.xml` si usas dominio propio y actualiza `robots.txt`.

## Instalación del APK
- Incluida en la sección "Cómo instalar" de `index.html`. Considera añadir un video/gif corto.

## Analytics
- Reemplaza el bloque comentado en `script.js` por tu proveedor (GTM, GA4, Plausible, Pirsch, etc.).
