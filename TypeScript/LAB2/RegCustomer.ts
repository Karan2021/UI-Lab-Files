import { Customer } from "./Customer";

export class RegCustomer extends Customer{
    
    discount:number;
    constructor(_name:string, _discount:number){
        super(_name);
        this.discount = _discount;
        this.className = "RegCustomer";
    }

    setDiscount(_disc:number){
        this.discount = _disc;
    }

    getDiscount():number{
        return this.discount;
    }
}