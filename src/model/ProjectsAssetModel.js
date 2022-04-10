import BaseAssetModel from "./BaseAssetModel.js";

export default class ProjectsAssetModel extends BaseAssetModel {

    constructor() {
        super("./src/data/Projects.xlsx", "Projects");
    }

}
