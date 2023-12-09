//o arrow comeca aqui () =>{ }

const minhaFuncao = () =>{
    return "Diz ola";
}

//precisa chamar a funcao
console.log(minhaFuncao());


//Modo PRATICO

const minhaFuncaoPratica = () =>"Gosto de praticidade";

console.log(minhaFuncaoPratica())

//RETORNANDO UM OBJETO

//forma tradicional

const retornaUmCarro = () =>{
    return{
        modelo: 'Ka',
        fabricante: 'Ford'
    }
}

console.log(retornaUmCarro());

//arrow function

const retornaUmCarroComArrowFunction = () =>({
        modelo: 'Polo',
        fabricante: 'Volkswagen'
    }
)

console.log(retornaUmCarroComArrowFunction());


//MODO CONVENCIONAL2
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual){
    //objeto literal
    return { 
    nome:itemAtual,
    curso:'Backend'
    }
})

//FUNCAO COMUM
function filtrarAlunosDeBackend(aluno){
    return aluno.curso === 'Backend'
}

const alunoDeBackendFiltrado = alunos2.filter(filtrarAlunosDeBackend)

console.log(alunoDeBackendFiltrado);

//MODO COM ARROW FUNCTION
const alunos1 = ['Susy', 'Susy', 'Susy', 'Susy']

const alunos3 = alunos1.map(function(itemAtual){
    //objeto literal
    return { 
    nome:itemAtual,
    curso:'Backend'
    }
})

//ARROW FUNCTION COMECA AQUI
//quando se tem apenas UM argumento, pode omitir os ( )
const filtraAlunosDeBackend2 = alunos1 =>
    alunos1.curso ==='Backend'

const alunoDeBackendFiltrado2 = alunos3.filter(filtraAlunosDeBackend2)
console.log(alunoDeBackendFiltrado2);

/// NAO usar arrow function na orientacao a objeto (arrow function nao reconhece o THIS como na forma tradiconal)

const carro ={
    velocidadeAtual:40,
    acelerar: function(){ //metodo: modo tradicional 

        //this se refere a const carro

        this.velocidadeAtual += 10;
    },
    frear: () =>{  //arrow function dara UNDEFINED
        this.velocidadeAtual -= 10;
    },

    frear2: function(){  //arrow function dara UNDEFINED
        this.velocidadeAtual -= 30;
    }
}

//chamando as funcoes

carro.acelerar();
carro.frear(); // nao vai retornar nada
carro.frear2();

console.log(carro.velocidadeAtual);

//dara 20 porque ele acumula os resultados das funcoes
//40+10 = 50 // 50 - 30 =20
