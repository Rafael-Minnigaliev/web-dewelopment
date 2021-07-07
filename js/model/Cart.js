'use strict'

import GoodCart from "./GoodCart.js";

export default class Cart {
    constructor(goods) {
        this._data = goods.map(item => new GoodCart(item));
    }

    incrQuantity(quantity) {
        return quantity += 1;
    }

    remove(id) {
        const index = this._data.findIndex(good => good.id === id);
        this._data.splice(index - 1, 1);
    }
}
