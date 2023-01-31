/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector('.content');

function createHeader(logoText) {
    const header = document.createElement('header');
    content.appendChild(header);

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    header.appendChild(headerLogo);

    const logo = document.createElement('h1');
    logo.innerHTML = logoText;
    headerLogo.appendChild(logo);

    const headerNav = document.createElement('div');
    headerNav.classList.add('header-navigation');
    header.appendChild(headerNav);

    const headerNavLinks = document.createElement('ul');
    headerNav.appendChild(headerNavLinks);

    const headerNavHome = document.createElement ('li');
    headerNavLinks.appendChild(headerNavHome);

    const linkHome = document.createElement('a');
    linkHome.innerHTML = 'Home';
    headerNavHome.appendChild(linkHome);

    const headerNavMenu = document.createElement ('li');
    headerNavLinks.appendChild(headerNavMenu);

    const linkMenu = document.createElement('a');
    linkMenu.innerHTML = 'Menu';
    headerNavMenu.appendChild(linkMenu);

    const headerNavContact = document.createElement ('li');
    headerNavLinks.appendChild(headerNavContact);

    const linkContact = document.createElement('a');
    linkContact.innerHTML = 'Contact';
    headerNavContact.appendChild(linkContact);
}

function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero-section');
    content.appendChild(hero);

    const heroTitle = document.createElement('div');
    heroTitle.classList.add('hero-title');
    hero.appendChild(heroTitle);

    const upperTitle = document.createElement('p');
    upperTitle.innerHTML = 'Mamma mia!';
    heroTitle.appendChild(upperTitle);

    const lowerTitle = document.createElement('p');
    lowerTitle.innerHTML = "It's delicious!";
    heroTitle.appendChild(lowerTitle);

    const heroSpacing = document.createElement('div');
    heroSpacing.classList.add('hero-spacing');
    hero.appendChild(heroSpacing);
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = 'Created by Michał Siwanowicz';
    content.appendChild(footer);
}

function loadPage() {
    createHeader('Mamma mia');
    createHero();
    createFooter();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


_website__WEBPACK_IMPORTED_MODULE_0__["default"];
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7OztVQzdFekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pQzs7QUFFakMsZ0RBQVEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGxvZ29UZXh0KSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvLmlubmVySFRNTCA9IGxvZ29UZXh0O1xuICAgIGhlYWRlckxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hdmlnYXRpb24nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTtcblxuICAgIGNvbnN0IGhlYWRlck5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2TGlua3MpO1xuXG4gICAgY29uc3QgaGVhZGVyTmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdsaScpO1xuICAgIGhlYWRlck5hdkxpbmtzLmFwcGVuZENoaWxkKGhlYWRlck5hdkhvbWUpO1xuXG4gICAgY29uc3QgbGlua0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua0hvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGhlYWRlck5hdkhvbWUuYXBwZW5kQ2hpbGQobGlua0hvbWUpO1xuXG4gICAgY29uc3QgaGVhZGVyTmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdsaScpO1xuICAgIGhlYWRlck5hdkxpbmtzLmFwcGVuZENoaWxkKGhlYWRlck5hdk1lbnUpO1xuXG4gICAgY29uc3QgbGlua01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua01lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGhlYWRlck5hdk1lbnUuYXBwZW5kQ2hpbGQobGlua01lbnUpO1xuXG4gICAgY29uc3QgaGVhZGVyTmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdsaScpO1xuICAgIGhlYWRlck5hdkxpbmtzLmFwcGVuZENoaWxkKGhlYWRlck5hdkNvbnRhY3QpO1xuXG4gICAgY29uc3QgbGlua0NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua0NvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuICAgIGhlYWRlck5hdkNvbnRhY3QuYXBwZW5kQ2hpbGQobGlua0NvbnRhY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZXJvKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8tc2VjdGlvbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG5cbiAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVyby10aXRsZScpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcblxuICAgIGNvbnN0IHVwcGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdXBwZXJUaXRsZS5pbm5lckhUTUwgPSAnTWFtbWEgbWlhISc7XG4gICAgaGVyb1RpdGxlLmFwcGVuZENoaWxkKHVwcGVyVGl0bGUpO1xuXG4gICAgY29uc3QgbG93ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb3dlclRpdGxlLmlubmVySFRNTCA9IFwiSXQncyBkZWxpY2lvdXMhXCI7XG4gICAgaGVyb1RpdGxlLmFwcGVuZENoaWxkKGxvd2VyVGl0bGUpO1xuXG4gICAgY29uc3QgaGVyb1NwYWNpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvU3BhY2luZy5jbGFzc0xpc3QuYWRkKCdoZXJvLXNwYWNpbmcnKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9TcGFjaW5nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnQ3JlYXRlZCBieSBNaWNoYcWCIFNpd2Fub3dpY3onO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY3JlYXRlSGVhZGVyKCdNYW1tYSBtaWEnKTtcbiAgICBjcmVhdGVIZXJvKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi93ZWJzaXRlJztcblxubG9hZFBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9