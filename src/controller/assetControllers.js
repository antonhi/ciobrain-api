const AssetController = require("./BaseAssetController");
const assetModels = require("../model/assetModels");
const assetControllers = Object.fromEntries(Object.entries(assetModels).map(([type, model]) => [type, new AssetController(model)]))

// const ApplicationAssetController = require("./ApplicationAssetController");
// const BusinessAssetController = require("./BusinessAssetController");
// const DataAssetController = require("./DataAssetController");
// const InfrastructureAssetController = require("./InfrastructureAssetController");
// const ProjectsAssetController = require("./ProjectsAssetController");
// const TalentAssetController = require("./TalentAssetController");

// const assetControllers = {
//     application: new ApplicationAssetController(),
//     business: new BusinessAssetController(),
//     data: new DataAssetController(),
//     infrastructure: new InfrastructureAssetController(),
//     projects: new ProjectsAssetController(),
//     talent: new TalentAssetController()
// }

module.exports = assetControllers;