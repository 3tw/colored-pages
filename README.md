# Colored Pages

Colored Pages offers easy and flexible use of color themes on your website with utiliy classes as well as your own custom CSS.

(WIP)

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
```bash
npm install colored-pages
```

Import scss
```scss
@import "~colored-pages/dist/colored-pages";
```

#### GitHub
Clone this repository and include js and scss files to your projects
```bash
dist/app.js
dist/colored-pages.css
```

Make sure to include colored-pages after your custom scss in order to override the default variables.
```scss
@import "path/to/colored-pages";
```

## About
Colored Pages come with six predefined color themes, each containing five different colors.

You can specify which color theme is used on a webpage or let user switch between them and let Colored Pages do the work.

## Usage

### Basic Usage

TL;DR

Define [scss variables](#scss-variables) for color themes and color your webpage with [utility classes](#utility-classes) listed below. If you need something more complex write your own stylesheets with [css variables](#css-variables).

#### I. Add custom data attribute

First of all, to use Colored Pages themes add data attribute *"data-clp-theme"* to the body. The value of this attribute should be *'clp-theme-'* + *'index of the theme'*.

```html
<body data-clp-theme="clp-theme-02"> 
  ...
</body>
```

#### II. Declare color theme(s) variables

Continue by defining a scss map of a color theme. Each color theme has its own default values. You can override them by declaring up to 6 maps with the following keys:

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

**Only color values can change.**

#### III. Declare transition variables (optional)

There are four transitions for you to customise that control the color change on specific CSS properties.

```scss
$clp-transition-clr      // Color
$clp-transition-bg       // Background
$clp-transition-stroke   // Stroke
$clp-transition-fill     // Fill
```

The variables accept the CSS transition property values. The defaults are:

```css
$clp-transition-clr: color 1.5s ease-in;
```

++ Often you will want to disable transitions entirely to avoid flash of default theme. Another way would be disabling transitions for a brief moment with JavaScript by adding and removing a class with a wildcard that disables transitions on page load

```css
.disable-onload-transitions * {
  transition: none !important;
}
```

#### IV. Add utility classes

Each utility class 

```scss
.clp03-clr
```

is made of two parts:

a) first part picks the color according to its key in the map
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

Below you can find an extensive list of [utility classes](#utility-classes) used by this version of Colored Pages.

++ When assigning values to color themes keep in mind that certain combinations of colors might not  work while others do. More often than not you will find yourself using certain keys for dark or bold colors, while reserving others for light shades.

### Advanced Usage

*Existing functionality that needs to be described. Have a look at demo page.*

#### I. Use custom CSS

#### II. Allow users to change themes

## Utility Classes

## Variables

### SCSS Variables

### CSS Variables


## License
[MIT](https://choosealicense.com/licenses/mit/)