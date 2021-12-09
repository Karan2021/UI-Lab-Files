
function saveData(){
    const fullname = document.getElementById("fullName").value; 
    const id = document.getElementById("id").value; 
    const role = document.getElementById("role").value;
    const doj = document.getElementById("doj").value ? document.getElementById("doj").value : doj = document.getElementById("doj").defaultValue = "2021-10-08";;
       
    let users_records = new Array();
    users_records = JSON.parse( localStorage.getItem("users"))?JSON.parse( localStorage.getItem("users")):[];
        
    if(users_records.some((v) => {return v.Id == id}))
    {
        alert("Duplicate data");
    }
    else
    {
        users_records.push({
            "Name" : fullname,
            "Id" : id,
            "Role" : role,
            "DOJ" : doj
        })
        localStorage.setItem("users", JSON.stringify(users_records));
    }        
}        
    
function showData(){
    let users_records = new Array();
    users_records = JSON.parse( localStorage.getItem("users"))?JSON.parse( localStorage.getItem("users")):[];
           
    let searchid = document.getElementById("search").value;
    if(users_records){
        for(let i=0; i<users_records.length ; i++)
        {
            if(users_records[i].Id == searchid){
                let addDiv = document.createElement('div');
                addDiv.className = "row";
                addDiv.innerHTML = ' <div class="col-3">'+users_records[i].Name+'</div> <div class="col-3">'+users_records[i].Id+'</div><div class="col-3">'+users_records[i].Role+'</div> <div class="col-3">'+users_records[i].DOJ+'</div>';
                document.getElementById("showemp").appendChild(addDiv);
                return;
            }                   
        }
        alert("Invalid Employee id");
    }                
}


