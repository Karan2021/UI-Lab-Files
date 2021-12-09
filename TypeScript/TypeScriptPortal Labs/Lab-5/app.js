function totalPrice(n1, n2, showRes) {
    if (showRes)
        console.log(n1 + n2);
    else
        return n1 + n2;
}
var itemPrice = 60;
var charge = 21.5;
var printRes = true;
console.log("Total price of the order is: " + totalPrice(itemPrice, charge, printRes));
