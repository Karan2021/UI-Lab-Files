import { Customer } from "./Customer";
import { Item } from "./Item";
import { Order } from "./Order";

export class Company{
    Cname:string;
    customers:Customer[] =[];
    items:Item[] = [];

    constructor(_name:string){
        this.Cname = _name;
    }

    getName():string{
        return this.Cname;
    }

    setCustomer(_customer:Customer){
        this.customers.push(_customer);
    }

    getCustomers():Customer[]{
        return this.customers;
    }

    setItem(_item:Item){
        this.items.push(_item);
    }

    getItems():Item[]{
        return this.items;
    }



    getCustomerById(id:number):Customer {
        // this.customers.map((customer) => {
        //     if(customer.getCustomerId() == id)
        //         return customer;           
        // });

        for(let i=0; i<this.customers.length; i++){
            if(this.customers[i].getCustomerId() == id)
                return this.customers[i];
            else
                console.log("Customer is not there with id = " + id);                    
        }
    }

    getTotalWorthOfOrderPlaced():number{
        let total : number = 0;
        this.customers.map((customer) => {
            customer.orders.map((order) => {
                order.orderItems.map((Oitem) => {
                    total += (Oitem.quantity* Oitem.item.getPrice());
                });
            });
        });
        
        return total;
    }

}