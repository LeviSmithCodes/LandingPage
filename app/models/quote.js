export default class Quote {
    constructor(data) {
        // console.log("RAW QOTE DATA", data);
        this.author = data.quote.author;
        this.body = data.quote.body;
    }

    get template() {
        return /*html*/ `<p>"${this.body}"</p><p id="author">-${this.author}</p>`;
    }
}
