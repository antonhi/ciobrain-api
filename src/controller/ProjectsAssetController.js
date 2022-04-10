const assetModels = require('../model/assetModels');
const BaseAssetController = require("./BaseAssetController");

class ProjectsAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.projects);
    }

}

module.exports = ProjectsAssetController;