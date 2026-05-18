const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const mapRange = (value, inMin, inMax, outMin, outMax) => {
  if (inMin === inMax) return outMin;
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

class TraditionScrollItem {
  constructor(element, index) {
    this.element = element;
    this.image = element.querySelector('.tradition-image__inner');
    this.imageWrapper = element.querySelector('.tradition-image');
    this.title = element.querySelector('.tradition-content h3');
    this.index = index;
    this.isVisible = false;
    // Misma dirección de inclinación para todas las imágenes.
    // Antes se invertía en los bloques `.reverse`, por eso las imágenes
    // del lado derecho parecían inclinarse hacia atrás al hacer scroll.
    this.rotationAxisY = -0.7;
    this.rotationAxisZ = 0.35;
    this.maxRotation = -42;
    this.current = {
      imageY: 0,
      rotate: 0,
      titleY: 0
    };
    this.previous = { ...this.current };

    this.element.style.perspective = '1000px';
    if (this.imageWrapper) this.imageWrapper.style.transformOrigin = '50% 100%';
  }

  calculate() {
    const rect = this.element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const imageOverflow = this.image
      ? Number.parseFloat(getComputedStyle(this.image).getPropertyValue('--tradition-img-overflow')) || 96
      : 96;

    this.current.imageY = clamp(
      mapRange(rect.top, viewportHeight, -rect.height, -imageOverflow, imageOverflow),
      -imageOverflow,
      imageOverflow
    );

    this.current.rotate = clamp(
      mapRange(rect.top, viewportHeight * 1.35, -rect.height, this.maxRotation * -1, this.maxRotation),
      Math.min(this.maxRotation, this.maxRotation * -1),
      Math.max(this.maxRotation, this.maxRotation * -1)
    );

    this.current.titleY = clamp(
      mapRange(rect.top, viewportHeight, -rect.height, 76, -58),
      -58,
      76
    );
  }

  render() {
    this.calculate();

    this.previous.imageY += (this.current.imageY - this.previous.imageY) * 0.16;
    this.previous.rotate += (this.current.rotate - this.previous.rotate) * 0.16;
    this.previous.titleY += (this.current.titleY - this.previous.titleY) * 0.16;

    if (this.image) {
      this.image.style.transform = `translate3d(0, ${this.previous.imageY}px, 0) scale(1.16)`;
    }

    if (this.imageWrapper) {
      this.imageWrapper.style.transform = `rotate3d(1, ${this.rotationAxisY}, ${this.rotationAxisZ}, ${this.previous.rotate}deg)`;
    }

    if (this.title) {
      this.title.style.transform = `translate3d(0, ${this.previous.titleY}px, 180px)`;
    }
  }

  reset() {
    if (this.image) this.image.style.transform = '';
    if (this.imageWrapper) this.imageWrapper.style.transform = '';
    if (this.title) this.title.style.transform = '';
  }
}

export function initTraditionsScroll() {
  const elements = [...document.querySelectorAll('.tradition-scroll-item')];
  if (!elements.length) return;

  elements.forEach((element) => element.classList.add('is-ready'));

  if (prefersReducedMotion.matches) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const items = elements.map((element, index) => new TraditionScrollItem(element, index));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const item = items.find(({ element }) => element === entry.target);
        if (!item) return;

        item.isVisible = entry.isIntersecting;
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { rootMargin: '18% 0px 18% 0px', threshold: 0.08 }
  );

  items.forEach(({ element }) => observer.observe(element));

  let animationFrame = null;
  const render = () => {
    items.forEach((item) => {
      if (item.isVisible) item.render();
    });
    animationFrame = requestAnimationFrame(render);
  };

  const handleMotionChange = (event) => {
    if (!event.matches) return;
    if (animationFrame) cancelAnimationFrame(animationFrame);
    observer.disconnect();
    items.forEach((item) => {
      item.reset();
      item.element.classList.add('is-visible');
    });
  };

  prefersReducedMotion.addEventListener?.('change', handleMotionChange);
  animationFrame = requestAnimationFrame(render);
}
