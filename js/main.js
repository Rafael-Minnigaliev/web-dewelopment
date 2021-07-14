

import API from "./API.js"
import Card from "./view/Card.js";
import Cart from "./model/Cart.js";
import GoodsList from "./model/GoodsList.js";
import GoodCart from "./model/GoodCart.js";
import Email from "./view/validationEmail.js";

Email.validEmail();

API.fetch().then((data) => {
    const goodList = new GoodsList(data);

    const $product__cards = document.querySelector('.product__cards');

    const cart = new Cart([]);

    const cards = goodList.get().map(good => new Card(good));


    cards.forEach(card => {
        card.render($product__cards);
        card.setAddHandler(addToCart);
    });

    function addToCart(id) {
        const good = goodList.getById(id);
        cart.add(new GoodCart(good));
        const icon = document.querySelector('#cart-bt');
        icon.insertAdjacentHTML('beforeend', `<span>${cart.getQuantity()}</span>`)
    }
})



