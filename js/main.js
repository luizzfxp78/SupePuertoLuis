import { initGallery } from './modules/gallery.js';
import { initHeaderScroll, initMobileMenu } from './modules/menu.js';
import { initHeroSlider } from './modules/slider.js';
import { initHistoryTabs } from './modules/history.js';
import { initMap } from './modules/map.js';
import { initMythsAccordion } from './modules/myths.js';
import { initTourismFilters } from './modules/tourism.js';
import { initTraditionsScroll } from './modules/traditions.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initHeroSlider();
  initMap();
  initHistoryTabs();
  initTourismFilters();
  initTraditionsScroll();
  initMythsAccordion();
  initGallery();
});
