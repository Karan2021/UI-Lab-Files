var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["FastFood"] = 0] = "FastFood";
    RestaurantType[RestaurantType["Cafeteria"] = 1] = "Cafeteria";
    RestaurantType[RestaurantType["CoffeeHouse"] = 2] = "CoffeeHouse";
    RestaurantType[RestaurantType["Cafe"] = 3] = "Cafe";
    RestaurantType[RestaurantType["Bistros"] = 4] = "Bistros";
})(RestaurantType || (RestaurantType = {}));
;
var subwayRest = {
    Name: 'Subway',
    Address: '123/A',
    Phone: 323232,
    Type: RestaurantType[RestaurantType.Cafeteria]
};
var RestaurantDetails = function (resturant) {
    console.log('Name:' + resturant.Name + '  Address:' + resturant.Address + '  Phone: ' + resturant.Phone + ' Restaurant Type:' + resturant.Type);
};
RestaurantDetails(subwayRest);
