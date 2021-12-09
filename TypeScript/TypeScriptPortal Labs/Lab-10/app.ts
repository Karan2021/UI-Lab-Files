enum RestaurantType {'FastFood', 'Cafeteria', 'CoffeeHouse', 'Cafe', 'Bistros'};


interface RestaurantInfo{
    Name: string,
    Address: string,
    Phone: Number,
    Type: string
}

let subwayRest : RestaurantInfo = {
    Name: 'Subway',
    Address: '123/A',
    Phone: 323232,
    Type: RestaurantType[RestaurantType.Cafeteria]
}


let RestaurantDetails = (resturant : RestaurantInfo) =>{

    console.log('Name:'+resturant.Name +'  Address:'+resturant.Address+'  Phone: '+resturant.Phone+' Restaurant Type:'+resturant.Type)
}

RestaurantDetails(subwayRest);

