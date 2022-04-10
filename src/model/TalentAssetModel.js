const BaseAssetModel = require("./BaseAssetModel");

class TalentAssetModel extends BaseAssetModel {

    constructor() {
        super('./src/data/Talent.xlsx', "Talent");
    }
}

module.exports = TalentAssetModel;