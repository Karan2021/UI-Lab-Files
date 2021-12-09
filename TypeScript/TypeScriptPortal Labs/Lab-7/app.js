function totalPrice(n1, n2, showRes, mssg) {
    if (showRes)
        console.log(mssg + (n1 + n2) + " including Rs " + n2 + " as delivery charge");
}
var itemPrice = 60;
var charge = 21.5;
var printRes = true;
var mssg = "Chocolate shake price is Rs ";
totalPrice(itemPrice, charge, printRes, mssg);
