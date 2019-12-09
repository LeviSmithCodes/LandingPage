import store from "../store.js";

// @ts-ignore
const _timeApi = axios.create({
    baseURL: "https://worldtimeapi.org/api/ip",
    timeout: 8000
});
class TimeService {
    async getTimeAsync() {
        let res = await _timeApi.get();
        console.log("time-service says", res.data.datetime);
        store.commit("time", res);
        console.log("time in store:", store.State.time);
    }
}

const timeService = new TimeService();
export default timeService;
