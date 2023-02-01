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

export default createMenu();