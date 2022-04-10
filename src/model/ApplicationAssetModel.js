import BaseAssetModel from "./BaseAssetModel.js";

export default class ApplicationAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Application.xlsx", "Application");
    }

}
