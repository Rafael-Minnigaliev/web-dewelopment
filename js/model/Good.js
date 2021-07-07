'use strict'

import idGenerator from "../utlits/idGenerator.js";

export default class Good {
    constructor({ title, description, price, img1, img2 }) {
        this.id = idGenerator();
        this.title = title;
        this.description = description;
        this._price = price;
        this.img1 = img1;
        this.img2 = img2;
    }

    getPrice() {
        return this._price;
    }
}
