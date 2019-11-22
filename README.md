<h1 align="center">Sassy Grid</h1>
<p align="center">
    ​ A SMACCS base style guide with Responsive CSS Grid mixins you can add to any project. IE10+ browser support.
</p>

## Quick start
* Install globally: `npm install -g sassy-grid`
* Run in a new or existing project: `sassy-grid`
* Configure **/styles** with your Sass compiler using **main.scss** as an entry point.

No matter the application, Sassy Grid will **require a Sass compiler** to set up. [Sassy Grid Starter is also available here ->](https://github.com/seveti/sassy-grid-starter)

Fork and Star &#9733;!

## What's included
```
styles/
├── base/
│   ├── _base.scss
│   ├── _helper.scss
│   ├── _reset.scss
│   ├── element/
│   │   ├── _typography.scss
│   │   ├── _link.scss
│   │   └── _button.scss
│   └── mixins/
│       ├── _grid.scss
│       └── _responsive.scss
└── layout/
│   ├── _body.scss
│   ├── _footer.scss
│   └── _header.scss
├── module/
├── state/
└── theme/
```

## Mixins
### Responsive
```scss
/* Desktop, Tablet, and Mobile views */
@include desktop-down {};

/* Desktop and Widescreen views */
@include desktop-up {};

/* Tablet and Mobile views */
@include tablet-down {}

/* Tablet, Desktop, and Widescreen views */
@include tablet-up {};

/* Only views */
@include mobile-only {}
@include tablet-only {}
@include desktop-only {}
@include widescreen-only {}
```

#### Usage Example
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
```

### Grid
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

#### Usage Example
```scss
/* Module */
.module {
    @include desktop-up {
        @include grid(1fr, 50px 250px 50px);

        .module__header {
            @include grid-start(1, 1);
            @include align(start);
            @include justify(end);
        }

        .module__body {
            @include grid-start(1, 2);
            @include align(center);
            @include justify(center);
        }

        .module__footer {
            @include grid-start(1, 3);
            @include align(end);
            @include justify(end);
        }
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