import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/LeviSmith/todos/",
    timeout: 8000
});

class TodoService {
    async getTodosAsync() {
        // console.log("Getting the Todo List");
        let res = await todoApi.get();
        console.log("todo results!", res);
        //TODO Handle this response from the server
        // debugger;
        store.commit(
            "todos",
            res.data.data.map(todoData => new Todo(todoData))
        );
        console.log("store todo results:", store.State.todos);
    }

    //TODO make list items add to bottom of list
    async addTodoAsync(todo) {
        let res = await todoApi.post("", todo);
        console.log("addTodoAsync and the sandbox says", res);
        //TODO Handle this response from the server (hint: what data comes back, do you want this?)
        // store.commit("todos", res);
        this.getTodosAsync();
    }

    async toggleTodoStatusAsync(todoId) {
        let todo = store.State.todos.find(todo => todo._id == todoId);
        //TODO Make sure that you found a todo,
        //		and if you did find one
        //		change its completed status to whatever it is not (ex: false => true or true => false)

        let res = await todoApi.put(todoId, todo);
        //TODO do you care about this data? or should you go get something else?
    }

    async removeTodoAsync(todoId) {
        // Work through this one on your own
        //		what is the request type
        //		once the response comes back, what do you need to insure happens?

        console.log("on way to deleting!", todoId);
        let res = await todoApi.delete(todoId);
        console.log("removeTodo says:", res);
        this.getTodosAsync();
    }
}

const todoService = new TodoService();
export default todoService;
