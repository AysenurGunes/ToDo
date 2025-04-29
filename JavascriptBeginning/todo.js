const form = document.querySelector("#todo-form");
const todoinput=document.querySelector("#todo");
const todolist=document.querySelector(".list-group");
const firstCardBody=document.querySelector(".card-body")
//const secondCardBody = document.querySelector(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");
eventListeners();

function eventListeners(){ // Tüm event listers
form.addEventListener("submit",addTodo);
document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}
function loadAllTodosToUI(){
    let todos =getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
function addTodo(e){

    const newTodo=todoinput.value.trim();
    if(newTodo==="")
        {
        showAlert("danger","To-do girmelisiniz.");
        }
    else{

        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
    }
    e.preventDefault();
}

function getTodosFromStorage(){
    let todos;
    if (localStorage.getItem("todos")===null)
     {
        todos=[];
    
     }else{
    todos= JSON.parse(localStorage.getItem("todos"));
 }
return todos
}
function addTodoToStorage(newTodo)
{

    let todos=getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));//arrayleri stringe cevirir stringify
} 
function showAlert(type,message)
{

    const alert= document.createElement("div");
    alert.className="alert alert-".concat(type);
    alert.textContent=message;
    firstCardBody.appendChild(alert);
    setTimeout(function(){ alert.remove();},2000)
    
}
function addTodoToUI(newTodo)
{
const listItem=document.createElement("li");
const link =document.createElement("a");
link.href="#";
link.className="delete-item";
link.innerHTML="<i class='fa fa-remove'></i>";

listItem.className="list-group-item d-flex justify-content-between";
listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

//Todo liste ekleme

todolist.appendChild(listItem);
todoinput.value="";
console.log(listItem);
}