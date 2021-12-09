var foodItems = ['Sandwich', 'Pizza', 'Pasta', 'Burger'];
// function print(item, index){
//     console.log('${index}. ${item}');
// }
foodItems.forEach(function (item, index, array) {
    console.log(index + 1 + ". " + item);
});
