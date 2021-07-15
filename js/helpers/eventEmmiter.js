'use strict'

export default {
    _listeners: {},

    addListener(type, callback) {
        if (this._listeners[type]) {
            this._listeners[type].push(callback);
        } else {
            this._listeners[type] = [callback];
        }
    },

    emit(type, ...params) {
        this._listeners[type].forEach(callback => {
            callback(...params);
        });
    }
}