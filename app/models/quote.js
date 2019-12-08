export default class Quote {
    constructor(data) {
        // console.log("RAW QOTE DATA", data);
        this.author = data.quote.author;
        this.body = data.quote.body;
    }

    get template() {
        return /*html*/ `<h4>"${this.body}"</h4><h5>-${this.author}</h5>`;
    }
}
