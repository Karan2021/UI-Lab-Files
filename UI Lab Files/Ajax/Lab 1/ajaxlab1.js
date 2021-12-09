
var counter = 1;

var container = document.getElementById('todo');
var btn = document.getElementById('button');

btn.addEventListener('click', function () {
    var ourReq = new XMLHttpRequest();

    ourReq.open(
        "GET",
        "https://jsonplaceholder.typicode.com/todos/"+counter
    );

    ourReq.onload = function () {
        if (ourReq.status >= 200 && ourReq.status < 400) {
          var ourData = JSON.parse(ourReq.responseText);
            console.log(ourData);
            render(ourData);
        }     
    }

    ourReq.send();

    counter++;

    if(counter > 5)
        btn.style.display = "none";
});

function render(data){
    var htmlstring = "";
    
    if(data.completed == true)
    {        
        htmlstring += "<p style=\"color:green\">" + data.title + "</p>"
    }else{
        htmlstring += "<p style=\"color:red\">" + data.title + "</p>"
    }
    container.insertAdjacentHTML("beforeend",htmlstring);    
    
}