import { Item } from "./Item";

export class OrderItem{
    quantity:number;
    item:Item;

    setQuantity(_qty:number){
        this.quantity = _qty;
    }

    getQuantity():number{
        return this.quantity;
    }

    setItem(_item:Item){
        this.item = _item;
    }

    getItem():Item{
        return this.item;
    }

}