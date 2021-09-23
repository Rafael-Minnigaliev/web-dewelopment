'use strict'

import GoodsList from "./GoodsList.js";
import dataHandler from "../helpers/dataHandler.js";
import Good from "./Good.js";

export default class Showcase extends GoodsList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCatalog.bind(dataHandler), Good);
    }
}