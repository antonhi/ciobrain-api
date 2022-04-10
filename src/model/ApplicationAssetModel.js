const BaseAssetModel = require("./BaseAssetModel");

class ApplicationAssetModel extends BaseAssetModel {

    constructor() {
        super('./src/data/Application.xlsx', "Application");
    }
}

module.exports = ApplicationAssetModel;