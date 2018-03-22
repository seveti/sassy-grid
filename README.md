<h1 align="center">Sassy Grid</h1>
<p align="center">
    A simple <a href="https://smacss.com/">SMACSS</a> style guide with Responsive and CSS Grid mixins written in Sass
</p>

## Quick start
* Clone the repo: `git clone https://github.com/seveti/sassy-grid.git`
* Pull Sassy Grid's `main.scss` and `styles/` into nearly any project.

No matter the application, Sassy Grid will **require a Sass compiler** to set up. [Sassy Grid Starter is also available here](https://github.com/seveti/sassy-grid-starter)

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
│       ├── _arrow.scss
│       └── _play-button.scss
└── layout/
│   ├── _header.scss
│   ├── _body.scss
│   └── _footer.scss
├── module/
│   ├── _section.scss
│   ├── _block.scss
│   ├── _two-column.scss
│   ├── _three-column.scss
│   └── _icon.scss
├── state/
└── theme/
```

## Mixins
### Responsive
```scss
/* Desktop and Widescreen */
@include desktop-up {}

/* Desktop, Tablet, and Mobile */
@include desktop-down {}

/* Tablet, Desktop, and Widescreen */
@include tablet-up {}

/* Tablet and Mobile */
@include tablet-down {}

/* Responsive Only Views */
@include mobile-only {}
@include tablet-only {}
@include desktop-only {}
@include widescreen-only {}
```

### CSS Grid
```scss
/* Set a Grid template */
@include grid($grid-template-columns: auto, $grid-template-rows: auto);

/* Choose a column and row start */
@include grid-start($grid-column-start: 1, $grid-row-start: 1);

/* Align (start, center, end) */
@include align($align-self: start);

/* Justify (start, center, end) */
@include justify($justify-self: start);
```

## Usage
### Module Example
```scss
/* Module */
.module {
    @include desktop-up {
        /* insert styles here */
    }

    @include tablet-only {
        /* insert styles here */
    }
    
    @include mobile-only {
        /* insert styles here */
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