
function totalPrice(n1: number, n2: number, showRes:boolean): number {
   if(showRes)
        console.log(n1+n2);
    else
        return n1 + n2;
}
    
let itemPrice = 60;
let charge = 21.5;
let printRes = true;
console.log("Total price of the order is: " + totalPrice(itemPrice, charge, printRes));