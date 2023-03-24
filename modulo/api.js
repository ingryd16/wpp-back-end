import { contatos } from "./contatos.js";
/* import { contatos } from "./modulo/contatos.js";*/
export const listarContatos = function(id) {
    const dados = contatos["whats-users"][id].contacts;
    let array = [];
    return (array = dados);
};