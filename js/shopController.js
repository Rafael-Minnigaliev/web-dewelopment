'use strict'

import eventEmmiter from "./helpers/eventEmmiter.js";
import Cart from "./model/Cart.js";
import Showcase from "./model/Showcase.js";
import PurchasedGood from "./model/PurchasedGood.js";
import CardView from "./view/CardView.js";
import CartBtnView from "./view/CartBtnView.js";
import ValidationEmail from "./view/ValidationEmail.js";


export default {
    _eventEmmiter: eventEmmiter,
    _ShowcaseModel: new Showcase(),
    _CartModel: new Cart(),
    _ValidationEmail: ValidationEmail,

    init() {
        this._eventEmmiter.addListener('added', this._renderCart.bind(this));
        this._eventEmmiter.addListener('removed', this._renderCart.bind(this));
        this._eventEmmiter.addListener('loaded', this._renderCart.bind(this));
        this._eventEmmiter.addListener('loaded', this._renderShowcase.bind(this));

        this._ShowcaseModel.load();

        this._ValidationEmail.validEmail();
    },

    _addToCart(id) {
        const good = new PurchasedGood(this._ShowcaseModel.get(id));
        this._CartModel.add(good);
    },

    _removeFromCart(id) {
        this._CartModel.remove(id);
    },

    _renderCart() {
        const $cartBtnView = document.querySelector('.header__items_right');
        document.querySelector('#cart-btn').remove();
        new CartBtnView(this._CartModel.getCount()).render($cartBtnView, 'beforeend');
    },

    _renderShowcase() {
        const $product = document.querySelector('.product__cards');
        $product.textContent = '';

        this._ShowcaseModel.getAll().forEach(
            good => {
                const card = new CardView(good);
                card.render($product, 'beforeend');
                card.setAddHandler(this._addToCart.bind(this));
            }
        )
    }
}

