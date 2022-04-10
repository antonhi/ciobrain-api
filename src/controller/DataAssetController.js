import BaseAssetController from "./BaseAssetController.js";
import assetModels from "../model/assetModels.js";

export default class DataAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.data);
    }

}
