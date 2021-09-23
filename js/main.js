

import API from "./API.js"
import Card from "./view/Card.js";
import GoodsList from "./model/GoodsList.js";

const goodList = new GoodsList(API.fetch());

const $product__cards = document.querySelector('.product__cards');

const cards = goodList.get().map(good => new Card(good));



cards.forEach(card => {
    card.render($product__cards);
});


