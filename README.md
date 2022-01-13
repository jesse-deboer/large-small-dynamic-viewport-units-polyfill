# Large, small, and dynamic viewport units polyfill

![npm](https://img.shields.io/npm/v/large-small-dynamic-viewport-units-polyfill)

This is a "polyfill" which adds support for svh, dvh and lvh viewport units. It's mainly useful when dealing with iOS and Android mobile devices.

⚠️ **This library is pre-release quality. It should work but it requires more comprehensive testing on different devices. Please test it out and report any bugs you might encounter.**

## How it works

It adds CSS custom properties (variables) `--1svh`, `--1dvh` and `--1lvh` using JavaScript. These correspond to 1 svh, 1 dvh and 1 lvh unit respectively. These custom properties are automatically updated when the viewport size changes. You can use CSS `calc()` function to multiply them to your desired size.

## How to use

### 1. Import script

Include script tag or import the script using a bundler.

#### 1.A. Script tag

```html
<script src="https://unpkg.com/large-small-dynamic-viewport-units-polyfill@0.0.4/dist/large-small-dynamic-viewport-units-polyfill.min.js"></script>
```

#### 1.B. Bundler

Install the package.

```shell
npm install large-small-dynamic-viewport-units-polyfill
```

Import the package.

```js
import 'large-small-dynamic-viewport-units-polyfill';
```

### 2. Write CSS

Add CSS like this in your project:

```css
.my-small-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1svh, 1vh) * 100); /* This is the "polyfill" */
    height: 100svh; /* This is for future browsers that support svh, dvh and lvh viewport units */
}

.my-dynamic-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1dvh, 1vh) * 100); /* This is the "polyfill" */
    height: 100dvh; /* This is for future browsers that support svh, dvh and lvh viewport units */
}

.my-large-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1lvh, 1vh) * 100); /* This is the "polyfill" */
    height: 100lvh; /* This is for future browsers that support svh, dvh and lvh viewport units */
}
```

ℹ️ **lvh unit is only included for the sake of completeness. It currently behaves exactly like vh unit. This may break in a future version of iOS or Android.**

## Compatibility

I've tested this library with the following operating systems and devices: 

* Mobile Safari, iOS 15, iPhone 12 Pro
* Mobile Safari, iOS 15, iPad Pro 11" 2018
* Google Chrome 97, iPadOS 15, iPhone 12 Pro
* Google Chrome 97, iPadOS 15, iPad Pro 11" 2018
* Google Chrome 97, Android 8.1, Nexus 5X

## Todo

* Add some automated tests
* Figure out how to run automated tests on mobile devices (preferably on the cheap)
* Add some feature detection to run the code only on devices without native support

## Further reading

* [The Large, Small, and Dynamic Viewports – Bram.us](https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/)
* [The trick to viewport units on mobile – CSS-Tricks](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
* [New Viewport Units Introduced to Values and Units L4 – CSS WG Blog](https://www.w3.org/blog/CSS/2021/07/15/css-values-4-viewport-units/)
