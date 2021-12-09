"use strict";
exports.__esModule = true;
exports.OrderItem = void 0;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    OrderItem.prototype.setQuantity = function (_qty) {
        this.quantity = _qty;
    };
    OrderItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    OrderItem.prototype.setItem = function (_item) {
        this.item = _item;
    };
    OrderItem.prototype.getItem = function () {
        return this.item;
    };
    return OrderItem;
}());
exports.OrderItem = OrderItem;
