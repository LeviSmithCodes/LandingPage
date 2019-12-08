import store from "../store.js";
import Background from "../models/background.js";
// @ts-ignore
const _imgApi = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/images",
    timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
    async getBackgroundAsync() {
        let res = await _imgApi.get();
        console.log("getBackgroundAsync says you got", res.data);
        store.commit("background", new Background(res.data));
    }

    drawBackground() {
        document.body.style.background = store.State.background.template; //REVIEW why is this squiggling but working? // was using backgroundImage
    }
}

const imageService = new ImageService();
export default imageService;
