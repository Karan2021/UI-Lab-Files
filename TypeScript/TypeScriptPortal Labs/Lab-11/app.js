//Interfaces
//enum declaration
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["FastFood"] = 0] = "FastFood";
    RestaurantType[RestaurantType["Cafeteria"] = 1] = "Cafeteria";
    RestaurantType[RestaurantType["CoffeeHouse"] = 2] = "CoffeeHouse";
    RestaurantType[RestaurantType["Cafe"] = 3] = "Cafe";
    RestaurantType[RestaurantType["Bistros"] = 4] = "Bistros";
})(RestaurantType || (RestaurantType = {}));
;
//Declaring Restaurant
//we should have a contract
var restaurant1 = {
    Name: 'Subway',
    Address: '123/A',
    Phone: 323232,
    Type: RestaurantType[RestaurantType.Cafeteria]
};
var restaurant2 = {
    Name: 'Subway 2',
    Address: '243/C',
    Phone: 323232,
    Type: RestaurantType[RestaurantType.Cafe]
};
var RestaurantDetails = function (resturant) {
    console.log('Name:' + resturant.Name + '  Address:' + resturant.Address + '  Phone: ' + resturant.Phone + ' Restaurant Type:' + resturant.Type);
};
RestaurantDetails(restaurant1);
//====================================================================
//Create a list of restaurants
var restaurants = [];
//Push restaurant1 in the list
restaurants.push(restaurant1);
restaurants.push(restaurant2);
//Function declaration to get the list of restaurants
var GetRestaurantList = function () {
    return restaurants;
};
//Function call
console.log(GetRestaurantList());
