import express from "express"
import piadasController from "../controllers/piadaController.js"

const piadaRoute = express.Router()
const piadaController = new piadasController();

piadaRoute.get("/piada/aleatoria", piadaController.getPiadaAleatoria)
piadaRoute.get("/piada/filtrada/:filtro", piadaController.getPiadaFiltroPath)
piadaRoute.get("/piada/filtrada/", piadaController.getPiadaFiltroQuery)

export default piadaRoute