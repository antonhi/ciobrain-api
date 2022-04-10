const ApplicationAssetModel = require("./ApplicationAssetModel");
const BusinessAssetModel = require("./BusinessAssetModel");
const DataAssetModel = require("./DataAssetModel");
const InfrastructureAssetModel = require("./InfrastructureAssetModel");
const ProjectsAssetModel = require("./ProjectsAssetModel");
const TalentAssetModel = require("./TalentAssetModel");

//const AssetModel = require("./BaseAssetModel");

const assetModels = {
    //application: new AssetModel('./src/data/Application.xlsx', "Application"),
    application: new ApplicationAssetModel(),
    business: new BusinessAssetModel(),
    data: new DataAssetModel(),
    infrastructure: new InfrastructureAssetModel(),
    projects: new ProjectsAssetModel(),
    talent: new TalentAssetModel()
}

module.exports = assetModels;