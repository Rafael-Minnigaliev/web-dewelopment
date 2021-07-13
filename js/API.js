'use strict'
import dataHandler from "./dataHandler.js"

export default {
    fetch() {
        return dataHandler.getCatalog();
    }
}