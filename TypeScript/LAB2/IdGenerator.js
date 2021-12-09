"use strict";
exports.__esModule = true;
exports.IdGenerator = void 0;
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
    }
    IdGenerator.getItemId = function () {
        var num = this.itemId;
        this.itemId++;
        return num;
    };
    IdGenerator.getCustomerId = function () {
        var num = this.customerId;
        this.customerId++;
        return num;
    };
    IdGenerator.getOrderId = function () {
        var num = this.orderId;
        this.orderId++;
        return num;
    };
    IdGenerator.itemId = 1;
    IdGenerator.customerId = 1;
    IdGenerator.orderId = 1;
    return IdGenerator;
}());
exports.IdGenerator = IdGenerator;
