export const SELECTORS = {
  header: '#siteHeader',
  hamburger: '.hamburger',
  navLinks: '.nav-links',
  navAnchor: '.nav-links a',
  timelineButton: '.timeline-btn',
  filterButton: '.filter-btn',
  placesGrid: '#places-grid',
  galleryStage: '.gallery-stage',
  mainBoxes: '.mainBoxes'
};

const IMAGE_BASE = 'assets/images';

export const DEFAULT_PLACE_IMAGE = `${IMAGE_BASE}/turismo/playa.jpg`;

export const historyData = {
  caral: {
    title: 'Los Orígenes de Áspero',
    desc: 'Supe Puerto es reconocido como la puerta de entrada a Áspero, importante ciudad pesquera vinculada a la Civilización Caral, considerada una de las culturas más antiguas de América con más de 5000 años de historia. Desde este puerto ancestral se desarrollaron actividades de pesca, intercambio comercial y organización social que contribuyeron al crecimiento de una civilización avanzada en agricultura, astronomía y arquitectura monumental en la costa central del Perú.',
    img: `${IMAGE_BASE}/historia/aspero.jpg`,
    chapter: 1
  },
  japones: {
    title: 'La Herencia Japonesa',
    desc: 'A inicios del siglo XX, inmigrantes japoneses llegaron a Supe Puerto, trayendo nuevas técnicas de pesca, cultivos y costumbres que se fusionaron con la tradición local. La comunidad nikkei impulsó la industria pesquera y comercial, dejando una huella imborrable en la gastronomía y las festividades del puerto.',
    img: `${IMAGE_BASE}/historia/japoneses.jpg`,
    chapter: 2
  },
  fundacion: {
    title: 'Fundación de Supe Puerto',
    desc: 'El 5 de diciembre de 1906, mediante la Ley N.° 410, se creó oficialmente el distrito de Supe Puerto, en Barranca. Este hecho fortaleció su organización administrativa e identidad costera, ligada a la pesca, el comercio y la actividad portuaria.',
    img: `${IMAGE_BASE}/historia/fundacion.jpg`,
    chapter: 3
  },
  turismo: {
    title: 'Despertar Turístico',
    desc: 'En 1994, Supe Puerto comenzó a ser promocionado como destino turístico gracias a sus playas, el malecón y la cercanía al complejo arqueológico de Áspero. Se construyeron nuevos accesos, restaurantes y espacios recreativos, atrayendo visitantes nacionales e internacionales.',
    img: `${IMAGE_BASE}/historia/turismo.jpg`,
    chapter: 4
  },
  hoy: {
    title: 'Supe Puerto Actual',
    desc: 'Hoy, Supe Puerto combina modernidad y tradición. Su puerto pesquero sigue activo, sus playas son concurridas, y sus festividades como la Semana Santa y las ferias gastronómicas muestran un pueblo orgulloso de su herencia cultural. El turismo sostenible y la conservación de Áspero son ejes de su desarrollo futuro.',
    img: `${IMAGE_BASE}/historia/actualidad.jpg`,
    chapter: 5
  }
};

export const placesData = [
  { name: 'Áspero', category: 'arqueologicos', desc: 'Ciudad pesquera ancestral del período Arcaico Tardío con más de 5000 años de antigüedad. Vinculada a la Civilización Caral, sus pirámides y plazas circulares asombran al visitante.', img: `${IMAGE_BASE}/turismo/aspero.jpg`, tags: ['Patrimonio ancestral', 'Ruinas milenarias'] },
  { name: 'Museo Comunitario Áspero', category: 'arqueologicos', desc: 'Espacio cultural gestionado por la comunidad local que exhibe cerámica, herramientas de piedra y restos óseos recuperados en las excavaciones arqueológicas.', img: `${IMAGE_BASE}/turismo/museo.jpg`, tags: ['Mañana', 'Entrada libre'] },
  { name: 'La Isla', category: 'playas', desc: 'Playa de aguas cristalinas y arena dorada, ideal para el baño y el surf. Su forma de península la protege de las corrientes fuertes.', img: `${IMAGE_BASE}/turismo/playa.jpg`, tags: ['Todo el día', 'Surf y baño seguro'] },
  { name: 'Playa del Amor', category: 'playas', desc: 'Pequeña cala escondida, rodeada de acantilados. Muy concurrida por parejas y fotógrafos por su paisaje romántico.', img: `${IMAGE_BASE}/turismo/playa_amor.jpg`, tags: ['Romántico', 'Atardecer'] },
  { name: 'Playa de Áspero', category: 'playas', desc: 'Ubicada junto al complejo arqueológico, combina historia y mar. Sus aguas tranquilas son ideales para nadar.', img: `${IMAGE_BASE}/turismo/playa_aspero.jpg`, tags: ['Historia y mar', 'Aguas calmadas'] },
  { name: 'El Faro', category: 'playas', desc: 'Playa ubicada en Supe Puerto, Barranca, Perú. Es un punto costero ideal para caminar, tomar fotografías del paisaje marino y disfrutar el atardecer frente al Pacífico.', img: `${IMAGE_BASE}/turismo/playa.jpg`, tags: ['Playa local', 'Atardecer'] },
  { name: 'El Muelle', category: 'playas', desc: 'Zona de pescadores artesanales. Se puede observar la llegada de botes y comprar pescado fresco directamente.', img: `${IMAGE_BASE}/turismo/muelle.jpg`, tags: ['Pesca artesanal', 'Mañana'] },
  { name: 'Plaza de la Bandera', category: 'paseos', desc: 'Corazón cívico de Supe Puerto. Rodeada de jardines y palmeras, es punto de encuentro para actividades patrióticas.', img: `${IMAGE_BASE}/turismo/plaza_bandera.jpg`, tags: ['Cívico', 'Fotos'] },
  { name: 'Barco Guardacostas', category: 'paseos', desc: 'Antigua embarcación de la Marina de Guerra del Perú, convertida en atractivo turístico. Ideal para tomar fotos.', img: `${IMAGE_BASE}/turismo/guardacostas.jpg`, tags: ['Historia naval', 'Todo el día'] },
  { name: 'Malecón Turístico', category: 'paseos', desc: 'Extenso paseo marítimo con vista al océano. Bancas, áreas verdes y puestos de comida criolla.', img: `${IMAGE_BASE}/turismo/malecon.jpg`, tags: ['Atardecer', 'Caminata'] },
  { name: 'Mirador de Puerto', category: 'paseos', desc: 'Mirador elevado que ofrece una vista panorámica de toda la bahía. Imperdible para los amantes de la fotografía.', img: `${IMAGE_BASE}/turismo/mirador.jpg`, tags: ['Vistas 360°', 'Atardecer'] },
  { name: 'Parque Miguel Grau', category: 'paseos', desc: 'Parque infantil y zona de descanso, dedicado al héroe nacional. Muy concurrido los fines de semana.', img: `${IMAGE_BASE}/turismo/plaza_bandera.jpg`, tags: ['Familiar', 'Área verde'] },
  { name: 'Totoral de los Patos', category: 'naturaleza', desc: 'Humedal protegido donde habitan patos silvestres y otras aves migratorias. Ideal para avistamiento de fauna.', img: `${IMAGE_BASE}/turismo/totoral.jpg`, tags: ['Aves', 'Senderismo'] },
  { name: 'Cerro San José', category: 'naturaleza', desc: 'Elevación natural con senderos señalizados. En la cima se obtiene una vista espectacular de todo el valle.', img: `${IMAGE_BASE}/turismo/cerro_san_jose.jpg`, tags: ['Excursión', 'Vistas'] },
  { name: 'El Reloj del Gallo', category: 'residencias', desc: 'Antigua casona con una torre de reloj rematada por una veleta en forma de gallo. Símbolo arquitectónico del puerto.', img: `${IMAGE_BASE}/turismo/reloj.jpg`, tags: ['Arquitectura', 'Fotos'] },
  { name: 'Casa de José María Arguedas', category: 'residencias', desc: 'Vivienda donde vivió el célebre escritor peruano. Conserva mobiliario y objetos personales de la época.', img: `${IMAGE_BASE}/turismo/jose_maria_arguedas.jpg`, tags: ['Literatura', 'Visita cultural'] },
  { name: 'Quinta Luis Banchero Rossi', category: 'residencias', desc: 'Residencia del empresario pesquero, hoy convertida en centro cultural. Destaca su arquitectura republicana.', img: `${IMAGE_BASE}/turismo/luis_banchero_rosi.jpg`, tags: ['Historia empresarial', 'Eventos'] }
];

export const galleryImages = Array.from({ length: 12 }, (_, index) => `${IMAGE_BASE}/gallery/g${index + 1}.jpg`);
