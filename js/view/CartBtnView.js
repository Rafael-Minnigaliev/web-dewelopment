'use strict'

export default class CartBtnView {
    constructor(goodsCount) {
        this._data = goodsCount;
    }

    getHtml() {
        return `<a href="cart.html" id="cart-btn" class="header__link header__link_cart"><img src="img/cart.svg"
        alt="cart"><span class="header__cart-counter">${this._data}</span></a>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHtml());
    }
}