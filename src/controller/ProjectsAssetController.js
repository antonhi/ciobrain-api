import BaseAssetController from "./BaseAssetController.js";
import assetModels from "../model/assetModels.js";

export default class ProjectsAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.projects);
    }

}
