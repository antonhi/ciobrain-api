applicationAssetModel = require('../model/applicationAssetModel');
dataAssetModel = require('../model/dataAssetModel')
infrastructureAssetModel = require('../model/infrastructureAssetModel')
const assetFunctions = require('../assetFunctions');
XLSX = require('xlsx');

let applicationAssetController = {
    
    findById: (req, res) => {
        res.json(applicationAssetModel.findById(req.params.id));
    },
    findAll: (req, res) => {
        res.json(applicationAssetModel.findAll());
    },
    findChildrenById: (req, res) => {
        let children = [];
        let parent = applicationAssetModel.findById(req.params.id);
        parent["Asset Type"] = "Application";
        if (parent['Application Connections'] && parent['Application Connections'].trim().length) {
            let applicationAssetChildrenIds = parent['Application Connections'].split(';');
            applicationAssetChildrenIds = applicationAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidApplicationChildren(parent, applicationAssetChildrenIds));
        }
        if (parent['Data Connections'] && parent['Data Connections'].trim().length) {
            let dataAssetChildrenIds = parent['Data Connections'].split(';');
            dataAssetChildrenIds = dataAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidDataChildren(parent, dataAssetChildrenIds));
        }
        if (parent['Infrastructure Connections'] && parent['Infrastructure Connections'].trim().length) {
            let infrastructureAssetChildrenIds = parent['Infrastructure Connections'].split(';');
            infrastructureAssetChildrenIds = infrastructureAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidInfrastructureChildren(parent, infrastructureAssetChildrenIds));
        }

        var hierarchy = {
            ...parent,
            children: children
        }

        res.json(hierarchy)
    }
}

module.exports = applicationAssetController;