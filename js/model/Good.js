'use strict'
import idGenerator from "../utlits/idGenerator.js";

export default class Good {
    constructor({ title, description, price, img1, img2 }) {
        this._id = idGenerator();
        this._title = title;
        this._description = description;
        this._price = price;
        this._img1 = img1;
        this._img2 = img2;
    }

    get id() { return this._id; }
    get title() { return this._title; }
    get description() { return this._description; }
    get price() { return this._price; }
    get img1() { return this._img1; }
    get img2() { return this._img2; }

}
