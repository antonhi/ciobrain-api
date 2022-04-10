const assetModels = require('../model/assetModels');
const BaseAssetController = require("./BaseAssetController");

class DataAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.data);
    }

}

module.exports = DataAssetController;