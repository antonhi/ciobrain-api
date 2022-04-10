import BaseAssetController from "./BaseAssetController.js";
import assetModels from "../model/assetModels.js";

export default class InfrastructureAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.infrastructure);
    }

}
