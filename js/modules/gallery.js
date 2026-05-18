import { $ } from '../utils/dom.js';
import { SELECTORS, galleryImages } from '../utils/constants.js';

export function initGallery() {
  const stage = $(SELECTORS.galleryStage);
  const mainBoxes = $(SELECTORS.mainBoxes);
  const gsap = window.gsap;

  if (!stage || !mainBoxes || !gsap) return;

  const columns = 3;
  const xPositions = [60, 280, 500];
  const startY = [-575, 800, 800];
  const endY = [800, -575, -575];
  const durations = [40, 35, 26];

  const boxes = galleryImages.map((image, index) => {
    const column = index % columns;
    const box = document.createElement('div');
    box.className = `photoBox pb-col${column}`;
    box.style.backgroundImage = `url("${image}")`;
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', `Fotografía ${index + 1} de Supe Puerto`);
    mainBoxes.appendChild(box);

    gsap.set(box, {
      x: xPositions[column],
      y: startY[column],
      width: 400,
      height: 640,
      borderRadius: 20,
      scale: 0.5,
      zIndex: 1,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    });

    const timeline = gsap.timeline({ paused: true, repeat: -1 })
      .fromTo(box, { y: startY[column], rotation: -0.05 }, {
        duration: durations[column],
        y: endY[column],
        rotation: 0.05,
        ease: 'none'
      });

    timeline.progress(index / galleryImages.length);
    box.galleryTimeline = timeline;
    box.galleryColumn = column;

    return box;
  });

  let delayedPlay = null;

  const getSameColumnBoxes = (box) => boxes.filter((item) => item.galleryColumn === box.galleryColumn);

  const pauseColumn = (box) => {
    getSameColumnBoxes(box).forEach((item) => {
      gsap.to(item.galleryTimeline, { timeScale: 0, ease: 'sine' });
    });
  };

  const playBoxes = () => {
    boxes.forEach((box) => {
      box.galleryTimeline.play();
      gsap.to(box.galleryTimeline, {
        duration: 0.4,
        timeScale: 1,
        ease: 'sine.in',
        overwrite: true
      });
    });
  };

  const handleHoverIn = (box) => {
    if (delayedPlay) delayedPlay.kill();

    pauseColumn(box);
    gsap.to(boxes, {
      duration: 0.2,
      overwrite: 'auto',
      opacity: (_, target) => (target === box ? 1 : 0.33)
    });
    gsap.fromTo(box, { zIndex: 100 }, { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' });
  };

  const handleHoverOut = (box) => {
    if (gsap.getProperty(box, 'scale') > 0.62) {
      delayedPlay = gsap.delayedCall(0.3, playBoxes);
    } else {
      playBoxes();
    }

    gsap.timeline()
      .set(box, { zIndex: 1 })
      .to(box, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
      .to(boxes, { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
  };

  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => handleHoverIn(box));
    box.addEventListener('mouseleave', () => handleHoverOut(box));
  });

  gsap.set(stage, { perspective: 800 });
  gsap.set(boxes, { opacity: 1, cursor: 'default' });
  gsap.set(mainBoxes, { left: '75%', xPercent: -50, width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10 });
  gsap.fromTo(stage, { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1, delay: 0.2 });

  playBoxes();
}
