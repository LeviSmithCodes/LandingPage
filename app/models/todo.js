export default class Todo {
    constructor(data) {
        this._id = data._id;
        this.completed = data.completed;
        this.description = data.description;
        this.user = data.user;
    }

    get template() {
        return /*html*/ `
      `;
    }
}
