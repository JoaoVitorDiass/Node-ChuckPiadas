import express, { response } from "express"
import piadaRoute from "./routes/piadaRoute.js"

import Templates from "./utils/templates.js"

const app = express()
app.use(express.json())
app.use(piadaRoute)

app.get("/",( requisition, response )=>{
    response.status(200).send(Templates.getTemplateInicial())
})

app.listen(8081, () => {
    console.log("Server running on port 8081")
})