<h1 align="center">Sassy Grid</h1>
<p align="center">
    A simple <a href="https://smacss.com/">SMACSS</a> style guide with <a href="https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/">CSS Grid IE10+ Implementation</a> written in <a href="https://sass-lang.com/">Sass</a>
</p>

## Quick start
* Clone the repo: `git clone https://github.com/seveti/sassy-grid.git`
* Pull Sassy Grid's `main.scss` and `styles/` into nearly any project with some of the most popular package managers. No matter the package manager, Sassy Grid will **require a Sass compiler** for setup.

## What's included
Within the download you'll find the following directories and files. You'll see something like this:
```
styles/
├── base/
│   ├── _reset.scss
│   ├── _responsive.scss
│   └── _grid.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   └── _helper.scss
└── layout/
│   ├── _site.scss
│   ├── _header.scss
│   ├── _body.scss
│   ├── _section.scss
│   └── _footer.scss
├── module/
│   ├── element/
│   │   ├── _typography.scss
│   │   ├── _link.scss
│   │   └── _button.scss
│   └── component/
│       └── _block.scss
├── state/
│   └── _custom.scss
└── theme/
    └── _custom.scss
```

## Usage
### Responsive Mixins
```scss
/* Tablet, Desktop, and Widescreen */
@include tablet-up {}

/* Tablet and Mobile */
@include tablet-down {}

/* Desktop and Widescreen */
@include desktop-up {}

/* Desktop, Tablet, and Mobile */
@include desktop-down {}

/* Responsive Only Views */
@include mobile-only {}
@include tablet-only {}
@include desktop-only {}
@include widescreen-only {}
```

### CSS Grid Mixins
```scss
/* Grid */
@include grid($grid-template-columns: auto, $grid-template-rows: auto);

/* Grid start */
@include grid-start($grid-column-start: 1, $grid-row-start: 1);

/* Align (start, center, end) */
@include align($align-self: start);

/* Justify (start, center, end) */
@include justify($justify-self: start);
```

### Markup Example
```html
<div class="section section--modifier-class">
    <div class="block block--modifier-class">
        <h1 class="block__title">Lorem ipsum</h1>
        <p class="block__content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</div>
```

## Browser support
* Chrome 57+
* Firefox 52+
* Opera 44+
* Safari 10.1+
* Microsoft Edge 16+
* Internet Explorer 10+ (-ms- prefix built in)

## Explore
[A New View of the Moon](https://www.youtube.com/watch?v=XCrJ3NflOpE)