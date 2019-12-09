import store from "../store.js";
import TimeService from "../services/time-service.js";

function drawTime() {
    console.log("unixtime?", store.State.time.data.unixtime);

    let dateObj = new Date(store.State.time.data.unixtime * 1000);
    console.log("dateObj", dateObj);
    // let utcString = dateObj.toUTCString();
    // console.log("utcString", utcString);
    // let time = utcString.slice(-11, -4);
    // console.log("time", time);
    console.log("mytime", dateObj.toString().slice(0, 24));
    let myDateTime = dateObj.toString().slice(0, 24);

    document.querySelector("#timeSlot").innerHTML = `${myDateTime}`;
}
export default class TimeController {
    constructor() {
        store.subscribe("time", drawTime);
        setInterval(TimeService.getTimeAsync, 1000);
    }
}
