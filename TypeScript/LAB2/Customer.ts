import { IdGenerator } from "./IdGenerator";
import { Order } from "./Order";

export class Customer {
    customerId: number;
    custName: string;
    className: string;
    orders: Order[] = [];

    constructor(_name: string) {
        this.custName = _name;
        this.customerId = IdGenerator.getCustomerId();
        this.className = "Customer";
    }

    getCustomerId(): number {
        return this.customerId;
    }

    setCustomerName(_name: string) {
        this.custName = _name;
    }

    getName(): string {
        return this.custName;
    }

    setOrders(_order: Order) {
        this.orders.push(_order);
    }

    getOrders(): Order[] {
        return this.orders;
    }

}