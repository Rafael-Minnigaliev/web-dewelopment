'use strict'

import Good from "./Good.js";

export default class GoodsList {
    constructor(goods) {
        this.goods = goods.map(item => new Good(item));
    }

    get() {
        return this.goods;
    }

    totalPrice() {
        let sum = 0;
        let quantity = 1;
        for (let good of this.goods) {
            sum += good.getPrice() * quantity;
        }
        return sum;
    }

    add(good) {
        this.goods.push(good);
    }

    remove(id) {
        const index = this.goods.findIndex(good => good.id === id);
        this.goods.splice(index - 1, 1);
    }
}
