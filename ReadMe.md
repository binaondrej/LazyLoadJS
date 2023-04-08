# Lazy Load JS library

## Installation

Add imports to `head`
```html
<link rel="stylesheet" href="lazyload.css">
<script src="lazyload.js"></script>
```

You can use it with NPM
  - JS: just uncomment export in on end of `lazyload.js`, then you can import it in some module
  - SCSS: instead of using `css` stylesheet, you can import `scss`


## Usage

Using `lazyload` instance, you can call `add` function, to initialize lazy-loading elements.

- `add` - Add elements to be lazy-loaded
  - `selector` - query selector of lazy-loaded elements
  - `distance` - distance (in px, from bottom of view), where selected element(s) should start loading (when lazy-loaded element has margin, the margin is also the part of element - animation may start earlier than you expect)
  - `direction` - direction from where element(s) appear: bottom/left/right