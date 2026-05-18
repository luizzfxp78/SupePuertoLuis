import { $ } from '../utils/dom.js';

export function initMap() {
  const mapElement = $('#map');
  if (!mapElement || !window.L) return;

  const supePuerto = [-10.801, -77.743];
  const map = window.L.map(mapElement).setView(supePuerto, 13);

  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  window.L.marker(supePuerto)
    .addTo(map)
    .bindPopup('Supe Puerto - Perú')
    .openPopup();
}
