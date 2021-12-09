function totalPrice(n1, n2, showRes, mssg) {
    if (showRes)
        console.log(mssg + (n1 + n2));
    else
        return n1 + n2;
}
var itemPrice = 60;
var charge = 21.5;
var printRes = true;
var mssg = "Chocolate shake price: ";
totalPrice(itemPrice, charge, printRes, mssg);
