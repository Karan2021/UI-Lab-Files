var title = document.getElementById('headerTitle');
title.style.backgroundColor = "yellow";
title.style.borderBottom = "solid 5px #000";



var items = document.getElementsByClassName('list-group-item');
secondlab(items);
function secondlab(itemslist) {

    for (var i = 0; i < itemslist.length; i++) {
        if (itemslist[i].textContent.includes("Veg")) {
            itemslist[i].style.color = 'green';
        }
        else {
            itemslist[i].style.color = 'red';
        }
    }
}




var totalItem = document.querySelector('.total-item');

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(ev) {
    ev.preventDefault();
    var newItem = document.getElementById('newitem').value;

    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger float-right btn-sm delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    var price = document.createElement('span');
    price.className = 'float-right';
    price.id = 'price-item';
    price.style = 'margin-right: 100px;';
    // if(li.textContent.includes("Veg")){
    //     li.style.color = 'green';
    // }else{
    //     lili.style.color = 'red';
    // }


    price.appendChild(document.createTextNode('180'));

    li.appendChild(price);

    itemList.appendChild(li);
    let itemslist = document.getElementsByClassName('list-group-item');
    secondlab(itemslist);
    totalItem.textContent = parseInt(totalItem.textContent) + 1;

    var totalAmount = document.getElementById('totalAmount');
    totalAmount.textContent = parseInt(totalAmount.textContent) + 180;

}



var newprice;
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            // let itemp = parseInt(e.target.getElementById('price-item'));
            let priceamt = e.target.parentElement;
            
             let amt = parseInt(priceamt.querySelector('span').textContent);
            totalAmount.textContent = parseInt(document.getElementById('totalAmount').textContent) - amt;
            let li = e.target.parentElement;
            itemList.removeChild(li);
            totalItem.textContent -= 1;

        }
    }
}


var oddPosition = document.querySelectorAll('.list-group-item:nth-child(odd)');

for (var i = 0; i < oddPosition.length; i++) {
    oddPosition[i].style.backgroundColor = "lightgray";
}



var itemPrices = document.querySelectorAll('#price-item');

for (i = 0; i < itemPrices.length; i++) {
    if (parseInt(itemPrices[i].textContent) >= 200) {
        itemPrices[i].textContent = parseInt(itemPrices[i].textContent) * 0.9;
    }
}
totalItem.textContent = i;



var tipAmount = document.getElementById('tipAmount');

var add = (function () {
    return function () {
        return parseInt(parseInt(tipAmount.textContent)) + 1;
    }
})();

function addTip() {
    tipAmount.textContent = add();
    totalAmount.textContent = parseInt(totalAmount.textContent) + 1;
}


var sub = (function () {
    return function () {
        return parseInt(parseInt(tipAmount.textContent)) - 1;
    }
})();

function subtractTip() {
    tipAmount.textContent = sub();
    totalAmount.textContent = parseInt(totalAmount.textContent) - 1;
}





var priceItems = document.querySelectorAll('#price-item');
function display(amount) {
    totalAmount.textContent = parseInt(totalAmount.textContent) + amount;
}

function priceCalculation(Items, myCallback) {
    var total = 0;
    for (i = 0; i < Items.length; i++) {
        total += parseInt(Items[i].textContent);
    }
    let tip = document.getElementById('tipAmount');
    total += parseInt(tip.textContent) ; 
    myCallback(total);    
}

priceCalculation(priceItems, display);




let itemslist = document.getElementsByClassName('list-group-item');

function mssgDisplay(msg){
    document.getElementById('warning-mess').innerHTML = msg;
}


var myPromise = new Promise(function(myResolved, myRejected){
    let check = true;
    for(i=0; i<itemslist.length; i++){
        if(!itemslist[i].textContent.includes("Veg")){
            check = false;
            break;
        }
    }

    if(check)
        myResolved("Everything is veg..");
    else
        myRejected("Warning..! Menu contains Non-veg items..");
});

myPromise.then(
    function(value){
        mssgDisplay(value);
    },
    function(error){
        mssgDisplay(error);
    }
);





var rateForm = document.getElementById('ratingForm');

rateForm.addEventListener('submit', rateFunction);

async function rateFunction(e){
    e.preventDefault();

    let rate = document.getElementById('ratingId');

    let myPromise2 = new Promise(function(myResolved, myRejected){
        if(parseInt(rate.value) > 3){
            myResolved("Thank you for rating..! Please Come again");
        } else {
            myRejected("Bad ratings...!");
        }
    });
    console.log(rate.value);
    document.getElementById('rateMessage').textContent = await myPromise2;
}


