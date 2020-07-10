class UI {
    constructor()
    {
        this.minuteElement = document.getElementById("minutes");
        this.secondElement = document.getElementById("seconds");
        this.modeElement = document.getElementById("mode");
        this.background = document.getElementById("left");
        this.todoTable = document.getElementById("todoTable");
    }
    changeMode(className,type)
    {
        this.modeElement.className = `btn btn-${className} mt-3`;
        this.modeElement.innerHTML = type; 
    }
    changeMinute(minute)
    {
        this.minuteElement.innerHTML = minute;
    }
    changeSecond(second)
    {
        this.secondElement.innerHTML = second;
    }
    changeBackground(mode)
    {
        this.background.style.backgroundImage = `url(./images/${mode}.jpg)`;
        this.background.style.transition = "0.3s";
        // this.background.style.background = "color:red";
        // console.log(this.background);
    }

    addTodo(todo){
        this.todoTable.innerHTML +=
         `                
        <tr>
          <td>
            ${todo}
          </td>
        <td>
        <div id="buttons">
          <button id="completeBtn" class="btn btn-sm btn-success" style="width: 40px;">
            <i id="completeBtn" class="fa fa-check"></i>
          </button>
          |
          <button id="deleteBtn" class="btn btn-sm btn-danger" style="width: 40px;">
            <i id="deleteBtn" class="fa fa-trash"></i>
          </button>
        </div>
        </td>
      </tr>
      `;
    }
    loadAllTodo(todos)
    {
      todos.forEach(todo => {
          this.todoTable.innerHTML += 
          `                
          <tr>
            <td>
              ${todo.todo}
            </td>
          <td>
            <div id="buttons">
            <button id="completeBtn" class="btn btn-sm btn-success" style="width: 40px;">
              <i id="completeBtn" class="fa fa-check"></i>
            </button>
            |
              
              <button id="deleteBtn"  class="btn btn-sm btn-danger" style="width: 40px;">
                <i id="deleteBtn" class="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        `;
      });
    }

    deleteTodo(element)
    {
        element.parentElement.parentElement.parentElement.remove();
    }
}