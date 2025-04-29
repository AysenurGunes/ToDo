//Obje oluşturma

// const programmer =
// {
// name:"Ayşenur Güneş Gökçe",
// age:30,
// email:"gunesaysenur94@gmail.com",
// langs:["C#","javascript"],

// adress:{
//     city:"Ankara",
//     street:"Yenimahalle"
// },
// work:function(){
//     console.log("test programcı")
// }

// }

// value=programmer;
// value=programmer.email;
// programmer.work();
// console.log(value);

//Zaman Objesi
// let value;

// const now=new Date();
// const date1=new Date("05-05-1994 22:10")

// value =date1;

// value=date1.getMonth();
// value=date1.getDate();
// value=date1.getDay();

// console.log(value);

//fonksiyon tanımları

// function square(x){
//     return x*x;
// }

// console.log(square(5));

// const merhaba=function(x){
//     return x*x;
// }

// console.log(merhaba(5));

// //anlık çalışan fonksiyon
// (
//     function(name)                                                                                          {
//         console.log("Merhaba: "+name)
//     }
// )("Ayşenur");

//window objesi
//console.log(window);

//alert("selam")

// const ans=confirm("r u sure?");
// console.log(ans);//true or false

// const cev=prompt("2+2=?");//4

// const value=window.location;
// console.log(value);

// window.location.reload();//page reload

//elementi id yer göre seçme

// let element;

// element=document.getElementById("tasks-title");
// element=document.getElementsByClassName("list-group-item");
// element=document.getElementsByTagName("li");

// //yada 3 ü yerine geçen query selector

// element=document.querySelector("#tasks-title")
// element=document.querySelector(".list-group-item")//-tek element döner
// element=document.querySelectorAll(".list-group-item")//hepsi
//element=document.querySelector("li:nth-child(2)")//2. li seçilir

// element.forEach(function(len){console.log(len)});

// console.log(element);

//elementin özellikleri

// const element=document.querySelector("#clear-todos");
// console.log(element.id);
// console.log(element.textContent);
// console.log(element.innerHTML);
// element.className="btn btn-warning";
// element.style.color="#000";
// element.style.marginleft="50px";
// element.textContent="Silin";
// element.innerHTML="<span style='color:green'>Silin</span>"

//yeni element oluşturma

// const newLink=document.createElement("a");
// const cardbody=document.getElementsByClassName("card-body")[1];

// newLink.id="clear-todos";
// newLink.className="btn btn-danger";
// newLink.href="https://www.google.com.tr"
// newLink.target="_blank";
// newLink.appendChild(document.createTextNode("google git."));

// cardbody.appendChild(newLink);
// console.log(newLink);

// const filterInput=document.getElementById("filter");

// filterInput.onfocus=function(){
//   console.log("selam");
// }

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target);
// });

// const todoForm=document.getElementById("todo-form");

// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("Submit Eventi");
//     e.preventDefault();//default eventi yok sayar;
// }

// document.addEventListener("keypress",function(e){
// console.log(e.key);

// });

//example
//  const header=document.querySelector(".card-header");
// const todoinput=document.getElementById("todo");

// todoinput.addEventListener("keyup",function(e){

//     header.textContent=e.target.value;
// })