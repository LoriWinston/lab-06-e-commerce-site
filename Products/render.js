import { addToCart } from '../cart/cart-utils.js';

export function renderAnimal(animal){
    const li = document.createElement('li');
    li.classList.add('wild-animals');

    const h3 = document.createElement('h3');
    h3.classList.add('animal-name');
    h3.textContent = animal.name;   
    li.append(h3);


    const img = document.createElement('img');
    img.classList.add('animal-image');
    img.src = `../assets/${animal.image}`;
    li.append(img);


    const breed = document.createElement('p');
    breed.classList.add('breed');
    breed.textContent = animal.breed;
    li.append(breed);

    const color = document.createElement('p');
    color.classList.add('color');
    color.textContent = animal.color;
    li.append(color);

    const mood = document.createElement('p');
    mood.classList.add('mood');
    mood.textContent = animal.mood;
    li.append(mood);

    const size = document.createElement('p');
    size.classList.add('size');
    size.textContent = animal.size;
    li.append(size);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = animal.price;
    li.append(price);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        addToCart(animal.id);
    });
    button.value = animal.id;
    button.textContent = 'Come home with me!';
    li.append(button);



    return li;

}

