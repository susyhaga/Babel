//map
//tem estrutura dicionario=> chave:valor
//set(chave:valor)

const {
  loadPartialConfigAsync
} = require("@babel/core");
let meuMap = new Map();
meuMap.set('nome', 'Susy');
meuMap.set('stack', 'html,css,js');
console.log(meuMap);

//Recuperando valor de um item

const nome = meuMap.get('nome');
console.log(nome);

//Recuperando a QUANTIDADE de itens do map
//atributo .size

console.log(meuMap.size);

//Para verificar se uma determinada chave existe dentro de map
//.has()

console.log(meuMap.has('nome'));

//para REMOVER os itens do map

// meuMap.clear();

// console.log(meuMap.size);

//ITERACAO COM FOR DENTRO DOS ITENS DE MAP

//for(let y of meyMap.keys())

for (let chave of meuMap.keys()) {
  console.log(chave);
}

//for(let y of meyMap.values())
for (let valor of meuMap.values()) {
  console.log(valor);
}

//ENTRADA ITEM COMPOSTO POR CHAVE:VALOR

//for(let y of meyMap.entries())
for (let entrada of meuMap.entries()) {
  console.log(entrada);
}

//DESESTRUTURACAO dentro da iteracao do map

for (let [chave, valor] of meuMap.entries()) {
  console.log(`${chave}:${valor}`);
}

//.delete()
//para remover um item do map

meuMap.delete('stack');
console.log(meuMap);

//SET

//NAO tem estrutura chave:valor
//Os valores NAO podem ser repetidos dentro do set

//para criar o set 
//new Set()
//para adicionar itens dentro do set
//.add()
//se o numero do cpf comecar com 0, eh preciso transfornar todos em string por padronizacao

const cpfs = new Set();
cpfs.add(39546072044);
cpfs.add(75515127056);
cpfs.add(54322177085);
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

//forEach()+ arrow function no set

cpfs.forEach(valor => {
  console.log(valor);
});

//Criando uma listagem com itens unicos 

const array = ['Italo Unhaiser', 'Susy Haga', 'Eliza Haga', 'Lucia Haga', 'Susy Haga', 'Lucia Haga'];

//convertendo um array em um set...usando o SPREAD OPERATOR para transferir dados
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);

//convertendo um set em um array...usando o SPREAD para transferir dados

const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados);