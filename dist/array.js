const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

//for para percorrer toda array

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}
//metodo es6 com forEach()
redesSociais.forEach(function (item, indice) {
  console.log(`#${indice} Eu tenho perfil na rede social: ${item}`);
});

//metodo map() serve para criar um novo array a partir de um array manipulado
//precisamos criar uma nov avariavel para armazenar a nova array criada a partir da manipulacao de um outro array

//return jah com a acao
const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);

//exemplo 2 de MAP()
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
const alunos2 = alunos.map(function (itemAtual) {
  //objeto literal
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

//METODO find() 
//para procurar um item dentro de um array

const paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);

//METODO findIndex() 
//para retornar o indice do item 
const indiceDaPaula = alunos2.findIndex(function (item) {
  //predicado
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

// METODO every()

// Serve para verificar os valores dentro de um array
// Serve para sabermos se todos os valores do array correspondem a um predicado (x.z == y)

const alunosDeFront = alunos2.every(function (item) {
  return item.curso == 'Frontend';
});
console.log(alunosDeFront);

//push() para adicionar item a um array
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
const todosOsAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosOsAlunosSaoDeFrontend);

//METODO some()

//Serve para verificar se pelo menos um item da array condiz com o predicado

const existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend';
});
console.log(existeAlgumAlunoDeBackend);

//2 condicoes ALUNO FULLSTACK &&
const existeAlgumAlunoFullStack = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);

//filter()

//serve para filtrar itens de um array. 
//Ex: lista de tarefas, retornar apenas as completadas; retornar apenas alunos de backend

const apenasAlunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});
console.log(apenasAlunosDeBackend);

//USANDO FUNCAO NAO ANONIMA

//passar uma FUNCAO COMO CALLBACK

function filtrarAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
const alunoDeBackendFiltrado = alunos2.filter(filtrarAlunosDeBackend);
console.log(alunoDeBackendFiltrado);

//METODO reduce()
//Serve para reduzirmos os itens de uma array em uma unica variavel
//Serve para agregar valores

//Ex com NUMEROS

const nums = [10, 20, 30, 10];

//2argumentos: 
const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;

  //acumulador comeca com 0
}, 0);
console.log(soma);

//FOR fAZENDO REDUCE

let somaComFor = 0;
for (let i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}
console.log(somaComFor);

//STRING COM REDUCE

const nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += `${itemAtual.nome} `;
  return acumulador;
}, '');
console.log(nomeDosAlunos);