var PriceCalculator;
(function (PriceCalculator) {
    function OrderPrice(orderAmount, discount) {
        return orderAmount - discount;
    }
    PriceCalculator.OrderPrice = OrderPrice;
})(PriceCalculator || (PriceCalculator = {}));
