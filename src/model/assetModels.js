import ApplicationAssetModel from "./ApplicationAssetModel.js";
import BusinessAssetModel from "./BusinessAssetModel.js";
import DataAssetModel from "./DataAssetModel.js";
import InfrastructureAssetModel from "./InfrastructureAssetModel.js";
import ProjectsAssetModel from "./ProjectsAssetModel.js";
import TalentAssetModel from "./TalentAssetModel.js";

//import BaseAssetModel from "./BaseAssetModel.js";
const assetModels = {
    //application: new BaseAssetModel("./src/data/Application.xlsx", "Application"),
    application: new ApplicationAssetModel(),
    business: new BusinessAssetModel(),
    data: new DataAssetModel(),
    infrastructure: new InfrastructureAssetModel(),
    projects: new ProjectsAssetModel(),
    talent: new TalentAssetModel()
}

export default assetModels;
