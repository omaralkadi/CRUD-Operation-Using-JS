var UserName=document.getElementById("UserName");
var UserEmail=document.getElementById("UserEmail");
var UserComment=document.getElementById("UserComment");
var UserNumber=document.getElementById("UserNumber");
var SaveBtn=document.getElementById("myform");


var UsersData=JSON.parse(localStorage.getItem("users") || "[]");
ShowData();
SaveBtn.addEventListener("submit",function(){
    if(UsersData.length<=0){
        idD=0;
    }else{
        idD=UsersData.length;
    }

    var users=
    {
        id:idD,
        name:UserName.value,
        email:UserEmail.value,
        comment:UserComment.value,
        number:UserNumber.value,
    }

    UsersData.push(users);
  

    localStorage.setItem("users",JSON.stringify(UsersData))
    ShowData();

        UserName.value="";
        UserEmail.value="";
        UserComment.value="";
        UserNumber.value="";

});

function ShowData() {
    var tableBody="";
    users = JSON.parse(localStorage.getItem("users") || "[]");
    for(var i=0;i<users.length;i++)
    {
    tableBody+=`<tr>  
    <td>${users[i].name}</td>
    <td>${users[i].email}</td>
    <td>${users[i].comment}</td>
    <td>${users[i].number}</td>
    <td><button class="btn btn-warning" onclick="UpdateData(${users[i].id})" >Update</button></td>
    <td><button class="btn btn-danger" onclick="DeleteData(${users[i].id})">Delete</button></td>
    </tr>`
    }
    document.querySelector(".tableBody").innerHTML=tableBody;    
};

function UpdateData(id) {

   localStorage.setItem("editproduct",id);
   window.location="update.html";

}


function DeleteData(id)
{
   Swal.fire({
   title: 'Are you sure?',
   text: "You won't be able to revert this!",
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Yes, delete it!'
   }).then((result) => {

    users = JSON.parse(localStorage.getItem("users") || "[]");
    let filteredData=users.filter(item=>item.id!=id);
    console.log(filteredData);
    localStorage.setItem("users",JSON.stringify(filteredData));
    ShowData();

   if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your Data has been deleted.',
      'success'
    )
  }
})

}
