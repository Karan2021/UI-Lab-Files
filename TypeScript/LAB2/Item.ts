import { IdGenerator } from "./IdGenerator";

export class Item{
    itemId:number;
    price:number;
    description:string;

    constructor(_price:number, _description:string){
        this.description = _description;
        this.price = _price;
        this.itemId = IdGenerator.getItemId();
    }

    getItemId():number{
        return this.itemId;
    }

    getPrice():number{
        return this.price;
    }

    getDescription():string{
        return this.description;
    }
}