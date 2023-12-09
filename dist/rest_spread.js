//ARGUMENTS

//funcao com 2 argumentos (CASO NORMAL)
function somar(a, b) {
  return a + b;
}
console.log(somar(10, 20));

// FUNCAO COM MAIS DE 2 ARGUMENTOS

//ARGUMENTS palavra reservada para receber infitimos argumentos
//arguments soh serve pra ARGUMENTOS e nao arrays
function somar1() {
  console.log(arguments);
}
console.log(somar1(10, 20));

//funcao que soma n argumentos

function somar3() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar3(10, 20, 30, 60));

//REST
//faz o papel do arguments mas com arrays
//...numeros (significa um numero infitino de argumentos)
// o argumento do rest sempre precisa ficar POR ULTIMO
// (nome, idade, ...numeros)

function somarComRest(...numeros) {
  const soma1 = numeros.reduce((total, numeroATual) => {
    total += numeroATual;
    return total;
  }, 0);
  return soma1;
}
console.log(somarComRest(10, 20, 30));

//SPREAD
//Usa para fazer concatenacoes, consoles, preenchimentos de objetos
// ...nomedaconstcomarray

const numeros = [1, 2, 3, 4];
console.log(...numeros);

//UNINDO DUAS ARRAYS EM UMA CONST com CONCAT()

//Com a funcao concat()

const timesDeFutebolDeSP = ['Corinthians', 'Santos', 'Palmeiras', 'Bragantino'];
const timesDeFutebolDoRio = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo'];
const timesDeFutebol = timesDeFutebolDeSP.concat(timesDeFutebolDoRio);
console.log(timesDeFutebol);

//UNINDO ARRAYS COM SPREAD

const timesDeFutebolComSpread = [...timesDeFutebolDeSP, ...timesDeFutebolDoRio];
console.log(timesDeFutebolComSpread);

//Usando SPREAD para reutilizar as propriedade em um objeto em outro objeto
const carroDaJulia = {
  modelo: 'Gol',
  marca: 'Volkswagen',
  motor: 1.6
};
const carroDaAna = {
  ...carroDaJulia,
  motor: 1.8
};
console.log(carroDaAna);

//DESESTRUTURACAO

//podemos pegar a propriedade de um objeto e atribuir em outro

//modo normal

const motorDoCarroDaAna = carroDaAna.motor;
console.log(motorDoCarroDaAna);

//DESESTRUTURACAO

const {
  motor: motorDoCarrodDaAna2
} = carroDaAna;
const {
  motor: motorDoCarroDaJulia
} = carroDaJulia;
console.log(motorDoCarrodDaAna2);
console.log(motorDoCarroDaJulia);

//DESESTRUTURACAO TIMES
const timesDeFutebolDeSP1 = ['Corinthians', 'Santos', 'Palmeiras', 'Bragantino'];
const timesDeFutebolDoRio1 = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo'];
const timesDeFutebol1 = timesDeFutebolDeSP1.concat(timesDeFutebolDoRio1);
const [item1, item2, item3] = timesDeFutebol1;
console.log(item1);
console.log(item2);
console.log(item3);

//DESESTRUTURACAO + REST para pegar todos os itens das arrays

const [...outrosTimes] = timesDeFutebol1;
console.log(outrosTimes);