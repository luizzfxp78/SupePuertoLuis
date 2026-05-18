import { $ } from '../utils/dom.js';

export function initHeroSlider() {
  const heroSlider = $('.heroSwiper');
  if (!heroSlider) return;

  if (!window.Swiper) {
    heroSlider.classList.add('heroSwiper--fallback');
    return;
  }

  new window.Swiper(heroSlider, {
    loop: true,
    effect: 'fade',
    speed: 900,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    allowTouchMove: false
  });
}
