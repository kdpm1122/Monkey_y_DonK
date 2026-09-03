const STORAGE_KEY = 'danketic-projects';

// Detecta automáticamente si el sitio corre en local o ya está publicado.
// En local usa el backend en el puerto 3001.
// En producción, reemplaza la URL de abajo por la de tu backend ya desplegado
// (Render, Railway, tu VPS, etc.) una vez lo tengas.
const IS_LOCAL = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const PRODUCTION_API_URL = 'https://TU-BACKEND-EN-PRODUCCION.com'; // <-- cámbialo cuando despliegues el backend
const API_BASE = IS_LOCAL ? 'http://localhost:3001' : PRODUCTION_API_URL;

let adminToken = sessionStorage.getItem('danketic-admin-token') || null;

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.prices': 'Prices',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': 'Request a quote',
    'hero.eyebrow': 'Custom web and software development',
    'hero.title': 'Web pages and custom software so your business sells more.',
    'hero.lead': 'We design web pages, catalogs, online stores and custom systems for businesses that want to look professional and sell more, without complications.',
    'hero.primaryCta': 'I want a web page',
    'hero.secondaryCta': 'Chat on WhatsApp',
    'hero.statProjects': 'projects',
    'hero.statCustom': 'custom',
    'hero.statSupport': 'support',
    'hero.metricSales': 'Sales',
    'hero.metricTime': 'Time',
    'services.eyebrow': 'Services',
    'services.title': 'Digital solutions for every stage of your business',
    'service.web.title': 'Websites',
    'service.web.text': 'Modern and fast sites with attractive design to attract clients and strengthen your online presence.',
    'service.web.li1': 'Landing pages',
    'service.web.li2': 'Digital catalogs',
    'service.web.li3': 'E-commerce',
    'service.inventory.title': 'Catalogs / Stores',
    'service.inventory.text': 'Digital catalogs and online stores so your clients can see and buy your products easily.',
    'service.inventory.li1': 'Product catalog',
    'service.inventory.li2': 'Online store',
    'service.inventory.li3': 'Shopping cart',
    'service.software.title': 'Custom systems',
    'service.software.text': 'Custom tools to automate processes, improve productivity and reduce operational errors.',
    'service.software.li1': 'Dashboards',
    'service.software.li2': 'CRM',
    'service.software.li3': 'Automation',
    'prices.eyebrow': 'Prices',
    'prices.title': 'Clear prices, no surprises',
    'prices.web.title': 'Web pages',
    'prices.web.amount': 'From $300.000 COP',
    'prices.web.text': 'Landing page or informational site, ready to show off your business.',
    'prices.catalog.title': 'Catalogs / Stores',
    'prices.catalog.amount': 'From $600.000 COP',
    'prices.catalog.text': 'Digital catalog or online store with shopping cart.',
    'prices.custom.title': 'Custom systems',
    'prices.custom.amount': 'From $1.200.000 COP',
    'prices.custom.text': 'Dashboards, CRM or process automation tailored to your business.',
    'prices.note': 'Final price depends on project scope. Domain and hosting are not included.',
    'prices.popular': 'Most popular',
    'portfolio.eyebrow': 'Portfolio',
    'portfolio.title': 'Dashboards and solutions already working',
    'about.eyebrow': 'About us',
    'about.title': 'A small team, real results',
    'about.text': 'We are Danketic: a team focused on building web pages and software that help your business look professional and sell more. No unnecessary complications, no endless meetings — just clear work and on-time delivery.',
    'demos.eyebrow': 'Demos',
    'demos.title': 'See it before you ask for it',
    'demos.subtitle': 'Barbershop, restaurant and store — 3 real examples you can explore right now.',
    'demos.cta': 'See the 3 demos',
    'process.eyebrow': 'Process',
    'process.title': 'Clear, professional work focused on results',
    'process.step1.title': 'We talk',
    'process.step1.text': 'We analyze your business, goals and the processes you want to improve.',
    'process.step2.title': 'We design',
    'process.step2.text': 'We define a visual and functional strategy aligned with your brand and audience.',
    'process.step3.title': 'We develop',
    'process.step3.text': 'We build the solution using modern and maintainable technologies.',
    'process.step4.title': 'We publish',
    'process.step4.text': 'We deliver the solution, train your team and support continuous improvement.',
    'testimonial.text': '"We launched a modern and functional website that helped us capture more clients and better organize business information."',
    'testimonial.author': '— Services company',
    'footer.text': 'We develop digital solutions for companies and businesses that want to grow with intelligent technology.',
    'contact.title': 'Request your project',
    'contact.name': 'Your name',
    'contact.email': 'Email address',
    'contact.projectType': 'Project type',
    'contact.optionEcommerceDash': 'E-commerce Dashboard',
    'contact.optionInventorySystem': 'Inventory Management System',
    'contact.optionFinancialDash': 'Financial Dashboard',
    'contact.optionAnalytics': 'Analytics Platform',
    'contact.optionCRM': 'CRM System',
    'contact.optionWebApp': 'Custom Web Application',
    'contact.optionMobile': 'Mobile Application',
    'contact.optionOther': 'Other',
    'contact.message': 'Tell us what you need...',
    'contact.submit': 'Send request',
    'project.optionEqual': 'I want a page like this',
    'project.optionAdjust': 'I want to change things',
    'project.selectionLabel': 'Selection:',
    'project.cta': 'Request this project',
    'admin.title': 'Admin panel',
    'admin.username': 'Username',
    'admin.usernamePlaceholder': 'Type your username',
    'admin.password': 'Password',
    'admin.passwordPlaceholder': 'Type your password',
    'admin.login': 'Enter',
    'admin.projectName': 'Project name',
    'admin.projectNamePlaceholder': 'Example: Shopify Dashboard',
    'admin.category': 'Category',
    'admin.categoryPlaceholder': 'Example: Ecommerce / Inventory',
    'admin.description': 'Description',
    'admin.descriptionPlaceholder': 'Describe the project...',
    'admin.file': 'JPG / PNG file',
    'admin.saveProject': 'Save project',
    'admin.reset': 'Reset'
  },
  es: {
    'nav.services': 'Servicios',
    'nav.prices': 'Precios',
    'nav.portfolio': 'Portafolio',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.cta': 'Solicitar presupuesto',
    'hero.eyebrow': 'Desarrollo web y software a medida',
    'hero.title': 'Páginas web y software a medida para que tu negocio venda más.',
    'hero.lead': 'Diseñamos páginas web, catálogos, tiendas online y sistemas personalizados para negocios que quieren verse profesionales y vender más, sin complicaciones.',
    'hero.primaryCta': 'Quiero una página web',
    'hero.secondaryCta': 'Escríbenos por WhatsApp',
    'hero.statProjects': 'proyectos',
    'hero.statCustom': 'a medida',
    'hero.statSupport': 'soporte',
    'hero.metricSales': 'Ventas',
    'hero.metricTime': 'Tiempo',
    'services.eyebrow': 'Servicios',
    'services.title': 'Soluciones digitales para cada etapa de tu negocio',
    'service.web.title': 'Páginas web',
    'service.web.text': 'Sitios modernos y rápidos con un diseño atractivo para captar clientes y fortalecer tu presencia online.',
    'service.web.li1': 'Landing pages',
    'service.web.li2': 'Catálogos digitales',
    'service.web.li3': 'E-commerce',
    'service.inventory.title': 'Catálogos / Tiendas',
    'service.inventory.text': 'Catálogos digitales y tiendas online para que tus clientes vean y compren tus productos fácilmente.',
    'service.inventory.li1': 'Catálogo de productos',
    'service.inventory.li2': 'Tienda online',
    'service.inventory.li3': 'Carrito de compras',
    'service.software.title': 'Sistemas personalizados',
    'service.software.text': 'Herramientas personalizadas para automatizar procesos, mejorar la productividad y reducir errores operativos.',
    'service.software.li1': 'Dashboards',
    'service.software.li2': 'CRM',
    'service.software.li3': 'Automatización',
    'prices.eyebrow': 'Precios',
    'prices.title': 'Precios claros, sin sorpresas',
    'prices.web.title': 'Páginas web',
    'prices.web.amount': 'Desde $300.000 COP',
    'prices.web.text': 'Landing page o sitio informativo, listo para mostrar tu negocio.',
    'prices.catalog.title': 'Catálogos / Tiendas',
    'prices.catalog.amount': 'Desde $600.000 COP',
    'prices.catalog.text': 'Catálogo digital o tienda online con carrito de compras.',
    'prices.custom.title': 'Sistemas personalizados',
    'prices.custom.amount': 'Desde $1.200.000 COP',
    'prices.custom.text': 'Dashboards, CRM o automatización de procesos a la medida de tu negocio.',
    'prices.note': 'El precio final depende del alcance del proyecto. Dominio y hosting no están incluidos.',
    'prices.popular': 'Más popular',
    'portfolio.eyebrow': 'Portafolio',
    'portfolio.title': 'Dashboards y soluciones que ya están funcionando',
    'about.eyebrow': 'Sobre nosotros',
    'about.title': 'Un equipo pequeño, resultados reales',
    'about.text': 'Somos Danketic: un equipo enfocado en construir páginas web y software que ayudan a tu negocio a verse profesional y vender más. Sin complicaciones innecesarias, sin reuniones eternas — solo trabajo claro y entregas a tiempo.',
    'demos.eyebrow': 'Demos',
    'demos.title': 'Míralo antes de pedirlo',
    'demos.subtitle': 'Barbería, restaurante y tienda — 3 ejemplos reales que puedes explorar ahora mismo.',
    'demos.cta': 'Ver los 3 demos',
    'process.eyebrow': 'Proceso',
    'process.title': 'Trabajo claro, profesional y enfocado en resultados',
    'process.step1.title': 'Hablamos',
    'process.step1.text': 'Conversamos sobre tu negocio, tus metas y lo que necesitas mejorar.',
    'process.step2.title': 'Diseñamos',
    'process.step2.text': 'Definimos una estrategia visual y funcional acorde a tu marca y público.',
    'process.step3.title': 'Desarrollamos',
    'process.step3.text': 'Construimos la solución con tecnologías modernas y mantenibles.',
    'process.step4.title': 'Publicamos',
    'process.step4.text': 'Publicamos tu proyecto y te acompañamos después del lanzamiento.',
    'testimonial.text': '"Logramos una web moderna y funcional que nos ayudó a captar más clientes y organizar mejor la información de nuestro negocio."',
    'testimonial.author': '— Empresa de servicios',
    'footer.text': 'Desarrollamos soluciones digitales para empresas y negocios que quieren crecer con tecnología inteligente.',
    'contact.title': 'Solicita tu proyecto',
    'contact.name': 'Tu nombre',
    'contact.email': 'Correo electrónico',
    'contact.projectType': 'Tipo de proyecto',
    'contact.optionEcommerceDash': 'Dashboard E-commerce',
    'contact.optionInventorySystem': 'Sistema de Gestión de Inventario',
    'contact.optionFinancialDash': 'Dashboard Financiero',
    'contact.optionAnalytics': 'Plataforma de Análitica',
    'contact.optionCRM': 'Sistema CRM',
    'contact.optionWebApp': 'Aplicación Web Personalizada',
    'contact.optionMobile': 'Aplicación Móvil',
    'contact.optionOther': 'Otro',
    'contact.message': 'Cuéntanos qué necesitas...',
    'contact.submit': 'Enviar solicitud',
    'project.optionEqual': 'Quiero una página igual',
    'project.optionAdjust': 'Quiero cambiar cosas',
    'project.selectionLabel': 'Selección:',
    'project.cta': 'Solicitar este proyecto',
    'admin.title': 'Panel de administrador',
    'admin.username': 'Usuario',
    'admin.usernamePlaceholder': 'Escribe tu usuario',
    'admin.password': 'Contraseña',
    'admin.passwordPlaceholder': 'Escribe tu contraseña',
    'admin.login': 'Entrar',
    'admin.projectName': 'Nombre del proyecto',
    'admin.projectNamePlaceholder': 'Ej. Dashboard de Shopify',
    'admin.category': 'Categoría',
    'admin.categoryPlaceholder': 'Ej. Ecommerce / Inventario',
    'admin.description': 'Descripción',
    'admin.descriptionPlaceholder': 'Describe el proyecto...',
    'admin.file': 'Archivo JPG / PNG',
    'admin.saveProject': 'Guardar proyecto',
    'admin.reset': 'Restablecer'
  }
};

const defaultProjects = [
  {
    id: 1,
    title: 'El Corte — Barbería',
    category: 'Barbería',
    description: 'Estética oscura y dorada, servicios tipo carta y galería de trabajo real.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  },
  {
    id: 2,
    title: 'Sabor Local — Restaurante',
    category: 'Restaurante',
    description: 'Menú con precios claros, platos reales y reservas por WhatsApp.',
    image: 'https://images.unsplash.com/photo-1743630458593-286a8ae99625?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  },
  {
    id: 3,
    title: 'Moda.Urbana — Tienda',
    category: 'Tienda',
    description: 'Catálogo con categorías, productos destacados y pedidos por WhatsApp.',
    image: 'https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  }
];

const form = document.getElementById('contactForm');
const message = document.getElementById('form-message');
const dashboardRail = document.getElementById('dashboardRail');
const detailImage = document.getElementById('detailImage');
const detailTitle = document.getElementById('detailTitle');
const detailCategory = document.getElementById('detailCategory');
const detailDescription = document.getElementById('detailDescription');
const selectionText = document.getElementById('selectionText');
const detailCta = document.getElementById('detailCta');
const adminModal = document.getElementById('adminModal');
const openAdminButton = document.getElementById('openAdmin');
const closeAdminButton = document.getElementById('closeAdmin');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminForm = document.getElementById('adminForm');
const resetProjectsButton = document.getElementById('resetProjects');
const adminUsernameInput = document.getElementById('adminUsername');
const adminPasswordInput = document.getElementById('adminPassword');
const adminMessage = document.getElementById('adminMessage');
const projectTitleInput = document.getElementById('projectTitle');
const projectCategoryInput = document.getElementById('projectCategory');
const projectDescriptionInput = document.getElementById('projectDescription');
const projectImageInput = document.getElementById('projectImage');

function loadProjects() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProjects;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultProjects;
  } catch (error) {
    console.warn('No se pudo leer danketic-projects de localStorage, usando proyectos por defecto.', error);
    return defaultProjects;
  }
}

let projectList = loadProjects();
let activeProject = projectList[0];
let selectedChoice = 'igual';
let carouselIndex = 0;
let currentLang = 'en';

function escapeHTML(value) {
  const div = document.createElement('div');
  div.textContent = value ?? '';
  return div.innerHTML;
}

function saveProjects(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error guardando proyectos en localStorage', error);
    if (adminMessage) {
      adminMessage.textContent = 'The image is too heavy to save. Try a smaller/compressed file.';
      adminMessage.style.color = '#fca5a5';
    }
    return false;
  }
  projectList = data;
  renderProjects();
  updateDetail(projectList[0]);
  return true;
}

function getChoiceLabel(code) {
  const map = {
    igual: translations[currentLang]['project.optionEqual'],
    cambiar: translations[currentLang]['project.optionAdjust']
  };

  return map[code] || translations[currentLang]['project.optionEqual'];
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  if (selectionText) {
    selectionText.textContent = getChoiceLabel(selectedChoice);
  }

  if (detailTitle && activeProject) {
    detailTitle.textContent = activeProject.title;
  }
}

function updateDetail(project) {
  activeProject = project;

  if (!project) return;

  detailImage.src = project.image;
  detailTitle.textContent = project.title;
  detailCategory.textContent = project.category;
  detailDescription.textContent = project.description;
  selectionText.textContent = getChoiceLabel(selectedChoice);
  detailCta.href = '#contacto';
}

// Al hacer clic en "Solicitar este proyecto", precargamos el mensaje
// del formulario de contacto con el proyecto y la opción elegida.
if (detailCta) {
  detailCta.addEventListener('click', () => {
    if (!activeProject) return;

    const messageField = document.querySelector('textarea[name="mensaje"]');
    if (messageField) {
      const choiceLabel = getChoiceLabel(selectedChoice);
      messageField.value = `${activeProject.title} — ${choiceLabel}. `;
    }
  });
}

function renderProjects() {
  if (!dashboardRail) return;

  const items = [...projectList, ...projectList];
  dashboardRail.innerHTML = items
    .map(
      (project, index) => `
        <button
          class="dashboard-item"
          type="button"
          data-index="${index % projectList.length}"
          aria-label="View project ${escapeHTML(project.title)}"
        >
          <span class="dashboard-item-chrome"><i></i><i></i><i></i></span>
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" />
          <span class="dashboard-item-overlay">
            <small>${escapeHTML(project.category)}</small>
            <strong>${escapeHTML(project.title)}</strong>
          </span>
        </button>
      `
    )
    .join('');

  const cards = dashboardRail.querySelectorAll('.dashboard-item');
  cards.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      const project = projectList[index];
      updateDetail(project);
      document.getElementById('detalle-proyecto').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  startCarousel();
}

function getMoveWidth() {
  const firstItem = dashboardRail.querySelector('.dashboard-item');
  if (!firstItem) return 0;
  const styles = window.getComputedStyle(dashboardRail);
  const gap = parseFloat(styles.columnGap || styles.gap) || 18;
  return firstItem.getBoundingClientRect().width + gap;
}

function startCarousel() {
  if (!dashboardRail || !dashboardRail.querySelector('.dashboard-item')) return;

  dashboardRail.style.transition = 'none';
  dashboardRail.style.transform = 'translateX(0px)';
  carouselIndex = 0;
  window.clearInterval(window.danketicCarouselTimer);

  window.danketicCarouselTimer = window.setInterval(() => {
    carouselIndex += 1;
    const moveWidth = getMoveWidth(); // se recalcula en cada tick por si cambió el tamaño de pantalla
    dashboardRail.style.transition = 'transform 0.7s ease';
    dashboardRail.style.transform = `translateX(-${moveWidth * carouselIndex}px)`;

    if (carouselIndex >= projectList.length) {
      window.setTimeout(() => {
        carouselIndex = 0;
        dashboardRail.style.transition = 'none';
        dashboardRail.style.transform = 'translateX(0px)';
      }, 700);
    }
  }, 3000);
}

// Si el usuario cambia el tamaño de la ventana o gira el celular,
// reiniciamos la posición del carrusel para que no quede desalineado.
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = window.setTimeout(() => {
    startCarousel();
  }, 200);
});

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get('nombre')?.toString().trim() || 'Client';
    const email = formData.get('email')?.toString().trim() || '';
    const tipo = formData.get('tipo')?.toString() || 'project';
    const mensaje = formData.get('mensaje')?.toString().trim() || '';
    const submitButton = form.querySelector('button[type="submit"]');

    message.textContent = 'Sending...';
    message.style.color = '';
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, tipo, mensaje }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong sending your message.');
      }

      message.textContent = `Thanks ${nombre}, your request for ${tipo} was sent. We will contact you soon.`;
      message.style.color = '#7ee7c8';
      form.reset();
    } catch (error) {
      message.textContent =
        error.message === 'Failed to fetch'
          ? 'Could not reach the server. Please try again later or write us on WhatsApp.'
          : error.message;
      message.style.color = '#fca5a5';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

function openAdmin() {
  adminModal.classList.remove('hidden');
  adminModal.setAttribute('aria-hidden', 'false');
  adminLoginForm.classList.remove('hidden');
  adminForm.classList.add('hidden');
  adminMessage.textContent = '';
  adminLoginForm.reset();
  adminUsernameInput.focus();
}

function closeAdmin() {
  adminModal.classList.add('hidden');
  adminModal.setAttribute('aria-hidden', 'true');
  adminLoginForm.classList.remove('hidden');
  adminForm.classList.add('hidden');
  adminLoginForm.reset();
  adminForm.reset();
  adminMessage.textContent = '';
  adminToken = null;
  sessionStorage.removeItem('danketic-admin-token');
}

if (openAdminButton) {
  openAdminButton.addEventListener('click', openAdmin);
}

if (closeAdminButton) {
  closeAdminButton.addEventListener('click', closeAdmin);
}

if (adminModal) {
  adminModal.addEventListener('click', (event) => {
    if (event.target === adminModal) {
      closeAdmin();
    }
  });
}

if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = adminUsernameInput.value.trim();
    const password = adminPasswordInput.value.trim();
    const submitButton = adminLoginForm.querySelector('button[type="submit"]');

    adminMessage.textContent = 'Verificando...';
    adminMessage.style.color = '';
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid username or password.');
      }

      adminToken = data.token;
      sessionStorage.setItem('danketic-admin-token', adminToken);

      adminMessage.textContent = '';
      adminLoginForm.classList.add('hidden');
      adminForm.classList.remove('hidden');
      projectTitleInput.focus();
    } catch (error) {
      adminMessage.textContent =
        error.message === 'Failed to fetch'
          ? 'No se pudo conectar con el servidor. ¿Está corriendo el backend?'
          : error.message;
      adminMessage.style.color = '#fca5a5';
      adminUsernameInput.focus();
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

if (adminForm) {
  adminForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const file = projectImageInput.files && projectImageInput.files[0];
    const title = projectTitleInput.value.trim();
    const category = projectCategoryInput.value.trim();
    const description = projectDescriptionInput.value.trim();

    if (!file || !title || !category || !description) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newProject = {
        id: Date.now(),
        title,
        category,
        description,
        image: reader.result,
        option: 'igual'
      };

      const updatedProjects = [newProject, ...projectList];
      const saved = saveProjects(updatedProjects);
      if (saved) {
        adminForm.reset();
        closeAdmin();
      }
    };

    reader.readAsDataURL(file);
  });
}

if (resetProjectsButton) {
  resetProjectsButton.addEventListener('click', () => {
    saveProjects(defaultProjects);
    adminForm.reset();
    closeAdmin();
  });
}

document.querySelectorAll('.choice-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    selectedChoice = button.dataset.choice;
    selectionText.textContent = getChoiceLabel(selectedChoice);
    if (activeProject) {
      detailCta.href = '#contacto';
    }
  });
});

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

if (dashboardRail) {
  renderProjects();
  updateDetail(projectList[0]);
  setLanguage('es');
}