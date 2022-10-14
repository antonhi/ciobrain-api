import express from "express"
import cors from "cors"
import assetRouter from "./src/routes/asset.js"
import loggingController from "./src/controller/loggingController.js"
import authenticationRouter from "./src/routes/authenticate.js"

const PORT = process.env.PORT || 3002
const app = express()

app.use(cors())
app.options("*", cors())
app.use(express.json())
app.use("/asset", assetRouter)
app.post("/log", loggingController.push)

app.listen(PORT, _ => console.log(`Connected to the server ${PORT}`))
