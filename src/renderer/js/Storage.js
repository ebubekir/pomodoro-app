class Storage {

    addTodo(newTodo){
        let todos = this.getTodos();
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    getTodos() {
        let todos;
        if( localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
    }

    deleteTodo(todo)
    {
        let todos = this.getTodos();
        todos.forEach((todoItem,index) => {
            if(todoItem.todo === todo){
                todos.splice(index,1);
            }
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    clearAll(){
        localStorage.removeItem("todos");
    }
}