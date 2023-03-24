import express from "./node_modules/express/index.js";
import cors from "./node_modules/cors/lib/index.js";

const app = express();

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    app.use(cors());
    next();
});

import { listarContatos } from "./modulo/api.js";

app.get("/contato/:id", cors(), async function(request, response, next) {
    let id = request.params.id;
    let dadosContato = listarContatos(id);
    if (dadosContato) {
        response.json(dadosContato);
        response.status(200);
    } else {
        response.status(500);
    }
});

app.listen(8080, function() {
    console.log("Servidor aguardando requisições na porta 8080");
});