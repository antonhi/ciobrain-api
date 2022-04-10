const assetModels = require('../model/assetModels');
const BaseAssetController = require("./BaseAssetController");

class ApplicationAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.application);
    }

}

module.exports = ApplicationAssetController;