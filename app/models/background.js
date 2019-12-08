import store from "../store.js";
export default class Background {
    constructor(data) {
        console.log("RAW BACKGROUND DATA", data);
        this.url = data.url;
        this.large_url = data.large_url;
        this.site = data.site;
        this.copyright = data.copyright;
    }

    get template() {
        return `url(${this.large_url}) no-repeat center center fixed`; // TODO use large URL?
    }
}
