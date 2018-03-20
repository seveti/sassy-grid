<h1 align="center">Sassy Grid</h1>
<p align="center">
    A simple <a href="https://smacss.com/">SMACSS</a> style guide with <a href="https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/">CSS Grid IE10+ Implementation</a> written in <a href="https://sass-lang.com/">Sass</a>
</p>

## Quick start
* Clone the repo: `git clone https://github.com/seveti/sassy-grid.git`
* Pull Sassy Grid's `main.scss` and `styles/` folder into nearly any project with some of the most popular package managers. No matter the package manager, Sassy Grid will **require a Sass compiler** for setup.

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
│   ├── _block.scss
│   └── _footer.scss
├── module/
│   ├── element/
│   │   ├── _typography.scss
│   │   ├── _link.scss
│   │   └── _button.scss
│   └── component/
│       └── _custom.scss
└── theme/
    └── _custom.scss
```

## Usage
### CSS Grid Mixins
```
// Grid Template
@include grid($grid-template-columns, $grid-template-rows);

// Grid Start
@include grid-start($grid-column-start, $grid-row-start);

// Grid Align (start, center, end)
@include align($align-self);

// Grid Justify (start, center, end)
@include align($align-self);
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