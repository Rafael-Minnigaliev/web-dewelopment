'use strict'

import GoodsList from "./GoodsList.js";
import dataHandler from "../helpers/dataHandler.js";
import PurchasedGood from "./PurchasedGood.js";

export default class Cart extends GoodsList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCart.bind(dataHandler), PurchasedGood);
    }

    getCount() {
        console.log(this._goodList)
        return this._goodList.reduce((acc, good) => acc + good.quantity, 0);
    }

    add(good) {
        const findGood = this._goodList.find(item => item.id == good.id);
        if (findGood) {
            findGood.add();
        } else {
            super.add(good);
        }
        this._eventEmmiter.emit('added', good.id);
    }

    decrease(id) {
        const findGood = this._goodList.find(item => item.id == id);
        if (findGood) {
            if (findGood.quantity > 1) {
                findGood.remove();
            } else {
                super.remove(id);
            }
        }
        this._eventEmmiter.emit('removed', id);
    }
}