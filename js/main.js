// ============================================
// DATOS DE EXCURSIONES
// ============================================

const excursionsData = {
  'ciudad-alrededores': {
    name: 'Ciudad y alrededores',
    price: '$28.500',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Recorrido por los principales puntos de interés de la ciudad de Mendoza y sus alrededores.',
    schedule: 'Salidas martes, jueves y sábados · 08:30hs a 12:30hs',
    duration: 'Medio día',
    includes: [
      'Traslados',
      'Guía profesional',
      'Recorrido por puntos históricos y culturales'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/tC43WHfEzVaurh19A'
  },
  'bodegas-olivas': {
    name: 'Bodegas y Olivas',
    price: '$44.000',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Visita a bodegas y aceiteras en la zona de Maipú, conociendo el proceso de elaboración de vinos y aceite de oliva.',
    schedule: 'Salidas lunes a sábado · 14:30hs a 19:30hs',
    duration: 'Medio día',
    includes: [
      'Traslados',
      'Visita a 2 bodegas',
      'Visita a 1 aceitera de oliva',
      'Guía profesional'
    ],
    notIncludes: [
      'Degustaciones (sin elección de bodegas)'
    ],
    gallery: 'https://photos.app.goo.gl/g8LA6aEb6VXmjpoM7'
  },
  'alta-montana': {
    name: 'Alta Montaña',
    price: '$78.000',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Recorrido por la ruta internacional hacia Chile, pasando por Uspallata, Puente del Inca, Aconcagua y más.',
    schedule: 'Salidas lunes a domingo · 07:30hs a 19:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados',
      'Guía profesional',
      'Recorrido por puntos panorámicos'
    ],
    notIncludes: [
      'Almuerzo'
    ],
    gallery: 'https://photos.app.goo.gl/EEP5B9TgZqAfHN4W9'
  },
  'valle-uco': {
    name: 'Valle de Uco',
    price: '$78.000',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Visita al prestigioso Valle de Uco, conocido por sus bodegas de alta gama y paisajes únicos.',
    schedule: 'Salida viernes · 08:30hs a 18:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados',
      'Guía profesional'
    ],
    notIncludes: [
      'Entrada a bodega con degustación (aprox. $20.000)',
      'Almuerzo'
    ],
    gallery: 'https://photos.app.goo.gl/j1hGZQHWGTh1Z4AC7'
  },
  'canon-atuel': {
    name: 'Cañón del Atuel',
    price: '$93.500',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Excursión al sur de Mendoza, visitando el impresionante Cañón del Atuel y sus formaciones rocosas.',
    schedule: 'Salidas jueves y domingos · 07:00hs a 22:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados',
      'Guía profesional'
    ],
    notIncludes: [
      'Almuerzo',
      'Actividades opcionales'
    ],
    gallery: 'https://photos.app.goo.gl/Ng51ejfTHQ1rKLW69'
  },
  'villavicencio': {
    name: 'Villavicencio',
    price: '$46.000',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Visita a la Reserva Natural Villavicencio, conocida por sus aguas termales y paisajes serranos.',
    schedule: 'Salidas miércoles y sábados · 07:30hs a 13:00hs',
    duration: 'Medio día',
    includes: [
      'Traslados',
      'Guía profesional'
    ],
    notIncludes: [
      'Entrada a reserva (aprox. $20.000)'
    ],
    gallery: null
  },
  'ruta-sabores': {
    name: 'Ruta de Sabores',
    price: '$44.000',
    currency: 'ARS',
    category: 'Convencionales',
    description: 'Recorrido gastronómico visitando bodega, destilería y chocolatería con degustaciones incluidas.',
    schedule: 'Salidas miércoles y viernes · 08:00hs a 14:00hs',
    duration: 'Medio día',
    includes: [
      'Traslados',
      'Entrada a bodega con degustación',
      'Visita a destilería con degustación',
      'Visita a chocolatería con degustación',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/SvMzebbzJqMtbDrE8'
  },
  'wine-classic': {
    name: 'Wine Classic Tour',
    price: '$130.000',
    currency: 'ARS',
    category: 'Tours de Vinos',
    description: 'Tour clásico de vinos visitando dos bodegas: degustación en una y almuerzo en otra.',
    schedule: 'Consultar disponibilidad',
    duration: 'Medio día',
    includes: [
      'Traslados',
      'Visita y degustación en bodega',
      'Almuerzo en bodega',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/ch3SgfbbeCyHaaXx5'
  },
  'tour-privado-maipu': {
    name: 'Tour privado de vino por Maipú o Luján',
    price: '$230.000',
    currency: 'ARS',
    category: 'Tours de Vinos',
    description: 'Tour privado exclusivo por las zonas de Maipú o Luján, visitando bodegas seleccionadas.',
    schedule: 'Salidas lunes a domingos (excursión en privado) · 09:30hs a 16:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados privados',
      'Entradas a bodegas',
      'Visita y degustación en primera bodega',
      'Almuerzo en segunda bodega',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/TXtUfT8QWsem5Vyh7'
  },
  'tour-privado-uco': {
    name: 'Tour privado por el Valle de Uco',
    price: '$390.000',
    currency: 'ARS',
    category: 'Tours de Vinos',
    description: 'Experiencia premium en el Valle de Uco con visitas a bodegas de alta gama y almuerzo gourmet.',
    schedule: 'Salidas lunes a domingos (traslados en privado) · 08:30hs a 18:30hs',
    duration: 'Día completo',
    includes: [
      'Traslados privados',
      'Visitas con degustación en 2 bodegas',
      'Almuerzo gourmet de pasos en tercera bodega',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/Krr37EyKmWG3rgck9'
  },
  'cena-gourmet': {
    name: 'Cena gourmet en bodega',
    price: '$175.000',
    currency: 'ARS',
    category: 'Tours de Vinos',
    description: 'Experiencia gastronómica exclusiva con cena gourmet de pasos en una bodega seleccionada.',
    schedule: 'Salidas martes a domingos (excursión en privado) · 19:00hs a 22:00hs',
    duration: 'Noche',
    includes: [
      'Traslados privados',
      'Entrada a bodega',
      'Cena gourmet de pasos',
      'Maridaje con vinos',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: null
  },
  'catena-enemigo': {
    name: 'Experiencia Catena Zapata con almuerzo en El Enemigo',
    price: '$555.000',
    currency: 'ARS',
    category: 'Tours de Vinos',
    description: 'Experiencia premium visitando la prestigiosa bodega Catena Zapata y disfrutando de un almuerzo gourmet en El Enemigo.',
    schedule: 'Salidas martes a sábados (excursión en privado) · 09:30hs a 16:30hs',
    duration: 'Día completo',
    includes: [
      'Traslados privados',
      'Visita con degustación en bodega Catena Zapata',
      'Almuerzo gourmet de pasos en bodega El Enemigo',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/gnFjUdysi6BpKFaX7'
  },
  'cabalgata': {
    name: 'Cabalgata al atardecer',
    price: '$130.000',
    currency: 'ARS',
    category: 'Aventura',
    description: 'Cabalgata al atardecer por los paisajes mendocinos, finalizando con un asado completo.',
    schedule: 'Salidas lunes a domingos · 16:30hs a 22:00hs',
    duration: 'Noche',
    includes: [
      'Traslados',
      '2 horas de cabalgata',
      'Cena (asado completo)',
      'Bebidas',
      'Guía profesional'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/vTbimHy4GxLf4Hqx9'
  },
  'andestruck': {
    name: 'Andestruck 4x4',
    price: '$95.000',
    currency: 'ARS',
    category: 'Aventura',
    description: 'Aventura en vehículo 4x4 por los caminos de montaña de Mendoza.',
    schedule: 'Salidas lunes a domingo · 09:30hs a 17:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados',
      'Recorrido en 4x4',
      'Guía profesional'
    ],
    notIncludes: [
      'Almuerzo'
    ],
    gallery: 'https://photos.app.goo.gl/uWi7X96DZ6BMYwEz8'
  },
  'rafting-tirolesa': {
    name: 'Rafting, Tirolesa o Trekking',
    price: '$111.000',
    currency: 'ARS',
    category: 'Aventura',
    description: 'Elige entre rafting, tirolesa o trekking para vivir una experiencia de aventura en Mendoza.',
    schedule: 'Salidas lunes a domingo · 09:30hs a 17:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados',
      'Actividad elegida (rafting, tirolesa o trekking)',
      'Equipamiento',
      'Guía profesional'
    ],
    notIncludes: [
      'Almuerzo'
    ],
    gallery: 'https://photos.app.goo.gl/6wTcnQ3tDCLXLaEfA'
  },
  'dia-aventura': {
    name: 'Día de aventura',
    price: '$170.000',
    currency: 'ARS',
    category: 'Aventura',
    description: 'Combo de aventura incluyendo rafting y tirolesa (o trekking) en un día completo.',
    schedule: 'Salidas lunes a domingo · 09:30hs a 17:00hs',
    duration: 'Día completo',
    includes: [
      'Traslados',
      'Rafting',
      'Tirolesa (o trekking)',
      'Equipamiento',
      'Guía profesional'
    ],
    notIncludes: [
      'Almuerzo'
    ],
    gallery: 'https://photos.app.goo.gl/6wTcnQ3tDCLXLaEfA'
  },
  'termas-cacheuta': {
    name: 'Termas de Cacheuta · Full day',
    price: '$136.000',
    currency: 'ARS',
    category: 'Mendoza Exclusiva',
    description: 'Día completo en las Termas de Cacheuta, disfrutando de sus aguas termales y servicios.',
    schedule: 'Salidas de lunes a domingos · 09:00hs a 18:00hs aprox.',
    duration: 'Día completo',
    includes: [
      'Traslados en regular',
      'Acceso a instalaciones',
      'Almuerzo (sin bebidas)'
    ],
    notIncludes: [
      'Bebidas'
    ],
    gallery: 'https://photos.app.goo.gl/5fnMViwU9xzMCZCn6'
  },
  'mindfulness': {
    name: 'Mindfulness termal',
    price: '$191.000',
    currency: 'ARS',
    category: 'Mendoza Exclusiva',
    description: 'Experiencia de relajación combinando aguas termales con clases de mindfulness.',
    schedule: 'Salidas de lunes a domingos · 09:00hs a 18:00hs aprox.',
    duration: 'Día completo',
    includes: [
      'Traslados en regular',
      'Acceso a instalaciones',
      'Clases de mindfulness',
      'Almuerzo (sin bebidas)'
    ],
    notIncludes: [
      'Bebidas'
    ],
    gallery: null
  },
  'velero': {
    name: 'Paseo en velero por Potrerillos',
    price: 'USD 140',
    currency: 'USD',
    category: 'Mendoza Exclusiva',
    description: 'Navegación en velero por el embalse de Potrerillos, disfrutando de picadas y vinos.',
    schedule: 'Salidas de lunes a domingos · 09:00hs a 13:00hs aprox.',
    duration: 'Medio día',
    includes: [
      'Traslados en privado',
      'Hora y media de navegación',
      'Picada de quesos',
      'Degustación de vinos'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/U6iRtv6TaTfCpRk47'
  },
  'globo': {
    name: 'Paseo en globo al atardecer',
    price: 'USD 220',
    currency: 'USD',
    category: 'Mendoza Exclusiva',
    description: 'Vuelo en globo aerostático al atardecer sobre los paisajes de Mendoza.',
    schedule: 'Salidas de lunes a domingos · 17:00hs a 21:00hs aprox.',
    duration: 'Noche',
    includes: [
      'Traslados en privado',
      'Dos horas de vuelo',
      'Certificado de vuelo'
    ],
    notIncludes: [],
    gallery: 'https://photos.app.goo.gl/VjqeHG32LWBUR28D7'
  }
};

// ============================================
// SLIDER
// ============================================

const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;
let slideInterval;

// Crear dots
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
  dot.setAttribute('aria-label', `Ir a slide ${index + 1}`);
  dot.addEventListener('click', () => goToSlide(index));
  sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function goToSlide(index) {
  showSlide(index);
  resetInterval();
}

function startInterval() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

if (slides.length > 0) {
  prevBtn?.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });
  
  nextBtn?.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });
  
  startInterval();
}

// ============================================
// FILTROS
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const excursionCards = document.querySelectorAll('.excursion-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    
    // Actualizar botones activos
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filtrar cards
    excursionCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ============================================
// MODAL
// ============================================

const modal = document.getElementById('excursionModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const consultButtons = document.querySelectorAll('.btn-consult');

function openModal(excursionId) {
  const data = excursionsData[excursionId];
  if (!data) return;
  
  let includesHTML = '';
  if (data.includes && data.includes.length > 0) {
    includesHTML = `
      <div>
        <h3>Incluye:</h3>
        <ul>
          ${data.includes.map(item => `<li>✓ ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  let notIncludesHTML = '';
  if (data.notIncludes && data.notIncludes.length > 0) {
    notIncludesHTML = `
      <div>
        <h3>No incluye:</h3>
        <ul>
          ${data.notIncludes.map(item => `<li>✗ ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  let galleryHTML = '';
  if (data.gallery) {
    galleryHTML = `
      <a href="${data.gallery}" target="_blank" rel="noopener noreferrer" class="gallery-link" style="display: inline-block; margin-bottom: 1rem; padding: 0.5rem 1rem; background: var(--color-primary); color: white; border-radius: 20px; font-weight: 600;">
        📸 Ver galería de fotos
      </a>
    `;
  }
  
  const message = encodeURIComponent(
    `Hola Aymará, me interesa la excursión: *${data.name}*\n\n` +
    `Precio: ${data.price} ${data.currency}\n` +
    `Horario: ${data.schedule}\n\n` +
    `¿Podrían darme más información?`
  );
  
  modalBody.innerHTML = `
    <h2>${data.name}</h2>
    <div class="modal-price">${data.price} <span class="currency">${data.currency}</span></div>
    <p class="modal-description">${data.description}</p>
    <div class="modal-details">
      <p><strong>Horario:</strong> ${data.schedule}</p>
      <p><strong>Duración:</strong> ${data.duration}</p>
      ${includesHTML}
      ${notIncludesHTML}
    </div>
    ${galleryHTML}
    <a href="https://wa.me/5492614708533?text=${message}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px;">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Consultar por WhatsApp
    </a>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

consultButtons.forEach(button => {
  button.addEventListener('click', () => {
    const excursionId = button.dataset.excursion;
    openModal(excursionId);
  });
});

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', closeModal);

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// LAZY LOADING (mejora adicional)
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

