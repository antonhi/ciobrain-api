import BaseAssetModel from "./BaseAssetModel.js";

export default class TalentAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Talent.xlsx", "Talent");
    }

}
