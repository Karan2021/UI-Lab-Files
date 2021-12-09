function totalPrice(n1: number, n2: number, showRes:boolean, mssg:string): void {
    if(showRes)
         console.log(mssg + (n1+n2) +" including Rs "+n2+" as delivery charge");
     
 }
 
 let itemPrice = 60;
 let charge = 21.5;
 let printRes = true;
 let mssg:string="Chocolate shake price is Rs "
 totalPrice(itemPrice, charge, printRes, mssg);