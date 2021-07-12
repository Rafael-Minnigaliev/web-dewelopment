'use strict'

import GoodsList from "./GoodsList.js";

export default class Cart extends GoodsList {
    constructor(goodData) {
        super(goodData);
    }

    getPrice() {
        return this.goods.reduce((acc, good) => acc + good.price, 0)
    }

    add(newGood) {
        const oldGood = this.goods.find(good => good.id === newGood.id);
        if (oldGood) {
            oldGood.add()
        } else {
            this.goods.push(newGood);
        }
    }
}