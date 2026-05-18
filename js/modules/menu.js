import { $, $$ } from '../utils/dom.js';
import { SELECTORS } from '../utils/constants.js';

export function initMobileMenu() {
  const header = $(SELECTORS.header);
  const button = $(SELECTORS.hamburger);
  const nav = $(SELECTORS.navLinks);

  if (!header || !button || !nav) return;

  const setOpenState = (isOpen) => {
    nav.classList.toggle('active', isOpen);
    button.classList.toggle('is-active', isOpen);
    header.classList.toggle('menu-open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };

  button.addEventListener('click', () => setOpenState(!nav.classList.contains('active')));
  $$(SELECTORS.navAnchor).forEach((link) => link.addEventListener('click', () => setOpenState(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpenState(false);
  });
}

export function initHeaderScroll() {
  const header = $(SELECTORS.header);
  if (!header) return;

  let scheduled = false;
  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    scheduled = false;
  };

  updateHeader();
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateHeader);
  }, { passive: true });
}
