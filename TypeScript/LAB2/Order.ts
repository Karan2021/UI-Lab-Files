import { IdGenerator } from "./IdGenerator";
import { OrderItem } from "./OrderItem";

export class Order{
    orderId:number;
    orderItems:OrderItem[] = [];

    constructor(){
        this.orderId=IdGenerator.getOrderId();
    }

    getOrderId():number{
        return this.orderId;
    }

    setOrderItem(_Oitem:OrderItem){
        this.orderItems.push(_Oitem);
    }

    getOrderItems():OrderItem[]{
        return this.orderItems;
    }
}