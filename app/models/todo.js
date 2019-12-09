export default class Todo {
    constructor(data) {
        this._id = data._id;
        this.completed = data.completed;
        this.description = data.description;
        this.user = data.user;
    }

    get template() {
        let innerTemplate = "";
        if (this.completed) {
            innerTemplate += /*html*/ `
          <dt>
            <i class="far fa-check-square list-item-already-with-check" onclick="app.todoController.toggleTodoStatus('${this._id}')"></i> 
            <strike>${this.description}</strike>
            <i class="fas fa-trash trash-right" onclick="app.todoController.removeTodo('${this._id}')"></i>
          </dt>`;
        } else {
            innerTemplate += /*html*/ `
        <dt>
          <i class="far fa-square list-item-with-check" onclick="app.todoController.toggleTodoStatus('${this._id}')"></i> 
          ${this.description} 
          <i class="fas fa-trash trash-right" onclick="app.todoController.removeTodo('${this._id}')"></i>
        </dt>`;
        }
        return innerTemplate;
    }
}
