import BaseAssetController from "./BaseAssetController.js";
import assetModels from "../model/assetModels.js";

export default class ApplicationAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.application);
    }

}
