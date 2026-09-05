const body = document.body;
const boot = document.querySelector('.boot-screen');
const bootCount = document.querySelector('.boot-screen__count');
const bootTrack = document.querySelector('.boot-screen__track i');
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const languageToggle = document.querySelector('.language-toggle');
const displayToggle = document.querySelector('.display-toggle');
const progress = document.querySelector('.scroll-progress i');

let hasBooted = false;
const bootStorageKey = `studio-terminal-booted:${window.location.pathname}`;
try { hasBooted = sessionStorage.getItem(bootStorageKey) === '1'; } catch (_) {}

if (hasBooted) {
  bootCount.textContent = '100';
  bootTrack.style.width = '100%';
  boot.classList.add('is-done');
} else {
  let bootValue = 0;
  const bootTimer = window.setInterval(() => {
    bootValue = Math.min(100, bootValue + Math.ceil(Math.random() * 22));
    bootCount.textContent = String(bootValue).padStart(3, '0');
    bootTrack.style.width = `${bootValue}%`;
    if (bootValue === 100) {
      window.clearInterval(bootTimer);
      try { sessionStorage.setItem(bootStorageKey, '1'); } catch (_) {}
      window.setTimeout(() => boot.classList.add('is-done'), 180);
    }
  }, 45);
}

menuToggle.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '关闭菜单' : '打开菜单');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

try {
  if (localStorage.getItem('studio-language') === 'en') {
    body.classList.add('lang-en');
    document.documentElement.lang = 'en';
  }
} catch (_) {}

languageToggle.addEventListener('click', () => {
  const english = body.classList.toggle('lang-en');
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  try { localStorage.setItem('studio-language', english ? 'en' : 'zh'); } catch (_) {}
});

displayToggle.addEventListener('click', () => {
  const clean = body.classList.toggle('display-clean');
  displayToggle.textContent = clean ? 'CRT: OFF' : 'CRT: ON';
  displayToggle.setAttribute('aria-label', clean ? '开启扫描线' : '关闭扫描线');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll('.main-nav a')];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -58%', threshold: 0 });
navSections.forEach((section) => sectionObserver.observe(section));

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable ? (current / scrollable) * 100 : 0}%`;
  if (current > 300 && current > lastScroll + 8 && !body.classList.contains('menu-open')) header.classList.add('is-hidden');
  if (current < lastScroll - 8) header.classList.remove('is-hidden');
  lastScroll = current;
}, { passive: true });

const hero = document.querySelector('.hero');
const az = document.querySelector('[data-az]');
const el = document.querySelector('[data-el]');
hero.addEventListener('pointermove', (event) => {
  const bounds = hero.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
  const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
  az.textContent = (x * 360).toFixed(1).padStart(5, '0');
  el.textContent = `${y > .5 ? '-' : '+'}${Math.abs((.5 - y) * 180).toFixed(1).padStart(4, '0')}`;
});

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const start = performance.now();
    const duration = 900;
    const step = (now) => {
      const ratio = Math.min(1, (now - start) / duration);
      element.textContent = String(Math.round(target * (1 - Math.pow(1 - ratio, 3)))).padStart(2, '0');
      if (ratio < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    statObserver.unobserve(element);
  });
}, { threshold: .8 });
document.querySelectorAll('[data-count]').forEach((element) => statObserver.observe(element));

const modal = document.querySelector('.concept-modal');
document.querySelector('.concept-expand').addEventListener('click', () => modal.showModal());
modal.querySelector('button').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

const galleryImages = [
  {
    src: 'assets/final_images/CH1-S01_轨道上的灰色行星/CH1-S01_A_轨道建立镜头.png',
    alt: '飞船在 Alpha 灰色行星轨道上建立航线',
    caption: 'CH1-S01 / 轨道上的灰色行星 / 轨道建立镜头',
  },
  {
    src: 'assets/final_images/CH1-S02_酸雨穿云/CH1-S02_B_肩后穿云.png',
    alt: 'Traveller 从飞船驾驶舱穿过 Alpha 的酸雨云层',
    caption: 'CH1-S02 / 酸雨穿云 / 肩后穿云',
  },
  {
    src: 'assets/final_images/CH1-S03_非计划着陆/CH1-S03_C_支脚入泥.png',
    alt: '飞船在暴雨中的泥泞地表执行非计划着陆',
    caption: 'CH1-S03 / 非计划着陆 / 支脚入泥',
  },
  {
    src: 'assets/final_images/CH1-S04_第十九根柱/CH1-S04_B_满幅侧窗独立柱列.png',
    alt: '雨幕中的 The Spine 巨型柱列从飞船侧窗延伸至远方',
    caption: 'CH1-S04 / 第十九根柱 / 满幅侧窗独立柱列',
  },
];

const galleryModal = document.querySelector('.gallery-modal');
const galleryImage = galleryModal.querySelector('.gallery-main-image');
const galleryCaption = galleryModal.querySelector('.gallery-caption');
const galleryCounter = galleryModal.querySelector('.gallery-counter');
const galleryThumbnails = galleryModal.querySelector('.gallery-thumbnails');
let galleryIndex = 0;

galleryImages.forEach((image, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.galleryIndex = String(index);
  button.setAttribute('aria-label', `查看第 ${index + 1} 张：${image.caption}`);
  button.innerHTML = `<img src="${image.src}" alt="" loading="lazy" decoding="async" />`;
  galleryThumbnails.append(button);
});

const renderGalleryImage = (index) => {
  galleryIndex = (index + galleryImages.length) % galleryImages.length;
  const image = galleryImages[galleryIndex];
  galleryImage.src = image.src;
  galleryImage.alt = image.alt;
  galleryCaption.textContent = image.caption;
  galleryCounter.textContent = `${String(galleryIndex + 1).padStart(2, '0')} / ${String(galleryImages.length).padStart(2, '0')}`;
  galleryThumbnails.querySelectorAll('button').forEach((button, buttonIndex) => {
    const active = buttonIndex === galleryIndex;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-current', active ? 'true' : 'false');
  });
};

document.querySelector('.gallery-trigger').addEventListener('click', () => {
  renderGalleryImage(0);
  galleryModal.showModal();
});
galleryModal.querySelector('.gallery-close').addEventListener('click', () => galleryModal.close());
galleryModal.querySelector('.gallery-nav--prev').addEventListener('click', () => renderGalleryImage(galleryIndex - 1));
galleryModal.querySelector('.gallery-nav--next').addEventListener('click', () => renderGalleryImage(galleryIndex + 1));
galleryThumbnails.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) renderGalleryImage(Number(button.dataset.galleryIndex));
});
galleryModal.addEventListener('click', (event) => {
  if (event.target === galleryModal) galleryModal.close();
});
galleryModal.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') renderGalleryImage(galleryIndex - 1);
  if (event.key === 'ArrowRight') renderGalleryImage(galleryIndex + 1);
});

const newsModal = document.querySelector('.news-modal');
document.querySelector('.news-trigger').addEventListener('click', () => newsModal.showModal());
newsModal.querySelector('.news-close').addEventListener('click', () => newsModal.close());
newsModal.addEventListener('click', (event) => {
  if (event.target === newsModal) newsModal.close();
});
