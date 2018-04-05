<h1 align="center">Sassy Grid</h1>
<p align="center">
    A sassy style guide to help you build CSS Grid layouts. IE10+ browser support.
</p>

## Quick start
* Clone the repo: `git clone https://github.com/seveti/sassy-grid.git`
* Or: `npm install sassy-grid` `sassy-grid`
* Pull Sassy Grid's `main.scss` and `styles/` into nearly any project.

No matter the application, Sassy Grid will **require a Sass compiler** to set up. [Sassy Grid Starter is also available here ->](https://github.com/seveti/sassy-grid-starter)

Fork and Star &#9733;!

## What's included
```
styles/
├── base/
│   ├── _reset.scss
│   ├── _responsive.scss
│   ├── _grid.scss
│   ├── _base.scss
│   ├── _helper.scss
│   └── element/
│       ├── _typography.scss
│       ├── _link.scss
│       ├── _button.scss
└── layout/
│   ├── _header.scss
│   ├── _body.scss
│   └── _footer.scss
├── module/
├── state/
└── theme/
```

## Mixins
### Responsive
```scss
/* Desktop and Widescreen views */
@include desktop-up {};

/* Desktop, Tablet, and Mobile views */
@include desktop-down {};

/* Tablet, Desktop, and Widescreen views */
@include tablet-up {};

/* Tablet and Mobile views */
@include tablet-down {}

/* Responsive only views */
@include mobile-only {}
@include tablet-only {}
@include desktop-only {}
@include widescreen-only {}
```

### CSS Grid
```scss
/* Set grid template */
@include grid($grid-template-columns: auto, $grid-template-rows: auto);

/* Define column and row start */
@include grid-start($grid-column-start: 1, $grid-row-start: 1);

/* Align (start, center, end) */
@include align($align-self: start);

/* Justify (start, center, end) */
@include justify($justify-self: start);
```

## Usage
### Module BEM Example
```scss
/* Module */
.module {
    @include desktop-up {
        // insert desktop up styles here
    }

    @include tablet-down {
        // insert tablet down styles here
    }
}


/* Modifiers */

// Modified class
.module--modified {
    @include mobile-only {
        // insert mobile only styles here
    }
}
```

## Browser support
* Chrome 57+
* Firefox 52+
* Opera 44+
* Safari 10.1+
* Microsoft Edge 16+
* Internet Explorer 10+ (<a href="https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/">CSS Grid IE10+ Implementation</a>)

## Explore
[A New View of the Moon](https://www.youtube.com/watch?v=XCrJ3NflOpE)