

import API from "./API.js"
import Card from "./view/Card.js";
import Cart from "./model/Cart.js";
import GoodsList from "./model/GoodsList.js";
import GoodCart from "./model/GoodCart.js";



function addToCart(id) {
    const good = goodList.getById(id);
    cart.add(new GoodCart(good));
    const icon = document.querySelector('#cart-bt');
    icon.insertAdjacentHTML('beforeend', `<span>${cart.getQuantity()}</span>`)
}


console.log(API.fetch()); //Выводится промис

API.fetch().then((data) => {
    console.log(data);  //выводится то что нужно но если поставить return функция все равно возвращает промис.
})

const goodList = new GoodsList(API.fetch());

const cart = new Cart([]);

const $product__cards = document.querySelector('.product__cards');

const cards = goodList.get().map(good => new Card(good));


cards.forEach(card => {
    card.render($product__cards);
    card.setAddHandler(addToCart);
});


