/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact () {
    const contact = document.createElement('div');
    contact.classList.add('contact-content');

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('contact-title');
    contactTitle.innerHTML = 'CONTACT US';
    contact.appendChild(contactTitle);

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    contact.appendChild(contactWrapper)

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    contactWrapper.appendChild(contactDetails);

    const locationSection = document.createElement('div');
    locationSection.classList.add('details-section');
    contactDetails.appendChild(locationSection);

    const locationTitle = document.createElement('p');
    locationTitle.classList.add('details-title');
    locationTitle.innerHTML = 'Location';
    const detailsUpperAddress = document.createElement('p');
    detailsUpperAddress.classList.add('details-content');
    detailsUpperAddress.innerHTML = 'Warsaw';
    const detailsLowerAddress = document.createElement('p');
    detailsLowerAddress.classList.add('details-content');
    detailsLowerAddress.innerHTML = 'Karolkowa 27';
    locationSection.append(locationTitle, detailsUpperAddress, detailsLowerAddress);

    const detailsBorder = document.createElement('div');
    detailsBorder.classList.add('contact-border');
    contactDetails.appendChild(detailsBorder);

    const reservationSection = document.createElement('div');
    reservationSection.classList.add('details-section');
    contactDetails.appendChild(reservationSection);

    const reservationTitle = document.createElement('p');
    reservationTitle.classList.add('details-title');
    reservationTitle.innerHTML = 'Reservations';
    const reservationContent = document.createElement('p');
    reservationContent.classList.add('details-content');
    reservationContent.innerHTML = '123-345-567';
    reservationSection.append(reservationTitle, reservationContent);

    const reservationsBorder = document.createElement('div');
    reservationsBorder.classList.add('contact-border');
    contactDetails.appendChild(reservationsBorder);

    const hoursSection = document.createElement('p');
    hoursSection.classList.add('details-section');
    contactDetails.appendChild(hoursSection);

    const hoursTitle = document.createElement('p');
    hoursTitle.classList.add('details-title');
    hoursTitle.innerHTML = 'Open hours';
    const hoursContent = document.createElement('p');
    hoursContent.classList.add('details-content');
    hoursContent.innerHTML = '12:00&nbsp;-&nbsp;22:00';
    hoursSection.append(hoursTitle, hoursContent);

    const contactMap = document.createElement('div');
    contactMap.classList.add('contact-map');
    contactWrapper.appendChild(contactMap);

    const mapImage = document.createElement('img');
    mapImage.src = 'images/location.png';
    contactMap.appendChild(mapImage);
    
    return contact
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact());

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    const home = document.createElement('div');
    home.classList.add('home-content');

    const keyPoints = document.createElement('div');
    keyPoints.classList.add('key-points');
    home.appendChild(keyPoints);

    const keyPizza = document.createElement('div');
    keyPizza.classList.add('key-point');
    keyPoints.appendChild(keyPizza);

    const imgPizza = document.createElement('img');
    imgPizza.src = 'images/pizza.png';
    const titlePizza = document.createElement('p')
    titlePizza.classList.add('key-title');
    titlePizza.innerHTML = 'Pizzas';
    const contentPizza = document.createElement('p');
    contentPizza.classList.add('key-content');
    contentPizza.innerHTML = 'Best pizzas on the planet';
    keyPizza.append(imgPizza, titlePizza, contentPizza);

    const keyPasta = document.createElement('div');
    keyPasta.classList.add('key-point');
    keyPoints.appendChild(keyPasta);

    const imgPasta = document.createElement('img');
    imgPasta.src = 'images/spaghetti.png';
    const titlePasta = document.createElement('p')
    titlePasta.classList.add('key-title');
    titlePasta.innerHTML = 'Pastas';
    const contentPasta = document.createElement('p');
    contentPasta.classList.add('key-content');
    contentPasta.innerHTML = 'Best pastas in the universe';
    keyPasta.append(imgPasta, titlePasta, contentPasta);

    const keySea = document.createElement('div');
    keySea.classList.add('key-point');
    keyPoints.appendChild(keySea);

    const imgSea = document.createElement('img');
    imgSea.src = 'images/salmon.png';
    const titleSea = document.createElement('p')
    titleSea.classList.add('key-title');
    titleSea.innerHTML = 'Seafood';
    const contentSea = document.createElement('p');
    contentSea.classList.add('key-content');
    contentSea.innerHTML = 'Best fishes in the country';
    keySea.append(imgSea, titleSea, contentSea);

    const keyDessert = document.createElement('div');
    keyDessert.classList.add('key-point');
    keyPoints.appendChild(keyDessert);

    const imgDessert = document.createElement('img');
    imgDessert.src = 'images/milkshake.png';
    const titleDessert = document.createElement('p')
    titleDessert.classList.add('key-title');
    titleDessert.innerHTML = 'Desserts';
    const contentDessert = document.createElement('p');
    contentDessert.classList.add('key-content');
    contentDessert.innerHTML = 'Best cookies in town';
    keyDessert.append(imgDessert, titleDessert, contentDessert);

    const review = document.createElement('div');
    review.classList.add('review');
    home.appendChild(review);

    const reviewContent = document.createElement('p');
    reviewContent.classList.add('review-content');
    reviewContent.innerHTML = 'My restaurant is best in town!';
    const reviewAuthor = document.createElement('p');
    reviewAuthor.classList.add('review-author');
    reviewAuthor.innerHTML = 'Restaurant owner';
    review.append(reviewContent, reviewAuthor);

    return home
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome());

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-content')

    const border = document.createElement('div');
    border.classList.add('position-border')

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = 'MENU';
    menu.appendChild(menuTitle);

    const menuPizzas = document.createElement('div');
    menuPizzas.classList.add('menu-section-title');
    menuPizzas.innerHTML = 'Pizzas';
    menu.appendChild(menuPizzas);

    const sectionPizzas = document.createElement('div');
    sectionPizzas.classList.add('menu-section');
    menu.appendChild(sectionPizzas);

    const margherita = createPosition('Margherita', 'Tomato sauce, mozzarella, basil', '5$');
    const carbonara = createPosition('Carbonara', 'Cream sauce, mozzarella, ham, mushrooms', '7$');
    const pepperoni = createPosition('Pepperoni', 'Tomato sauce, mozzarella, pepperoni', '8$');
    sectionPizzas.append(margherita, border, carbonara, border.cloneNode(), pepperoni);

    const menuPastas = document.createElement('div');
    menuPastas.classList.add('menu-section-title');
    menuPastas.innerHTML = 'Pastas';
    menu.appendChild(menuPastas);

    const sectionPastas = document.createElement('div');
    sectionPastas.classList.add('menu-section');
    menu.appendChild(sectionPastas);

    const carbonaraPasta = createPosition('Carbonara', 'Spaghetti, pecorino, eggs, pancetta', '11$');
    const alfredo = createPosition('Fettuccine Alfredo', 'Fettuccine, parmesan, butter, garlic', '12$');
    const clams = createPosition('Spaghetti with clams', 'Spaghetti, fresh clams, olive', '15$');
    sectionPastas.append(carbonaraPasta, border.cloneNode(), alfredo, border.cloneNode(),  clams);

    const menuSea = document.createElement('div');
    menuSea.classList.add('menu-section-title');
    menuSea.innerHTML = 'Seafood';
    menu.appendChild(menuSea);

    const sectionSea = document.createElement('div');
    sectionSea.classList.add('menu-section');
    menu.appendChild(sectionSea);

    const mussels = createPosition('Mussels in butter', 'Fresh mussels, butter, garlic', '18$');
    const octopus = createPosition('Grilled octopus', 'Fresh octopus, garlic, lemon', '20$');
    const plate = createPosition('Seafood plate', 'Oysters, crab legs, clams, lobster', '25$');
    sectionSea.append(mussels, border.cloneNode(),  octopus, border.cloneNode(),  plate);

    const menuDesserts = document.createElement('div');
    menuDesserts.classList.add('menu-section-title');
    menuDesserts.innerHTML = 'Desserts';
    menu.appendChild(menuDesserts);

    const sectionDesserts = document.createElement('div');
    sectionDesserts.classList.add('menu-section');
    menu.appendChild(sectionDesserts);

    const tart = createPosition('Lemon tart', 'Tart with buttery, creamy lemon filling', '9$');
    const panna = createPosition('Panna cotta', 'Classic dessert with vanilla and strawberries', '9$');
    const tiramisu = createPosition('Tiramisu', 'Cake with mascarpone flavoured with coffee', '10$');
    sectionDesserts.append(tart, border.cloneNode(),  panna, border.cloneNode(),  tiramisu);

    return menu
}

function createPosition(name, details, price, border) {
    const position = document.createElement('div');
    position.classList.add('menu-position');

    const info = document.createElement('div');
    info.classList.add('menu-info');
    position.appendChild(info);

    const infoTitle = document.createElement('p');
    infoTitle.classList.add('menu-info-title');
    infoTitle.innerHTML = name;
    const infoDetails = document.createElement('p');
    infoDetails.classList.add('menu-info-details');
    infoDetails.innerHTML = details;
    info.append(infoTitle, infoDetails);

    const priceInfo = document.createElement('p');
    priceInfo.classList.add('menu-price');
    priceInfo.innerHTML = price;
    position.appendChild(priceInfo);

    return position
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu());

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




function createHeader() {
    const header = document.createElement('header');
    const content = document.querySelector('.content');

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    header.appendChild(headerLogo);

    const logo = document.createElement('h1');
    logo.innerHTML = 'Mamma mia';
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

    linkHome.addEventListener('click', () => {
        content.innerHTML = '';
        content.append(createHeader(), createHero(), _home_js__WEBPACK_IMPORTED_MODULE_0__["default"], createFooter());
    })

    const headerNavMenu = document.createElement ('li');
    headerNavLinks.appendChild(headerNavMenu);

    const linkMenu = document.createElement('a');
    linkMenu.innerHTML = 'Menu';
    headerNavMenu.appendChild(linkMenu);

    linkMenu.addEventListener('click', () => {
        content.innerHTML = '';
        content.append(createHeader(), createHero(), _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"], createFooter());
    })

    const headerNavContact = document.createElement ('li');
    headerNavLinks.appendChild(headerNavContact);

    const linkContact = document.createElement('a');
    linkContact.innerHTML = 'Contact';
    headerNavContact.appendChild(linkContact);

    linkContact.addEventListener('click', () => {
        content.innerHTML = '';
        content.append(createHeader(), createHero(), _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"], createFooter());
    })

    return header
}

function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero-section');

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

    return hero
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = 'Created by Michał Siwanowicz';

    return footer
}

function loadPage() {
    const content = document.querySelector('.content');

    content.append(createHeader(), createHero(), _home_js__WEBPACK_IMPORTED_MODULE_0__["default"], createFooter());
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUMzRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQy9FM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZRO0FBQ0E7QUFDTTs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRCxnREFBVTtBQUMvRCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsZ0RBQVU7QUFDL0QsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELG1EQUFhO0FBQ2xFLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsZ0RBQVU7QUFDM0Q7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7O1VDbEd6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQyxnREFBUSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QgKCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgICBjb250YWN0VGl0bGUuaW5uZXJIVE1MID0gJ0NPTlRBQ1QgVVMnO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRhY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC13cmFwcGVyJyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0V3JhcHBlcilcblxuICAgIGNvbnN0IGNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERldGFpbHMuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJyk7XG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbHMpO1xuXG4gICAgY29uc3QgbG9jYXRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtc2VjdGlvbicpO1xuICAgIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGxvY2F0aW9uU2VjdGlvbik7XG5cbiAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy10aXRsZScpO1xuICAgIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcbiAgICBjb25zdCBkZXRhaWxzVXBwZXJBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNVcHBlckFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1jb250ZW50Jyk7XG4gICAgZGV0YWlsc1VwcGVyQWRkcmVzcy5pbm5lckhUTUwgPSAnV2Fyc2F3JztcbiAgICBjb25zdCBkZXRhaWxzTG93ZXJBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRldGFpbHNMb3dlckFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1jb250ZW50Jyk7XG4gICAgZGV0YWlsc0xvd2VyQWRkcmVzcy5pbm5lckhUTUwgPSAnS2Fyb2xrb3dhIDI3JztcbiAgICBsb2NhdGlvblNlY3Rpb24uYXBwZW5kKGxvY2F0aW9uVGl0bGUsIGRldGFpbHNVcHBlckFkZHJlc3MsIGRldGFpbHNMb3dlckFkZHJlc3MpO1xuXG4gICAgY29uc3QgZGV0YWlsc0JvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNCb3JkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ib3JkZXInKTtcbiAgICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzQm9yZGVyKTtcblxuICAgIGNvbnN0IHJlc2VydmF0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc2VydmF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLXNlY3Rpb24nKTtcbiAgICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChyZXNlcnZhdGlvblNlY3Rpb24pO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXNlcnZhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtdGl0bGUnKTtcbiAgICByZXNlcnZhdGlvblRpdGxlLmlubmVySFRNTCA9ICdSZXNlcnZhdGlvbnMnO1xuICAgIGNvbnN0IHJlc2VydmF0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXNlcnZhdGlvbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1jb250ZW50Jyk7XG4gICAgcmVzZXJ2YXRpb25Db250ZW50LmlubmVySFRNTCA9ICcxMjMtMzQ1LTU2Nyc7XG4gICAgcmVzZXJ2YXRpb25TZWN0aW9uLmFwcGVuZChyZXNlcnZhdGlvblRpdGxlLCByZXNlcnZhdGlvbkNvbnRlbnQpO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXJ2YXRpb25zQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYm9yZGVyJyk7XG4gICAgY29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zQm9yZGVyKTtcblxuICAgIGNvbnN0IGhvdXJzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1zZWN0aW9uJyk7XG4gICAgY29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoaG91cnNTZWN0aW9uKTtcblxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLXRpdGxlJyk7XG4gICAgaG91cnNUaXRsZS5pbm5lckhUTUwgPSAnT3BlbiBob3Vycyc7XG4gICAgY29uc3QgaG91cnNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRlbnQnKTtcbiAgICBob3Vyc0NvbnRlbnQuaW5uZXJIVE1MID0gJzEyOjAwJm5ic3A7LSZuYnNwOzIyOjAwJztcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kKGhvdXJzVGl0bGUsIGhvdXJzQ29udGVudCk7XG5cbiAgICBjb25zdCBjb250YWN0TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdE1hcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW1hcCcpO1xuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RNYXApO1xuXG4gICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYXBJbWFnZS5zcmMgPSAnaW1hZ2VzL2xvY2F0aW9uLnBuZyc7XG4gICAgY29udGFjdE1hcC5hcHBlbmRDaGlsZChtYXBJbWFnZSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdCgpOyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBrZXlQb2ludHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlQb2ludHMuY2xhc3NMaXN0LmFkZCgna2V5LXBvaW50cycpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoa2V5UG9pbnRzKTtcblxuICAgIGNvbnN0IGtleVBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5UGl6emEuY2xhc3NMaXN0LmFkZCgna2V5LXBvaW50Jyk7XG4gICAga2V5UG9pbnRzLmFwcGVuZENoaWxkKGtleVBpenphKTtcblxuICAgIGNvbnN0IGltZ1BpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nUGl6emEuc3JjID0gJ2ltYWdlcy9waXp6YS5wbmcnO1xuICAgIGNvbnN0IHRpdGxlUGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZVBpenphLmNsYXNzTGlzdC5hZGQoJ2tleS10aXRsZScpO1xuICAgIHRpdGxlUGl6emEuaW5uZXJIVE1MID0gJ1Bpenphcyc7XG4gICAgY29uc3QgY29udGVudFBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnRQaXp6YS5jbGFzc0xpc3QuYWRkKCdrZXktY29udGVudCcpO1xuICAgIGNvbnRlbnRQaXp6YS5pbm5lckhUTUwgPSAnQmVzdCBwaXp6YXMgb24gdGhlIHBsYW5ldCc7XG4gICAga2V5UGl6emEuYXBwZW5kKGltZ1BpenphLCB0aXRsZVBpenphLCBjb250ZW50UGl6emEpO1xuXG4gICAgY29uc3Qga2V5UGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlQYXN0YS5jbGFzc0xpc3QuYWRkKCdrZXktcG9pbnQnKTtcbiAgICBrZXlQb2ludHMuYXBwZW5kQ2hpbGQoa2V5UGFzdGEpO1xuXG4gICAgY29uc3QgaW1nUGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdQYXN0YS5zcmMgPSAnaW1hZ2VzL3NwYWdoZXR0aS5wbmcnO1xuICAgIGNvbnN0IHRpdGxlUGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZVBhc3RhLmNsYXNzTGlzdC5hZGQoJ2tleS10aXRsZScpO1xuICAgIHRpdGxlUGFzdGEuaW5uZXJIVE1MID0gJ1Bhc3Rhcyc7XG4gICAgY29uc3QgY29udGVudFBhc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnRQYXN0YS5jbGFzc0xpc3QuYWRkKCdrZXktY29udGVudCcpO1xuICAgIGNvbnRlbnRQYXN0YS5pbm5lckhUTUwgPSAnQmVzdCBwYXN0YXMgaW4gdGhlIHVuaXZlcnNlJztcbiAgICBrZXlQYXN0YS5hcHBlbmQoaW1nUGFzdGEsIHRpdGxlUGFzdGEsIGNvbnRlbnRQYXN0YSk7XG5cbiAgICBjb25zdCBrZXlTZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlTZWEuY2xhc3NMaXN0LmFkZCgna2V5LXBvaW50Jyk7XG4gICAga2V5UG9pbnRzLmFwcGVuZENoaWxkKGtleVNlYSk7XG5cbiAgICBjb25zdCBpbWdTZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdTZWEuc3JjID0gJ2ltYWdlcy9zYWxtb24ucG5nJztcbiAgICBjb25zdCB0aXRsZVNlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlU2VhLmNsYXNzTGlzdC5hZGQoJ2tleS10aXRsZScpO1xuICAgIHRpdGxlU2VhLmlubmVySFRNTCA9ICdTZWFmb29kJztcbiAgICBjb25zdCBjb250ZW50U2VhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnRTZWEuY2xhc3NMaXN0LmFkZCgna2V5LWNvbnRlbnQnKTtcbiAgICBjb250ZW50U2VhLmlubmVySFRNTCA9ICdCZXN0IGZpc2hlcyBpbiB0aGUgY291bnRyeSc7XG4gICAga2V5U2VhLmFwcGVuZChpbWdTZWEsIHRpdGxlU2VhLCBjb250ZW50U2VhKTtcblxuICAgIGNvbnN0IGtleURlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlEZXNzZXJ0LmNsYXNzTGlzdC5hZGQoJ2tleS1wb2ludCcpO1xuICAgIGtleVBvaW50cy5hcHBlbmRDaGlsZChrZXlEZXNzZXJ0KTtcblxuICAgIGNvbnN0IGltZ0Rlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdEZXNzZXJ0LnNyYyA9ICdpbWFnZXMvbWlsa3NoYWtlLnBuZyc7XG4gICAgY29uc3QgdGl0bGVEZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGVEZXNzZXJ0LmNsYXNzTGlzdC5hZGQoJ2tleS10aXRsZScpO1xuICAgIHRpdGxlRGVzc2VydC5pbm5lckhUTUwgPSAnRGVzc2VydHMnO1xuICAgIGNvbnN0IGNvbnRlbnREZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnREZXNzZXJ0LmNsYXNzTGlzdC5hZGQoJ2tleS1jb250ZW50Jyk7XG4gICAgY29udGVudERlc3NlcnQuaW5uZXJIVE1MID0gJ0Jlc3QgY29va2llcyBpbiB0b3duJztcbiAgICBrZXlEZXNzZXJ0LmFwcGVuZChpbWdEZXNzZXJ0LCB0aXRsZURlc3NlcnQsIGNvbnRlbnREZXNzZXJ0KTtcblxuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHJldmlldyk7XG5cbiAgICBjb25zdCByZXZpZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJldmlld0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgncmV2aWV3LWNvbnRlbnQnKTtcbiAgICByZXZpZXdDb250ZW50LmlubmVySFRNTCA9ICdNeSByZXN0YXVyYW50IGlzIGJlc3QgaW4gdG93biEnO1xuICAgIGNvbnN0IHJldmlld0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXZpZXdBdXRob3IuY2xhc3NMaXN0LmFkZCgncmV2aWV3LWF1dGhvcicpO1xuICAgIHJldmlld0F1dGhvci5pbm5lckhUTUwgPSAnUmVzdGF1cmFudCBvd25lcic7XG4gICAgcmV2aWV3LmFwcGVuZChyZXZpZXdDb250ZW50LCByZXZpZXdBdXRob3IpO1xuXG4gICAgcmV0dXJuIGhvbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZSgpOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50JylcblxuICAgIGNvbnN0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvcmRlci5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbi1ib3JkZXInKVxuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICBtZW51VGl0bGUuaW5uZXJIVE1MID0gJ01FTlUnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIGNvbnN0IG1lbnVQaXp6YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UGl6emFzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbi10aXRsZScpO1xuICAgIG1lbnVQaXp6YXMuaW5uZXJIVE1MID0gJ1Bpenphcyc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51UGl6emFzKTtcblxuICAgIGNvbnN0IHNlY3Rpb25QaXp6YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uUGl6emFzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2VjdGlvblBpenphcyk7XG5cbiAgICBjb25zdCBtYXJnaGVyaXRhID0gY3JlYXRlUG9zaXRpb24oJ01hcmdoZXJpdGEnLCAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBiYXNpbCcsICc1JCcpO1xuICAgIGNvbnN0IGNhcmJvbmFyYSA9IGNyZWF0ZVBvc2l0aW9uKCdDYXJib25hcmEnLCAnQ3JlYW0gc2F1Y2UsIG1venphcmVsbGEsIGhhbSwgbXVzaHJvb21zJywgJzckJyk7XG4gICAgY29uc3QgcGVwcGVyb25pID0gY3JlYXRlUG9zaXRpb24oJ1BlcHBlcm9uaScsICdUb21hdG8gc2F1Y2UsIG1venphcmVsbGEsIHBlcHBlcm9uaScsICc4JCcpO1xuICAgIHNlY3Rpb25QaXp6YXMuYXBwZW5kKG1hcmdoZXJpdGEsIGJvcmRlciwgY2FyYm9uYXJhLCBib3JkZXIuY2xvbmVOb2RlKCksIHBlcHBlcm9uaSk7XG5cbiAgICBjb25zdCBtZW51UGFzdGFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVBhc3Rhcy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24tdGl0bGUnKTtcbiAgICBtZW51UGFzdGFzLmlubmVySFRNTCA9ICdQYXN0YXMnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVBhc3Rhcyk7XG5cbiAgICBjb25zdCBzZWN0aW9uUGFzdGFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvblBhc3Rhcy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlY3Rpb25QYXN0YXMpO1xuXG4gICAgY29uc3QgY2FyYm9uYXJhUGFzdGEgPSBjcmVhdGVQb3NpdGlvbignQ2FyYm9uYXJhJywgJ1NwYWdoZXR0aSwgcGVjb3Jpbm8sIGVnZ3MsIHBhbmNldHRhJywgJzExJCcpO1xuICAgIGNvbnN0IGFsZnJlZG8gPSBjcmVhdGVQb3NpdGlvbignRmV0dHVjY2luZSBBbGZyZWRvJywgJ0ZldHR1Y2NpbmUsIHBhcm1lc2FuLCBidXR0ZXIsIGdhcmxpYycsICcxMiQnKTtcbiAgICBjb25zdCBjbGFtcyA9IGNyZWF0ZVBvc2l0aW9uKCdTcGFnaGV0dGkgd2l0aCBjbGFtcycsICdTcGFnaGV0dGksIGZyZXNoIGNsYW1zLCBvbGl2ZScsICcxNSQnKTtcbiAgICBzZWN0aW9uUGFzdGFzLmFwcGVuZChjYXJib25hcmFQYXN0YSwgYm9yZGVyLmNsb25lTm9kZSgpLCBhbGZyZWRvLCBib3JkZXIuY2xvbmVOb2RlKCksICBjbGFtcyk7XG5cbiAgICBjb25zdCBtZW51U2VhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVNlYS5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24tdGl0bGUnKTtcbiAgICBtZW51U2VhLmlubmVySFRNTCA9ICdTZWFmb29kJztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVTZWEpO1xuXG4gICAgY29uc3Qgc2VjdGlvblNlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb25TZWEuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzZWN0aW9uU2VhKTtcblxuICAgIGNvbnN0IG11c3NlbHMgPSBjcmVhdGVQb3NpdGlvbignTXVzc2VscyBpbiBidXR0ZXInLCAnRnJlc2ggbXVzc2VscywgYnV0dGVyLCBnYXJsaWMnLCAnMTgkJyk7XG4gICAgY29uc3Qgb2N0b3B1cyA9IGNyZWF0ZVBvc2l0aW9uKCdHcmlsbGVkIG9jdG9wdXMnLCAnRnJlc2ggb2N0b3B1cywgZ2FybGljLCBsZW1vbicsICcyMCQnKTtcbiAgICBjb25zdCBwbGF0ZSA9IGNyZWF0ZVBvc2l0aW9uKCdTZWFmb29kIHBsYXRlJywgJ095c3RlcnMsIGNyYWIgbGVncywgY2xhbXMsIGxvYnN0ZXInLCAnMjUkJyk7XG4gICAgc2VjdGlvblNlYS5hcHBlbmQobXVzc2VscywgYm9yZGVyLmNsb25lTm9kZSgpLCAgb2N0b3B1cywgYm9yZGVyLmNsb25lTm9kZSgpLCAgcGxhdGUpO1xuXG4gICAgY29uc3QgbWVudURlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbi10aXRsZScpO1xuICAgIG1lbnVEZXNzZXJ0cy5pbm5lckhUTUwgPSAnRGVzc2VydHMnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudURlc3NlcnRzKTtcblxuICAgIGNvbnN0IHNlY3Rpb25EZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb25EZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlY3Rpb25EZXNzZXJ0cyk7XG5cbiAgICBjb25zdCB0YXJ0ID0gY3JlYXRlUG9zaXRpb24oJ0xlbW9uIHRhcnQnLCAnVGFydCB3aXRoIGJ1dHRlcnksIGNyZWFteSBsZW1vbiBmaWxsaW5nJywgJzkkJyk7XG4gICAgY29uc3QgcGFubmEgPSBjcmVhdGVQb3NpdGlvbignUGFubmEgY290dGEnLCAnQ2xhc3NpYyBkZXNzZXJ0IHdpdGggdmFuaWxsYSBhbmQgc3RyYXdiZXJyaWVzJywgJzkkJyk7XG4gICAgY29uc3QgdGlyYW1pc3UgPSBjcmVhdGVQb3NpdGlvbignVGlyYW1pc3UnLCAnQ2FrZSB3aXRoIG1hc2NhcnBvbmUgZmxhdm91cmVkIHdpdGggY29mZmVlJywgJzEwJCcpO1xuICAgIHNlY3Rpb25EZXNzZXJ0cy5hcHBlbmQodGFydCwgYm9yZGVyLmNsb25lTm9kZSgpLCAgcGFubmEsIGJvcmRlci5jbG9uZU5vZGUoKSwgIHRpcmFtaXN1KTtcblxuICAgIHJldHVybiBtZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uKG5hbWUsIGRldGFpbHMsIHByaWNlLCBib3JkZXIpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtcG9zaXRpb24nKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW5mbycpO1xuICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWluZm8tdGl0bGUnKTtcbiAgICBpbmZvVGl0bGUuaW5uZXJIVE1MID0gbmFtZTtcbiAgICBjb25zdCBpbmZvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdtZW51LWluZm8tZGV0YWlscycpO1xuICAgIGluZm9EZXRhaWxzLmlubmVySFRNTCA9IGRldGFpbHM7XG4gICAgaW5mby5hcHBlbmQoaW5mb1RpdGxlLCBpbmZvRGV0YWlscyk7XG5cbiAgICBjb25zdCBwcmljZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpY2VJbmZvLmNsYXNzTGlzdC5hZGQoJ21lbnUtcHJpY2UnKTtcbiAgICBwcmljZUluZm8uaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgcG9zaXRpb24uYXBwZW5kQ2hpbGQocHJpY2VJbmZvKTtcblxuICAgIHJldHVybiBwb3NpdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51KCk7IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ28uaW5uZXJIVE1MID0gJ01hbW1hIG1pYSc7XG4gICAgaGVhZGVyTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlck5hdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2aWdhdGlvbicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOYXYpO1xuXG4gICAgY29uc3QgaGVhZGVyTmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGhlYWRlck5hdi5hcHBlbmRDaGlsZChoZWFkZXJOYXZMaW5rcyk7XG5cbiAgICBjb25zdCBoZWFkZXJOYXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2xpJyk7XG4gICAgaGVhZGVyTmF2TGlua3MuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2SG9tZSk7XG5cbiAgICBjb25zdCBsaW5rSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rSG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgaGVhZGVyTmF2SG9tZS5hcHBlbmRDaGlsZChsaW5rSG9tZSk7XG5cbiAgICBsaW5rSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNyZWF0ZUhlcm8oKSwgY3JlYXRlSG9tZSwgY3JlYXRlRm9vdGVyKCkpO1xuICAgIH0pXG5cbiAgICBjb25zdCBoZWFkZXJOYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2xpJyk7XG4gICAgaGVhZGVyTmF2TGlua3MuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2TWVudSk7XG5cbiAgICBjb25zdCBsaW5rTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rTWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgaGVhZGVyTmF2TWVudS5hcHBlbmRDaGlsZChsaW5rTWVudSk7XG5cbiAgICBsaW5rTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNyZWF0ZUhlcm8oKSwgY3JlYXRlTWVudSwgY3JlYXRlRm9vdGVyKCkpO1xuICAgIH0pXG5cbiAgICBjb25zdCBoZWFkZXJOYXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2xpJyk7XG4gICAgaGVhZGVyTmF2TGlua3MuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2Q29udGFjdCk7XG5cbiAgICBjb25zdCBsaW5rQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rQ29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gICAgaGVhZGVyTmF2Q29udGFjdC5hcHBlbmRDaGlsZChsaW5rQ29udGFjdCk7XG5cbiAgICBsaW5rQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNyZWF0ZUhlcm8oKSwgY3JlYXRlQ29udGFjdCwgY3JlYXRlRm9vdGVyKCkpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm8oKSB7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVyby1zZWN0aW9uJyk7XG5cbiAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVyby10aXRsZScpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcblxuICAgIGNvbnN0IHVwcGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdXBwZXJUaXRsZS5pbm5lckhUTUwgPSAnTWFtbWEgbWlhISc7XG4gICAgaGVyb1RpdGxlLmFwcGVuZENoaWxkKHVwcGVyVGl0bGUpO1xuXG4gICAgY29uc3QgbG93ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb3dlclRpdGxlLmlubmVySFRNTCA9IFwiSXQncyBkZWxpY2lvdXMhXCI7XG4gICAgaGVyb1RpdGxlLmFwcGVuZENoaWxkKGxvd2VyVGl0bGUpO1xuXG4gICAgY29uc3QgaGVyb1NwYWNpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvU3BhY2luZy5jbGFzc0xpc3QuYWRkKCdoZXJvLXNwYWNpbmcnKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9TcGFjaW5nKTtcblxuICAgIHJldHVybiBoZXJvXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJ0NyZWF0ZWQgYnkgTWljaGHFgiBTaXdhbm93aWN6JztcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVIZWFkZXIoKSwgY3JlYXRlSGVybygpLCBjcmVhdGVIb21lLCBjcmVhdGVGb290ZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vd2Vic2l0ZSc7XG5cbmxvYWRQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==