"use strict";
exports.__esModule = true;
exports.Item = void 0;
var IdGenerator_1 = require("./IdGenerator");
var Item = /** @class */ (function () {
    function Item(_price, _description) {
        this.description = _description;
        this.price = _price;
        this.itemId = IdGenerator_1.IdGenerator.getItemId();
    }
    Item.prototype.getItemId = function () {
        return this.itemId;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    return Item;
}());
exports.Item = Item;
