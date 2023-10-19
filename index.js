import { data } from './data/data.js';

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment('');
let like = {};

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})

const loadData = data => {
    data.forEach(personaje => {
        const { id, name, image } = personaje;

        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
   
    items.appendChild(fragment);
}

items.addEventListener("click", e => {

    addlike (e);
})

const addlike = e => {
    console.log(e);
    items.appendChild(fragment);

}

items.addEventListener("click", e => {
    addlike (e);
})



