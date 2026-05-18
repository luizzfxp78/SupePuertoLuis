import { $$ } from '../utils/dom.js';

const ACTIVE_CLASS = 'is-active';

export function initMythsAccordion() {
  const cards = $$('.myth-card');
  if (!cards.length) return;

  const activateCard = (selectedCard) => {
    cards.forEach((card) => {
      const isActive = card === selectedCard;
      const trigger = card.querySelector('.myth-card__trigger');
      const content = card.querySelector('.myth-card__content');

      card.classList.toggle(ACTIVE_CLASS, isActive);
      trigger?.setAttribute('aria-expanded', String(isActive));
      content?.setAttribute('aria-hidden', String(!isActive));
    });
  };

  cards.forEach((card, index) => {
    const trigger = card.querySelector('.myth-card__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => activateCard(card));

    trigger.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();

      const lastIndex = cards.length - 1;
      const nextIndex = {
        ArrowRight: index === lastIndex ? 0 : index + 1,
        ArrowDown: index === lastIndex ? 0 : index + 1,
        ArrowLeft: index === 0 ? lastIndex : index - 1,
        ArrowUp: index === 0 ? lastIndex : index - 1,
        Home: 0,
        End: lastIndex
      }[event.key];

      const nextTrigger = cards[nextIndex].querySelector('.myth-card__trigger');
      activateCard(cards[nextIndex]);
      nextTrigger?.focus();
    });
  });
}
