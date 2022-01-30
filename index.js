const applicationAssetController = require('./src/controller/applicationAssetController');
const dataAssetController = require('./src/controller/dataAssetController');
const infrastructureAssetController = require('./src/controller/infrastructureAssetController');
const loggingController = require('./src/controller/loggingController');
express = require('express');
cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

// Controllers 
app.get("/asset/application/:id", applicationAssetController.findById);
app.get("/asset/data/:id", dataAssetController.findById);
app.get("/asset/infrastructure/:id", infrastructureAssetController.findById);
app.get("/asset/application", applicationAssetController.findAll);
app.get("/asset/data", dataAssetController.findAll);
app.get("/asset/infrastructure", infrastructureAssetController.findAll);
app.get("/asset/application/:id/children", applicationAssetController.findChildrenById);
app.get("/asset/data/:id/children", dataAssetController.findChildrenById);
app.get("/asset/infrastructure/:id/children", infrastructureAssetController.findChildrenById);
app.post("/log", loggingController.push);

app.listen(PORT, ()=>console.log(`Connected to the server ${PORT}`));

