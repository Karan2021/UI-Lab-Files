"use strict";
exports.__esModule = true;
var Company_1 = require("./Company");
var Customer_1 = require("./Customer");
var Item_1 = require("./Item");
var Order_1 = require("./Order");
var OrderItem_1 = require("./OrderItem");
var RegCustomer_1 = require("./RegCustomer");
var company = new Company_1.Company("Eurofins");
var item1 = new Item_1.Item(12000, "Poco M2 pro");
var item2 = new Item_1.Item(9000, "Redmi 9");
var item3 = new Item_1.Item(19000, "Poco X3 ");
var customer1 = new RegCustomer_1.RegCustomer("Rakesh", 10);
var customer1OrderItem = new OrderItem_1.OrderItem();
customer1OrderItem.setQuantity(2);
customer1OrderItem.item = item1;
var customer1Order = new Order_1.Order();
customer1Order.setOrderItem(customer1OrderItem);
customer1.setOrders(customer1Order);
var customer2 = new Customer_1.Customer("Sanket");
var customer2OrderItem = new OrderItem_1.OrderItem();
customer2OrderItem.setQuantity(4);
customer2OrderItem.item = item2;
var customer2Order = new Order_1.Order();
customer2Order.setOrderItem(customer2OrderItem);
customer2.setOrders(customer2Order);
var customer3 = new Customer_1.Customer("Vybhav");
var customer3OrderItem = new OrderItem_1.OrderItem();
customer3OrderItem.setQuantity(1);
customer3OrderItem.item = item3;
var customer3Order = new Order_1.Order();
customer3Order.setOrderItem(customer3OrderItem);
customer3.setOrders(customer3Order);
company.setCustomer(customer1);
company.setCustomer(customer2);
company.setCustomer(customer3);
company.setItem(item1);
company.setItem(item2);
company.setItem(item3);
console.log("*************************************************\n");
console.log("Total number of orders of each Registered customer");
company.customers.map(function (customer) {
    if (customer.className == "RegCustomer") {
        console.log(customer.getName() + " = " + customer.getOrders().length);
        console.log("---------------------------------------");
    }
});
console.log("*************************************************\n");
console.log("Total number of customers = " + company.customers.length);
console.log("*************************************************\n");
console.log("Total money earned by the company from each order");
company.customers.map(function (customer) {
    console.log(customer.getName() + ": ");
    customer.orders.map(function (order) {
        console.log(order.getOrderId());
        order.orderItems.map(function (Oitem) {
            console.log("\t" + (Oitem.getQuantity() * Oitem.item.getPrice()));
        });
        console.log("---------------------------------------");
    });
});
