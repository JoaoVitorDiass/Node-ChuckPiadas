import fs from "fs/promises"
import Templates from "../utils/templates.js"

export default class Piada {
    async getPiadaAleatoria(requisition, response) {
        fs.readFile("./source/chuck.json","utf-8")
            .then((data)=>{ return JSON.parse(data)})
            .then((data)=>{

                let object = data["result"][Math.floor(Math.random() * data["total"])]

                return response.status(200).send(
                    Templates.getTemplatePiada(
                        object.value,
                        object.url
                    )
                )
            })
    }
    async getPiadaFiltroPath(requisition, response) {
        fs.readFile("./source/chuck.json","utf-8")
            .then((data)=>{ return JSON.parse(data)})
            .then((data)=>{

                var filtro = requisition.params.filtro
                var piadas = data["result"].filter(element => element.value.includes(filtro))

                let html = "";

                piadas.forEach(element => {
                    html += `
                        <div class="joke">
                            ${element.value}
                        </div>
                        <div class="footer">
                            Fonte: ${element.url}
                        </div>
                        <br>
                    `
                });

                return response.status(200).send(
                    Templates.getTemplatePiadasAleatorias(
                        html,
                        filtro
                    )
                )

            })
    }

    async getPiadaFiltroQuery(requisition, response) {
        fs.readFile("./source/chuck.json","utf-8")
            .then((data)=>{ return JSON.parse(data)})
            .then((data)=>{

                var filtro = requisition.query.filtro
                var piadas = data["result"].filter(element => element.value.includes(filtro))

                let html = "";

                piadas.forEach(element => {
                    html += `
                        <div class="joke">
                            ${element.value}
                        </div>
                        <div class="footer">
                            Fonte: ${element.url}
                        </div>
                        <br>
                    `
                });

                return response.status(200).send(
                    Templates.getTemplatePiadasAleatorias(
                        html,
                        filtro
                    )
                )

            })
    }
}