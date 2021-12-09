//6. [Function Closure] Use closure property to increase or decrease the amount of Tip.


var tipAmount = document.getElementById('tipAmount');

var add = (function () {
    return function () {
        return parseInt(parseInt(tipAmount.textContent))+1;
    }
})();
  
function addTip(){
    tipAmount.innerHTML = add();
    
}

var subtract = (function () {
   
    return function () {
        //counter -= 1;
        return parseInt(parseInt(tipAmount.textContent))-1;
    }
})();
  
function subtractTip(){
    tipAmount.innerHTML = subtract();
}

