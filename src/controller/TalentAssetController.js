const assetModels = require('../model/assetModels');
const BaseAssetController = require("./BaseAssetController");

class TalentAssetController extends BaseAssetController {

    constructor() {
        super(assetModels.talent);
    }

}

module.exports = TalentAssetController;