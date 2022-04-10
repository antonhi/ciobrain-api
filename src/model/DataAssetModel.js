import BaseAssetModel from "./BaseAssetModel.js";

export default class DataAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Data.xlsx", "Data");
    }

}
