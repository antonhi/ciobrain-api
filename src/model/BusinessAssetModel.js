const BaseAssetModel = require("./BaseAssetModel");

class BusinessAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Business.xlsx", "Business");
    }
}

module.exports = BusinessAssetModel;