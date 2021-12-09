
$("#ads").append("<div><img src='./assets/ad1.jpg' alt='ad1'/></div>");
$("#ads").append("<div><img src='./assets/ad2.jpg' alt='ad1'/></div>");

var cont=document.getElementById("cardata");

// var i=0;
// var req=new XMLHttpRequest();
// var brands;
//     req.open("GET","./car.json");

//     req.onload=function(){
//         if(req.status >=200 && req.status<400){
//            var alldata=JSON.parse(req.responseText);
//            console.log(alldata);
         
//            while(i<alldata.length){
//                //console.log(alldata[i]);
//                render(alldata[i]);
//                i++;
//            }      
//            console.log('brands');
//         }
//     }
//     req.send();
    
    function render(data){
        var htmlstring="";
        htmlstring+='<div id="'+data.name.replace(/\s/g, "")+'"class="card mb-3 car '+data.brand+'" style="max-width: 540px;border:0px;" >'+
  '<div class="row no-gutters"> <div class="col-md-4">'+
      '<img src="'+data.image+'" class="card-img" alt="...">    </div>'+

    '<div class="col-md-8"><div class="card-body">'+
        '<h5 class="card-title">'+data.name+'</h5>'+
        '<p class="card-text">Model:'+data.model+'</p>'+
        '<p class="card-text">Rs.'+data.price+'/-</p><p class="card-text">Have used for '+data.usageinfo+'</p>'+
      '</div>    </div>  </div></div>'
        //htmlstring+='<div class="row"><img class="col-3" src="'+data.image+'"><div class="col=3"> <p>'+data.name+'</p>'+data.model+'</div></div>';
        cont.insertAdjacentHTML("beforeend",htmlstring);
    
    }




console.log($(document));
$(document).ready(function(){
    $.getJSON( "car.json", function( data ) {
        console.log(data);
        $.each(data,function(key,value){
            render(value);
        })
      });
      //slide();
});

function slide(){
var slider = document.getElementById("slideinput");
var output = document.getElementById("slidevalue");
output.innerHTML = slider.value;
$(".car").hide();

var inp=slider.value;
$.getJSON( "car.json", function( data ) {
    $.each(data,function(key,value){
        console.log(value.price);
        if(parseInt(value.price)<parseInt(inp)){
            console.log("true");
            //render(value);
            $("#"+value.name.replace(/\s/g, "")).show();
        }
     })
  });  
}


function brandsclick(){
    $(".car").hide();
    //console.log($("input[name='brands']:checked").val());
    $("input[name='brands']:checked").each(function(){
       console.log(this);
       $("."+this.value).show();
    });
 
}

function fuelclick(){
    $(".car").hide();
    //console.log($("input[name='brands']:checked").val());
    var inp=$("input[name='fuel']:checked").val();
    console.log(inp);
    $.getJSON( "car.json", function( data ) {
        //console.log(data);
        $.each(data,function(key,value){
            //console.log(value);
            if(value.fueltype.toLowerCase()==inp){
             //render(value);
             console.log(value.name.replace(/\s/g, ""));
             $("#"+value.name.replace(/\s/g, "")).show();
            }
         })
      });  
}