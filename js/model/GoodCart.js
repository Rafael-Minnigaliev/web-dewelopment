'use strict'

import idGenerator from "../utlits/idGenerator.js";

export default class GoodCart {
    constructor({ title, price, quantity, img1 }) {
        this.id = idGenerator();
        this.title = title;
        this._price = price;
        this.quantity = quantity;
        this.img = img1;
    }

    getPrice() {
        return this._price;
    }
}