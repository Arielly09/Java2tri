const cliente = {
    nome:"João",
    idade:24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000"],
};

cliente.enderecos =[
{
    rua: "R. Joseph Climber",
    numero: 13337,
    apartamento : true,
    complemento : "Ap934",
},    
];

cliente.enderecos.push({
    rua: "R. Joseph Climber",
    numero: 404,
    apartamento: false,
    
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos);