import store from "../store.js";
import TimeService from "../services/time-service.js";

function drawTime() {}
export default class TimeController {
    constructor() {
        store.subscribe("time", drawTime);
        TimeService.getTimeAsync();
    }
}
