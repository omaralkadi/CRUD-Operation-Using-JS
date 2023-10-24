var UserName=document.getElementById("UserName");
var UserEmail=document.getElementById("UserEmail");
var UserComment=document.getElementById("UserComment");
var UserNumber=document.getElementById("UserNumber");
var SaveBtn=document.getElementById("SaveBtn");

let id=localStorage.getItem("editproduct");
users = JSON.parse(localStorage.getItem("users") || "[]");
console.log(users);
let getProduct = users.find((item) => item.id == id);

    UserName.value=getProduct.name;
    UserEmail.value=getProduct.email;
    UserComment.value=getProduct.comment;
    UserNumber.value=getProduct.number;

SaveBtn.addEventListener("click",editDate);

function editDate() {
    getProduct.name=UserName.value;
    getProduct.email=UserEmail.value;
    getProduct.comment=UserComment.value;
    getProduct.number=UserNumber.value;

    console.log(getProduct);
    console.log(users);

    localStorage.setItem("users", JSON.stringify(users));


    window.location="index.html"
  
  }

