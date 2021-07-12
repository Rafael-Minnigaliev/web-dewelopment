'use strict'

export default class Card {
    constructor(good) {
        this._data = good;
        this._addHandlerCb = null;
    }

    getHTML() {
        return `<div class="product__card" id="card-${this._data.id}">
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
                <span class="product__price">$${this._data.price}</span>
            </div>
        </div>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHTML());
        if (this._addHandler) {
            const addBtn = $container.querySelector(`#card-${this._data.id} .product__button-cart`);
            addBtn.addEventListener('click', this._addHandler.bind(this));
        }
    }


    _addHandler() {
        this._addHandlerCb(this._data.id);
    }

    setAddHandler(callback) {
        this._addHandlerCb = callback;
    }
}





