// Get Elements
const startButton = document.getElementById("startBtn");
const stopButton  = document.getElementById("stopBtn");
const background = document.getElementById("left");
const form = document.getElementById("todoForm");
const todoElement = document.getElementById("todo");
const completeBtn = document.getElementById("completeBtn");
const deleteBtn = document.getElementById("deleteBtn");
const todoTable = document.getElementById("todoTable");

const pomodoro = new Pomodoro();
const ui = new UI();
const storage = new Storage();
eventListeners();

function eventListeners() 
{
    document.addEventListener("DOMContentLoaded", () => {
        // Page on Load.
        let todos = storage.getTodos();
        if(todos.length === 0 )
        {
            todoTable.innerHTML = `
            <tr>
                <td colspan="2">There is no to do here.</td>
            </tr>
            `;
        }else {
            ui.loadAllTodo(todos);

        }
    });
    form.addEventListener("submit", addTodo);
    todoTable.addEventListener("click", deleteOrCompleteTodo);
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
}

function startTimer(){
    pomodoro.Start();
}

function stopTimer(){
    pomodoro.Stop();
}

function addTodo(e){
    const todo = todoElement.value;
    const newTodo = new Todo(todo);
    ui.addTodo(todo);
    storage.addTodo(newTodo);
    ui.clearInputs();
    // e.preventDefault();
    e.returnValue = false;
}
function deleteOrCompleteTodo(e) {
    if(e.target.id === "deleteBtn")
    {
        if(e.target.parentElement.id === "buttons")
        {
            storage.deleteTodo(e.target.parentElement.parentElement.previousElementSibling.textContent.trim());
            ui.deleteTodo(e.target);
        } else if(e.target.parentElement.id === "deleteBtn") {
            storage.deleteTodo(e.target.parentElement.parentElement.parentElement.previousElementSibling.textContent.trim());
            ui.deleteTodo(e.target.parentElement);
        }
    } 
    else if(e.target.id === "completeBtn")
    {
        if(e.target.parentElement.id === "buttons")
        {
            e.target.parentElement.parentElement.previousElementSibling.style.textDecoration = "line-through";
            e.target.parentElement.parentElement.previousElementSibling.style.color = "green";
        }
        else{
            e.target.parentElement.parentElement.parentElement.previousElementSibling.style.textDecoration = "line-through";
            e.target.parentElement.parentElement.parentElement.previousElementSibling.style.color = "green";
        }
    }
}