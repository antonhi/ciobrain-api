const AssetModel = require("./BaseAssetModel")

const assetModels = {
    application: new AssetModel("./src/data/Application.xlsx", "Application"),
    data: new AssetModel("./src/data/Data.xlsx", "Data"),
    infrastructure: new AssetModel("./src/data/Infrastructure.xlsx", "Infrastructure"),
    talent: new AssetModel("./src/data/Talent.xlsx", "Talent"),
    projects: new AssetModel("./src/data/Projects.xlsx", "Projects"),
    business: new AssetModel("./src/data/Business.xlsx", "Business")
}

module.exports = assetModels
