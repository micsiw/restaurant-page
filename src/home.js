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

export default createHome();