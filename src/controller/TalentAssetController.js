import BaseAssetController from "./BaseAssetController.js";
import assetModels from "../model/assetModels.js";

export default class TalentAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.talent);
    }

}
