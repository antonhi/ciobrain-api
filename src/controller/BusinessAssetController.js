import BaseAssetController from "./BaseAssetController.js";
import assetModels from "../model/assetModels.js";

export default class BusinessAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.business);
    }

}
