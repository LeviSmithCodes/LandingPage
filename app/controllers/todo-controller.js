import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/todo.js";

//TODO Create the render function
function _drawTodos() {
    let template = "";
    let todos = store.State.todos;
    todos.forEach(t => (template += t.template));
    document.querySelector("#todos").innerHTML = template;
    console.log("drawTodos says", todos);
}

function _drawTodosCount() {
    let todos = store.State.todos;
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
        count++;
    }
    document.querySelector(
        "#todaysTasks"
    ).innerHTML = `Today's Tasks [${count}]`;
}

export default class TodoController {
    constructor() {
        //TODO Remember to register your subscribers
        store.subscribe("todos", _drawTodos);
        store.subscribe("todos", _drawTodosCount);
        // debugger;
        TodoService.getTodosAsync();
    }

    async addTodo(e) {
        e.preventDefault();
        var form = e.target;
        var todo = {
            //TODO build the todo object from the data that comes into this method
            description: form.text.value
        };
        try {
            await TodoService.addTodoAsync(todo);
        } catch (error) {
            debugger;
            console.error("[ERROR]:", error);
        }
    }

    //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
    async toggleTodoStatus(todoId) {
        try {
            await TodoService.toggleTodoStatusAsync(todoId);
        } catch (error) {
            debugger;
            console.error("[ERROR]:", error);
        }
    }

    //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
    async removeTodo(todoId) {
        try {
            await TodoService.removeTodoAsync(todoId);
        } catch (error) {
            debugger;
            console.error("[ERROR]:", error);
        }
    }
}
