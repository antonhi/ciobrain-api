applicationAssetModel = require('./model/applicationAssetModel');
dataAssetModel = require('./model/dataAssetModel')
infrastructureAssetModel = require('./model/infrastructureAssetModel')
const loggingModel = require('./model/loggingModel')

let assetFunctions = { 
    filterForValidApplicationChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = applicationAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Application Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Application Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Application";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidDataChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = dataAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Data Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Data Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Data";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidInfrastructureChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = infrastructureAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Infrastructure Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Infrastructure Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Infrastructure";
            }
            return child;
        }).filter(item => item != null);
    }
}

module.exports = assetFunctions;