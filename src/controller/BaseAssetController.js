const assetFunctions = require("../assetFunctions");
const assetModels = require("../model/assetModels")

class BaseAssetController {

    /**
     * @param {BaseAssetModel} assetModel
     */
    constructor(assetModel) {
        this._assetModel = assetModel;
    }

    push = (req, res) => {
        const assets = req.body;
        if (Array.isArray(assets)) {
            res.status(200).json(this._assetModel.push(req.body));
        } else {
            res.status(400).json({error: "Invalid Body"});
        }
    }

    findById = (req, res) => {
        const id = req.params.id;
        const asset = this._assetModel.findById(id);
        if (asset) res.json(asset); else res.json({error: `${id} is not a valid ${this._assetModel.assetType} ID`});
    }

    findAll = (req, res) => {
        res.json(this._assetModel.findAll());
    }

    findChildrenById = (req, res) => {
        const id = req.params.id;
        let children = [];
        let parent = this._assetModel.findById(id);
        if (!parent) {
            res.json({error: `${id} is not a valid ${this._assetModel.assetType} ID`});
            return;
        }

        //todo init this somewhere else
        const types = ["Application", "Data", "Infrastructure", "Talent", "Projects", "Business"];

        for (const type of types) {
            const connectionType = type + " Connections";
            const connections = parent[connectionType];
            if (connections && connections.trim().length) {
                const model = assetModels[type.toLowerCase()];
                let childrenIds = parent[connectionType].split(';');
                childrenIds = childrenIds.map(item => parseInt(item.replace(/\D/g, '')));
                //todo use push instead of concat
                children = children.concat(assetFunctions.filterForValidChildren(parent, childrenIds, model));
            }
        }

        const hierarchy = {
            ...parent, children: children
        };

        res.json(hierarchy)
    }
}

module.exports = BaseAssetController;