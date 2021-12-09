import { Company } from "./Company";
import { Customer } from "./Customer";
import { Item } from "./Item";
import { Order } from "./Order";
import { OrderItem } from "./OrderItem";
import { RegCustomer } from "./RegCustomer";

let company = new Company("Eurofins");

let item1 = new Item(12000, "Poco M2 pro");
let item2 = new Item(9000, "Redmi 9");
let item3 = new Item(19000, "Poco X3 ");

let customer1 = new RegCustomer("Rakesh", 10);
let customer1OrderItem = new OrderItem();
customer1OrderItem.setQuantity(2);
customer1OrderItem.item = item1;
let customer1Order = new Order();
customer1Order.setOrderItem(customer1OrderItem);
customer1.setOrders(customer1Order);


let customer2 = new Customer("Sanket");
let customer2OrderItem = new OrderItem();
customer2OrderItem.setQuantity(4);
customer2OrderItem.item = item2;
let customer2Order = new Order();
customer2Order.setOrderItem(customer2OrderItem);
customer2.setOrders(customer2Order);


let customer3 = new Customer("Vybhav");
let customer3OrderItem = new OrderItem();
customer3OrderItem.setQuantity(1);
customer3OrderItem.item = item3;
let customer3Order = new Order();
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
company.customers.map((customer) => {
    if(customer.className == "RegCustomer"){
        console.log(customer.getName() + " = " + customer.getOrders().length);
        console.log("---------------------------------------");
    }
    
});

console.log("*************************************************\n");
console.log("Total number of customers = " + company.customers.length);
console.log("*************************************************\n");

console.log("Total money earned by the company from each order");
company.customers.map((customer) => {
    console.log(customer.getName() +": ");
    customer.orders.map((order) => {
        console.log(order.getOrderId());
        order.orderItems.map((Oitem) => {
            console.log("\t" + (Oitem.getQuantity() * Oitem.item.getPrice()));
        });
        console.log("---------------------------------------");
    });
    
});