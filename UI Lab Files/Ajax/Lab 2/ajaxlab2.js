
// Ajax Lab 2

var btn = document.getElementById('button');

btn.addEventListener('click', function () {
    var ourReq = new XMLHttpRequest();

    ourReq.open(
        "GET",
        "https://reqres.in/api/users?page=2"
    );

    ourReq.onload = function () {
        if (ourReq.status >= 200 && ourReq.status < 400) {
            var ourData = JSON.parse(ourReq.responseText);
            console.log(ourData);
            render(ourData);
        }
    }
    ourReq.send();
});

var view = document.getElementById('view');

function render(ourData) {
   var htmlstring = "";

    var x = "data";
        for (let i in ourData.data) {

            htmlstring += " <div class=\"col-3 card\" style=\"width: 18rem; border: 1px solid black;margin-left: 10px;margin-top: 10px;\">";
            htmlstring += "<img src=\""+ourData[x][i].avatar+"\" class=\"card-img-top fit-image\" alt=\""+ourData[x][i].first_name+"\">"         
            htmlstring += "<ul class=\"list-group list-group-flush\">";
            htmlstring += " <li class=\"list-group-item\"><b>"+ourData[x][i].first_name + " " + ourData[x][i].last_name +"</b></li>"
            htmlstring += " <li class=\"list-group-item\">ID: "+ourData[x][i].id+"</li>"
            htmlstring += " <li class=\"list-group-item\">Email id: "+ourData[x][i].email+"</li>"
            htmlstring += " </ul>    </div>";
            
            console.log(ourData[x][i].first_name + " " + ourData[x][i].last_name + " " + ourData[x][i].id + " " + ourData[x][i].email);

        }

        view.insertAdjacentHTML("beforeend",htmlstring);    
}
