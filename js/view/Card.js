'use strict'

export default class Card {
    constructor(good) {
        this._data = good;
    }

    getHTML() {
        return `<div class="product__card">
            <div class="product__image">
                <picture>
                    <source srcset="${this._data.img1}" type="image/webp">
                    <img class="product__img" src="${this._data.img2}" alt="product">
                </picture>
                <div class="product__overlay">
                    <button class="product__button-cart"> <img class="product__cart-img"
                            src="img/product-cart.svg" alt="cart"> Add to
                            Cart
                    </button>
                </div>
            </div>
            <div class="product__info">
                <a href="product.html" class="product__titel">${this._data.title}</a> <br>
                <span class="product__description">${this._data.description}</span> <br>
                <span class="product__price">$${this._data.getPrice()}</span>
            </div>
        </div>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHTML());
    }
}





