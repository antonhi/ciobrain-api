const assetModels = require('../model/assetModels');
const BaseAssetController = require("./BaseAssetController");

class BusinessAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.business);
    }

}

module.exports = BusinessAssetController;