const express = require("express")
const assetControllers = require("../controller/assetControllers")

const router = express.Router()

const getAssetController = (req, res, next) => {
    const controller = assetControllers[req.params.type.toLowerCase()]
    if (controller) {
        req.assetController = controller
        next()
        return
    }
    res.json({ error: "Invalid asset type" })
}

const findAll = (req, res) => req.assetController.findAll(req, res)

const push = (req, res) => req.assetController.push(req, res)

const findById = (req, res) => req.assetController.findById(req, res)

const findChildrenById = (req, res) => req.assetController.findChildrenById(req, res)

router.use("/:type", getAssetController)

router.route("/:type").get(findAll).post(push)
router.get("/:type/:id", findById)
router.get("/:type/:id/children", findChildrenById)

module.exports = router
