"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var IdGenerator_1 = require("./IdGenerator");
var Customer = /** @class */ (function () {
    function Customer(_name) {
        this.orders = [];
        this.custName = _name;
        this.customerId = IdGenerator_1.IdGenerator.getCustomerId();
        this.className = "Customer";
    }
    Customer.prototype.getCustomerId = function () {
        return this.customerId;
    };
    Customer.prototype.setCustomerName = function (_name) {
        this.custName = _name;
    };
    Customer.prototype.getName = function () {
        return this.custName;
    };
    Customer.prototype.setOrders = function (_order) {
        this.orders.push(_order);
    };
    Customer.prototype.getOrders = function () {
        return this.orders;
    };
    return Customer;
}());
exports.Customer = Customer;
