import ApplicationAssetController from "./ApplicationAssetController.js";
import BusinessAssetController from "./BusinessAssetController.js";
import DataAssetController from "./DataAssetController.js";
import InfrastructureAssetController from "./InfrastructureAssetController.js";
import ProjectsAssetController from "./ProjectsAssetController.js";
import TalentAssetController from "./TalentAssetController.js";

const assetControllers = {
    application: new ApplicationAssetController(),
    business: new BusinessAssetController(),
    data: new DataAssetController(),
    infrastructure: new InfrastructureAssetController(),
    projects: new ProjectsAssetController(),
    talent: new TalentAssetController()
}

// import assetModels from "../model/assetModels.js";
// import BaseAssetController from "./BaseAssetController.js";
// const assetControllers = Object.fromEntries(Object.entries(assetModels).map(([type, model]) => [type, new BaseAssetController(model)]))

export default assetControllers;
