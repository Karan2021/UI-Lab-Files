//Interfaces

//enum declaration
enum RestaurantType {'FastFood', 'Cafeteria', 'CoffeeHouse', 'Cafe', 'Bistros'};

//Restaurant Interface declaration
interface RestaurantInfo{
    Name: string,
    Address: string,
    Phone: Number,
    Type: string
}

//Declaring Restaurant
//we should have a contract
let restaurant1: RestaurantInfo ={
    Name: 'Subway',
    Address: '123/A',
    Phone: 323232,
    Type: RestaurantType[RestaurantType.Cafeteria]
}

let restaurant2: RestaurantInfo ={
    Name: 'Subway 2',
    Address: '243/C',
    Phone: 323232,
    Type: RestaurantType[RestaurantType.Cafe]
}



let RestaurantDetails = (resturant : RestaurantInfo) =>{

    console.log('Name:'+resturant.Name +'  Address:'+resturant.Address+'  Phone: '+resturant.Phone+' Restaurant Type:'+resturant.Type)
}

RestaurantDetails(restaurant1);

//====================================================================
//Create a list of restaurants
let restaurants = [];

//Push restaurant1 in the list
restaurants.push(restaurant1);
restaurants.push(restaurant2);



//Function declaration to get the list of restaurants
let GetRestaurantList = () =>{
    return restaurants;
}

//Function call
console.log( GetRestaurantList());