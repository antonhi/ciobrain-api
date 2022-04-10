const BaseAssetModel = require("./BaseAssetModel");

class ProjectsAssetModel extends BaseAssetModel {

    constructor() {
        super('./src/data/Projects.xlsx', "Projects");
    }
}

module.exports = ProjectsAssetModel;