import BaseAssetModel from "./BaseAssetModel.js";

export default class InfrastructureAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Infrastructure.xlsx", "Infrastructure");
    }

}
