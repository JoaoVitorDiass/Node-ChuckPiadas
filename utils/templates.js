export default class Templates {
    static getTemplatePiada (piada,fonte) {
        return `<!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Piada do Chuck Norris</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f0f0f0;
                            color: #333;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }
                        .container {
                            background: #fff;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            max-width: 600px;
                            width: 100%;
                            padding: 20px;
                            text-align: center;
                        }
                        .header {
                            font-size: 24px;
                            color: #e04a4a;
                            margin-bottom: 20px;
                        }
                        .joke {
                            font-size: 18px;
                            line-height: 1.6;
                        }
                        .footer {
                            margin-top: 20px;
                            font-size: 14px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            Piada do Chuck Norris
                        </div>
                        <div class="joke">
                            ${piada}
                        </div>
                        <div class="footer">
                            Fonte: ${fonte}
                        </div>
                    </div>
                </body>
                </html>
                `
    }

    static getTemplatePiadasAleatorias ( html,filtro ) {
        return `<!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Piada do Chuck Norris</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f0f0f0;
                            color: #333;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }
                        .container {
                            background: #fff;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            max-width: 600px;
                            width: 100%;
                            padding: 20px;
                            text-align: center;
                        }
                        .header {
                            font-size: 24px;
                            color: #e04a4a;
                            margin-bottom: 20px;
                        }
                        .joke {
                            font-size: 18px;
                            line-height: 1.6;
                        }
                        .footer {
                            margin-top: 20px;
                            font-size: 14px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            Piadas do Chuck Norris contendo: '${filtro}'
                        </div>
                        ${html}
                    </div>
                </body>
                </html>
                `
    }

    static getTemplateInicial ( ) {
        return `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bem-vindo à API de Piadas do Chuck Norris</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .container {
                        background: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        max-width: 600px;
                        width: 100%;
                        padding: 20px;
                        box-sizing: border-box;
                        text-align: center;
                    }
                    .header {
                        font-size: 24px;
                        color: #e04a4a;
                        margin-bottom: 20px;
                    }
                    .route {
                        background: #f9f9f9;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        padding: 15px;
                        margin-bottom: 15px;
                    }
                    .route:last-child {
                        margin-bottom: 0;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 14px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        Bem-vindo à API de Piadas do Chuck Norris
                    </div>
                    <p>Esta API fornece piadas aleatórias e filtradas sobre Chuck Norris. Aqui estão as rotas disponíveis:</p>
                    <div class="route">
                        <strong>/piada/aleatoria</strong><br>
                        Retorna uma piada aleatória do Chuck Norris.
                    </div>
                    <div class="route">
                        <strong>/piada/filtrada?filtro=filtro</strong><br>
                        Retorna piadas do Chuck Norris filtradas pelo parâmetro de consulta <code>filtro</code>.
                    </div>
                    <div class="route">
                        <strong>/piada/filtrada/filtro</strong><br>
                        Retorna piadas do Chuck Norris filtradas pelo parâmetro de caminho <code>filtro</code>.
                    </div>
                    <div class="footer">
                        API desenvolvida para amantes de Chuck Norris!
                    </div>
                </div>
            </body>
            </html>
        `
    }
}