import { $, $$ } from '../utils/dom.js';
import { DEFAULT_PLACE_IMAGE, SELECTORS, placesData } from '../utils/constants.js';

function createPlaceCard(place, index = 0) {
  const card = document.createElement('article');
  card.className = 'news-card';
  card.dataset.category = place.category;
  card.style.animationDelay = `${Math.min(index * 0.06, 0.42)}s`;

  const image = document.createElement('img');
  image.className = 'news-card__image';
  image.src = place.img;
  image.alt = place.name;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('error', () => {
    image.src = DEFAULT_PLACE_IMAGE;
  }, { once: true });

  const textWrapper = document.createElement('div');
  textWrapper.className = 'news-card__text-wrapper';

  const heading = document.createElement('h3');
  heading.className = 'news-card__title';
  heading.textContent = place.name;

  const meta = document.createElement('div');
  meta.className = 'news-card__post-date';
  meta.textContent = place.tags.join(' · ');

  const details = document.createElement('div');
  details.className = 'news-card__details-wrapper';

  const excerpt = document.createElement('p');
  excerpt.className = 'news-card__excerpt';
  excerpt.textContent = place.desc;

  details.append(excerpt);
  textWrapper.append(heading, meta, details);
  card.append(image, textWrapper);

  return card;
}

function renderPlaces(filter = 'todos') {
  const grid = $(SELECTORS.placesGrid);
  if (!grid) return;

  const filteredPlaces = filter === 'todos'
    ? placesData
    : placesData.filter((place) => place.category === filter);

  grid.replaceChildren();

  if (!filteredPlaces.length) {
    const message = document.createElement('p');
    message.className = 'no-results';
    message.textContent = 'No hay lugares en esta categoría.';
    grid.appendChild(message);
    return;
  }

  const fragment = document.createDocumentFragment();
  filteredPlaces.forEach((place, index) => fragment.appendChild(createPlaceCard(place, index)));
  grid.appendChild(fragment);
}

export function initTourismFilters() {
  const buttons = $$(SELECTORS.filterButton);
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      renderPlaces(button.dataset.filter || 'todos');
    });
  });

  renderPlaces('todos');
}
