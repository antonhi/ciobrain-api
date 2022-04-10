const assetModels = require('../model/assetModels');
const BaseAssetController = require("./BaseAssetController");

class InfrastructureAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.infrastructure);
    }

}

module.exports = InfrastructureAssetController;