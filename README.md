# Colored Pages

Colored Pages offer easy and flexible use of color themes on your website with utiliy classes as well as your own custom CSS.

They come with six predefined color themes, each containing five different colors.
You can specify which color theme is used on a webpage or let user switch between them and let Colored Pages do the work.

## Table of Contents
* [Demo](#demo)  
* [Installation](#installation)  
* [Usage](#usage)  
* [Variables](#variables)  
* [Utility Classes](#utility-classes)
* [License](#license)  

## Demo

How does it look? Check out [Colored Pages](https://3tw.github.io/colored-pages/) demo.

## Installation

#### NPM
Install package via npm

```bash
npm install colored-pages
```

Import 

SCSS

```scss
@import "~colored-pages/dist/colored-pages"
```

copy and include JS

```html
<script src="/path/to/colored-pages.min.js"></script>
```

#### GitHub
Clone [this repository](https://github.com/3tw/colored-pages).

Import

SCSS

```scss
@import "path/to/colored-pages"
```

and include JS

```html
<script src="/path/to/colored-pages.min.js"></script>
```

> Make sure to include colored-pages after your custom SCSS in order to override the default variables.

## Usage

### Basic Usage

TL;DR

Define [SCSS variables](#scss-variables) for color themes and color your webpage with [utility classes](#utility-classes) listed below. If you need something more complex write your own stylesheets with [CSS variables](#css-variables).

#### I. Add custom data attribute

First of all, to use Colored Pages themes add data attribute *"data-clp-theme"* to the body. The value of this attribute should be *'clp-theme-'* + *'index of the theme'*.

```html
<body data-clp-theme="clp-theme-02"> 
  ...
</body>
```

#### II. Declare color theme(s) variables

Continue by defining a SCSS map(s) of a color theme(s) you want to use. Each color theme has its own default values. You can override them by declaring up to 6 maps with the following keys in your custom SCSS file:

```scss
$clp-theme-01: (
  clp01: #c6493a,
  clp02: #edf5e1,
  clp03: #5cdb95,
  clp04: #907163,
  clp05: #111111,
);
```

Map variables **must be** defined as
*$clp-theme-01*, *$clp-theme-02*, ... *$clp-theme-06*. 
The keys (*clp01*, *clp02*, ... *clp05*) must remain the same too. 

> Only color values can change.

#### III. Declare transition variables (optional)

There are four transitions for you to customise that control the color change on specific CSS properties.

```scss
$clp-transition-clr      // Color
$clp-transition-bg       // Background
$clp-transition-stroke   // Stroke
$clp-transition-fill     // Fill
```

The variables accept the CSS transition property values. The default value is:

```css
color 1.5s ease-in;
```

> Often you will want to disable transitions entirely to avoid flash of default theme. Another way would be disabling transitions for a brief moment with JavaScript by adding and removing a class with a wildcard that disables transitions on page load

```css
.disable-onload-transitions * {
  transition: none !important;
}
```

#### IV. Add utility classes

You are ready to use colored-pages in your html!

Each utility class 

```scss
.clp03-clr
.clp01-bg 
.clp02-stroke
...
```

is made of two parts:

a) first part tells us which color from the theme is used

```scss
.clp03...
```

b) while the second part determines which CSS property will be affected

```scss
...-clr      // Color
...-bg       // Background
...-stroke   // Stroke
...-fill     // Fill
```

For example, to specify color of the text with the first color value and background of the element with the third, you would write down

```html
<p class="clp01-clr clp03-bg"> 
  Colored Pages made me this way. 
</p>
```

> When assigning values to color themes keep in mind that certain combinations of colors might not  work while others do. More often than not you will find yourself using certain keys for dark or bold colors, while reserving others for light shades.

### Advanced Usage

#### I. Use custom CSS/SCSS

Whenever utility classes can't be used (for example, WYSIWYG fields), you can apply you custom styles by using Colored Pages [CSS variables](#css-variables).

```scss
.my-container {
  background-color: var(--clp01);
  .container-content {
    color: var(--clp03);
    border-color: var(--clp03);
    .icon {
      color: var(--clp05);
    }
  }
}
```

#### II. Allow users to change themes

Colored Pages come with theme indexes/switches that allow the user to navigate between color themes. 
Each theme has a dedicated data attribute. Add it to the element to initialize it as an indicator. That is it! (And don't forget to include JS file that makes all of this possible.)

```html
<span data-clp-select="clp-theme-01">Try this theme</span>
<span data-clp-select="clp-theme-02">or this one</span>
<span data-clp-select="clp-theme-03">or the third</span>
<span data-clp-select="clp-theme-04">and fourth</span>
<span data-clp-select="clp-theme-05">perhaps number 5?</span>
```

Optionally, you can add *clp-index* class to get Colored Pages styled index (used in the Demo)

```html
<span data-clp-select="clp-theme-05" class="clp-index"></span>
```

> Selected color theme is saved in local storage.

## Utility Classes

| Class | Description |
| --- | --- |
| .clp01-clr | color property value set to first color of the current theme |
| .clp01-bg | background-color property value set to first color of the current theme |
| .clp01-stroke | stroke property value set to first color of the current theme |
| .clp01-fill | fill property value set to first color of the current theme |

> Of course you can chose second, third, fourth and fifth color of the current theme by using *clp02-...*, *clp03-...*, *clp04-...* and *clp05-...* respectively.

## Variables

### CSS Variables

Colored pages use only 5 CSS variables. They are the backbone of Colored Pages.

| Variable | Description |
| --- | --- |
| var(--clp01) | First color in the theme |
| var(--clp02) | Second color in the theme |
| var(--clp03) | Third color in the theme |
| var(--clp04) | Fourth color in the theme |
| var(--clp05) | Fifth color in the theme |

### SCSS Variables

Extensive list of default SCSS variables.

```scss
$clp-theme-01: (
  clp01: #c6493a,
  clp02: #edf5e1,
  clp03: #5cdb95,
  clp04: #907163,
  clp05: #111111,
) !default;

$clp-theme-02: (
  clp01: #081c15,
  clp02: #2d6a4f,
  clp03: #29c376,
  clp04: #b7e4c7,
  clp05: #d8f3dc,
) !default;

$clp-theme-03: (
  clp01: #522e38,
  clp02: #b9375e,
  clp03: #f3628e,
  clp04: #da7392,
  clp05: #ffe0e9,
) !default;

$clp-theme-04: (
  clp01: #05668d,
  clp02: #028090,
  clp03: #00a896,
  clp04: #02c39a,
  clp05: #f0f3bd,
) !default;

$clp-theme-05: (
  clp01: #220901,
  clp02: #621708,
  clp03: #941b0c,
  clp04: #bc3908,
  clp05: #f6aa1c,
) !default;

$clp-theme-06: (
  clp01: #ffffff,
  clp02: #e9ecef,
  clp03: #848687,
  clp04: #495057,
  clp05: #212529,
) !default;

$clp-transition-clr: color 2s ease-in !default;
$clp-transition-bg: background-color 2s ease-in !default;
$clp-transition-stroke: stroke 2s ease-in !default;
$clp-transition-fill: fill 2s ease-in !default;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)