// Año dinámico en el footer
document.addEventListener('DOMContentLoaded', function () {
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      var el = document.querySelector(targetId);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Placeholder para analytics: reemplaza por tu proveedor (GTM, Plausible, etc.)
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX');
});

// Función para trackear descargas
function trackDownload(source) {
  // Evento para Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download_apk', {
      'event_category': 'engagement',
      'event_label': source,
      'value': 1
    });
  }
  
  // Evento para Google Tag Manager
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      'event': 'download_apk',
      'source': source,
      'timestamp': new Date().toISOString()
    });
  }
  
  // Evento para Plausible Analytics
  if (typeof plausible !== 'undefined') {
    plausible('Download APK', {
      props: { source: source }
    });
  }
  
  // Console log para debugging
  console.log('APK Download tracked from:', source);
});


