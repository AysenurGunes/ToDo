const form = document.querySelector("#todo-form");
const todoinput=document.querySelector("#todo");
const todolist=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");
eventListeners();

function eventListeners(){ // Tüm event listers
form.addEventListener("submit",addTodo);
document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
secondCardBody.addEventListener("click",deleteTodo);
filter.addEventListener("keyup",filterTodos);
clearButton.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
    //clear all todos on ui
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        
        //todolist.innerHTML="";//yavaş çözüm
while (todolist.firstElementChild!=null) {
    todolist.removeChild(todolist.firstElementChild);
}
localStorage.removeItem("todos");
        
    }
}
function filterTodos(e){
    const filterValue=e.target.value.toLowerCase();
    const listItems=document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text=listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue)===-1) {
            listItem.setAttribute("style","display:none !important");//important tüm css özellikleri yok sayar.
         
        }
        else{
            listItem.setAttribute("style","display:block");
           
        }
    })
}
function deleteTodo(e){

    if (e.target.className==="fa fa-remove") {
        //parent elementleri bulup silmelisin
        let element=e.target.parentElement.parentElement;
     element.remove();//only delete ui
    
        deleteTodoFromStorage(element.textContent);
        showAlert("success","ToDo silindi");
    }
   
}
function deleteTodoFromStorage(deleteTodo){
let todos=getTodosFromStorage();

todos.forEach(function(todo,index){
    if (todo===deleteTodo) {
        todos.splice(index,1); //remove item from array
    }
});
localStorage.setItem("todos", JSON.stringify(todos));
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
    setTimeout(function(){ alert.remove();},1000)
    
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
}