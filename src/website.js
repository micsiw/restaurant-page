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

export default loadPage();