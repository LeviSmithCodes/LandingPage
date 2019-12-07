import store from "../store.js";

// @ts-ignore
const _imgApi = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/images",
    timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
    async getBackgroundAsync() {
        let res = await _imgApi.get();
        console.log("getBackgroundAsync says you got", res);
        store.commit("background", res);
    }

    drawBackground() {
        document.body.style.backgroundImage = `url(${store.State.background.data.url})`;
    }
}

const imageService = new ImageService();
export default imageService;
