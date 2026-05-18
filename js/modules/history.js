import { $, $$ } from '../utils/dom.js';
import { SELECTORS, historyData } from '../utils/constants.js';

const HISTORY_FADE_OUT_MS = 260;
const HISTORY_FADE_IN_MS = 520;

const wait = (time) => new Promise((resolve) => window.setTimeout(resolve, time));

const preloadImage = (src) =>
  new Promise((resolve) => {
    const nextImage = new Image();
    nextImage.onload = resolve;
    nextImage.onerror = resolve;
    nextImage.src = src;
  });

export function initHistoryTabs() {
  const buttons = $$(SELECTORS.timelineButton);
  const historyGrid = $('#historyDynamic');
  const image = $('#historyImg');
  const title = $('#historyTitle');
  const description = $('#historyDesc');
  const chapter = $('#chapterCounter');

  if (!buttons.length || !historyGrid || !image || !title || !description || !chapter) return;

  let activePeriod = buttons.find((button) => button.classList.contains('active'))?.dataset.period || buttons[0].dataset.period;
  let isAnimating = false;
  let queuedPeriod = null;
  let initialAnimationPlayed = false;
  let initialAnimationTimer = null;

  historyGrid.classList.add('history-grid--initial-pending');

  const updateButtons = (period) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.period === period;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  const updateContent = (data) => {
    image.src = data.img;
    image.alt = data.title;
    title.textContent = data.title;
    description.textContent = data.desc;
    chapter.textContent = data.chapter;
  };

  const setButtonsDisabled = (disabled) => {
    buttons.forEach((button) => {
      button.disabled = disabled;
    });
  };

  const clearInitialAnimation = () => {
    if (initialAnimationTimer) {
      window.clearTimeout(initialAnimationTimer);
      initialAnimationTimer = null;
    }

    historyGrid.classList.remove('history-grid--initial-pending', 'history-grid--entering');
  };

  const playInitialAnimation = () => {
    if (initialAnimationPlayed || isAnimating) return;

    initialAnimationPlayed = true;
    historyGrid.classList.remove('history-grid--initial-pending', 'history-grid--leaving');
    historyGrid.classList.add('history-grid--entering');

    initialAnimationTimer = window.setTimeout(() => {
      historyGrid.classList.remove('history-grid--entering');
      initialAnimationTimer = null;
    }, HISTORY_FADE_IN_MS);
  };

  const initInitialAnimation = () => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            playInitialAnimation();
            observer.disconnect();
          });
        },
        { rootMargin: '0px 0px -15% 0px', threshold: 0.18 }
      );

      observer.observe(historyGrid);
      return;
    }

    window.requestAnimationFrame(playInitialAnimation);
  };

  const setHistory = async (period) => {
    const data = historyData[period];
    if (!data || period === activePeriod) return;

    if (isAnimating) {
      queuedPeriod = period;
      updateButtons(period);
      return;
    }

    initialAnimationPlayed = true;
    clearInitialAnimation();

    isAnimating = true;
    queuedPeriod = null;
    setButtonsDisabled(true);
    updateButtons(period);

    const imageReady = preloadImage(data.img);

    historyGrid.classList.remove('history-grid--entering');
    historyGrid.classList.add('history-grid--leaving');

    await Promise.all([wait(HISTORY_FADE_OUT_MS), imageReady]);

    updateContent(data);
    activePeriod = period;

    historyGrid.classList.remove('history-grid--leaving');
    historyGrid.classList.add('history-grid--entering');

    await wait(HISTORY_FADE_IN_MS);

    historyGrid.classList.remove('history-grid--entering');
    setButtonsDisabled(false);
    isAnimating = false;

    if (queuedPeriod && queuedPeriod !== activePeriod) {
      const nextPeriod = queuedPeriod;
      queuedPeriod = null;
      setHistory(nextPeriod);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => setHistory(button.dataset.period));
  });

  initInitialAnimation();
}
