import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawBackground() {
    // TODO move the actual code to the service
    ImageService.drawBackground();
}
export default class ImageController {
    constructor() {
        store.subscribe("background", drawBackground);
        ImageService.getBackgroundAsync();
    }
}
