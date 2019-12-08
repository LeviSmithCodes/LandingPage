import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function drawQuote() {
    console.log("drawQuote state in Controller says", store.State.quote);
    QuoteService.drawQuote();
}

export default class QuoteController {
    constructor() {
        store.subscribe("quote", drawQuote);
        QuoteService.getQuoteAsync();
    }
}
