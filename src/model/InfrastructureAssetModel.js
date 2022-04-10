const BaseAssetModel = require("./BaseAssetModel");

class InfrastructureAssetModel extends BaseAssetModel {

    constructor() {
        super('./src/data/Infrastructure.xlsx', "Infrastructure");
    }
}

module.exports = InfrastructureAssetModel;


