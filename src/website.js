import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

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
        content.append(createHeader(), createHero(), createHome, createFooter());
    })

    const headerNavMenu = document.createElement ('li');
    headerNavLinks.appendChild(headerNavMenu);

    const linkMenu = document.createElement('a');
    linkMenu.innerHTML = 'Menu';
    headerNavMenu.appendChild(linkMenu);

    linkMenu.addEventListener('click', () => {
        content.innerHTML = '';
        content.append(createHeader(), createHero(), createMenu, createFooter());
    })

    const headerNavContact = document.createElement ('li');
    headerNavLinks.appendChild(headerNavContact);

    const linkContact = document.createElement('a');
    linkContact.innerHTML = 'Contact';
    headerNavContact.appendChild(linkContact);

    linkContact.addEventListener('click', () => {
        content.innerHTML = '';
        content.append(createHeader(), createHero(), createContact, createFooter());
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

    content.append(createHeader(), createHero(), createHome, createFooter());
};

export default loadPage();