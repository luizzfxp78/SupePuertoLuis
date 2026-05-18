# Supe Puerto - Proyecto estructurado

Proyecto web reorganizado para ser más mantenible y escalable.

## Estructura principal

```txt
supe-puerto-estructurado/
├── index.html
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── gastronomia/
│   │   ├── historia/
│   │   ├── turismo/
│   │   ├── festividad/
│   │   ├── leyenda/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── backgrounds/
│   ├── fonts/
│   └── videos/
├── css/
│   ├── main.css
│   ├── base/
│   ├── layout/
│   ├── components/
│   ├── pages/
│   └── utilities/
└── js/
    ├── main.js
    ├── modules/
    └── utils/
```

## Cómo editar

- Cambia colores, sombras y variables globales en `css/base/variables.css`.
- Edita estilos generales de secciones en `css/layout/sections.css`.
- Edita el diseño del inicio en `css/pages/home.css`.
- Edita el menú en `js/modules/menu.js`.
- Edita el slider principal en `js/modules/slider.js`.
- Edita los datos dinámicos de historia, turismo y galería en `js/utils/constants.js`.

## Nota

Las rutas de imágenes fueron actualizadas de `img/...` a `assets/images/...`.
El slider principal usa:

```txt
assets/images/hero/hero1.jpg
assets/images/hero/hero2.jpg
assets/images/hero/hero3.jpg
```
