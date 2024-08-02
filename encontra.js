const clientes = require("./clientes.json")

function encontra (lista, chave, valor){
    return lista.find((item) => item[chave == valor])
};

const encontrado = encontrar (cliente, "nome", "Kirby")
const encontrado2 = encontrar (cliente, "nome", "Kirby")

console.log(encontrado)
console.log(encontrado2)
