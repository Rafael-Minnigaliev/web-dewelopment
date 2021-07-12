'use strict'

import Good from "./Good.js";

export default class GoodCart extends Good {
    constructor({ title, description, _price, id, img1, img2 }, quantity = 1) {
        super({ title, description, price: _price, img1, img2 });
        this.quantity = quantity;
        this.id = id;
    }

    get price() {
        return this._price * this.quantity;
    }

    add() {
        this.quantity++;
    }
}