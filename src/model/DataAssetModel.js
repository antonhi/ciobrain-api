const BaseAssetModel = require("./BaseAssetModel");

class DataAssetModel extends BaseAssetModel {

    constructor() {
        super('./src/data/Data.xlsx', "Data");
    }
}

module.exports = DataAssetModel;