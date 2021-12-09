
function totalPrice(n1: number, n2: number, showRes:boolean, mssg:string): number {
    if(showRes)
         console.log(mssg + (n1+n2));
     else
         return n1 + n2;
 }
 
 let itemPrice = 60;
 let charge = 21.5;
 let printRes = true;
 let mssg:string="Chocolate shake price: "
 totalPrice(itemPrice, charge, printRes, mssg);