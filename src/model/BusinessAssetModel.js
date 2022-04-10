import BaseAssetModel from "./BaseAssetModel.js";

export default class BusinessAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Business.xlsx", "Business");
    }

}
