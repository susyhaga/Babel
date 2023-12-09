//funcao construtora simples



// function Pokemon1(nomeDoPokemon1, tipoDoPokemon1){
//     this.nome1 = nomeDoPokemon1,
//     this.tipo1 = tipoDoPokemon1
// }

// const pikachu1 = new Pokemon1('Pikachu1', 'eletrico1')

// console.log(pikachu1);

//..........................................................

//FUNCAO CONSTRUTORA = CLASSE no JS

// class Pokemon{
//     nome = '';
//     tipo = '';
// }

// const pikachu = new Pokemon();
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'eletrico';

// console.log(pikachu);

// ..................................................................
//FUNCAO CONSTRUTORA = CLASSE com CONSTRUCTOR
// class Pokemon{
//     constructor(nomeDoPokemon, tipoDoPokemon){
//         this.nome = nomeDoPokemon;
//         this.tipo = tipoDoPokemon;
//     }
// }

// const pikachu = new Pokemon('pikachu', 'eletrico');

// console.log(pikachu);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//METODO

// class Pokemon{
//     constructor(nomeDoPokemon, tipoDoPokemon){
//         this.nome = nomeDoPokemon;
//         this.tipo = tipoDoPokemon;
//     }

//     //metodo

//     atacar(nomeDoAtaque){
//         console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
//     }
// }

// const pikachu = new Pokemon('Pikachu', 'eletrico');
// pikachu.atacar('Choque do trovao')

// console.log(pikachu);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//HERANCA = EXTENDS + METODO (ATACAR)

// class Pokemon{
//     constructor(nomeDoPokemon, tipoDoPokemon){
//         this.nome = nomeDoPokemon;
//         this.tipo = tipoDoPokemon;
//     }

//     //metodo

//     atacar(nomeDoAtaque){
//         console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
//     }
// }

// class Pikachu extends Pokemon{
// }

//     //intancias
// const pikachuDoAsh = new Pikachu('pikachu', 'eletrico');
// const pikachu = new Pokemon('pikachu', 'eletrico');

// pikachu.atacar('Choque na bunda');
// pikachuDoAsh.atacar('a Bunda')
//     //chamando
// console.log(pikachu);
// console.log(pikachuDoAsh);
// console.log(pikachuDoAsh instanceof Pikachu);
// console.log(pikachuDoAsh instanceof Pokemon);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SUPER() metodo que pega o construtor da classe mae
//POLIMORFISMO

// class Pokemon{
//     constructor(nomeDoPokemon, tipoDoPokemon){
//         this.nome = nomeDoPokemon;
//         this.tipo = tipoDoPokemon;
//     }


//     //metodo

//     atacar(nomeDoAtaque){
//         console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
//     }
// }
// //super()

// class Pikachu extends Pokemon{
//     constructor(){
//         super('Pikachu', 'Eletrico')
//     }
//     //polimorfismo
//     atacar(){
//         console.log(`${this.nome} atacou com choque na bunda`)
//     }
// }

//     //intancias
// const pikachuDoAsh = new Pikachu();
// pikachuDoAsh.atacar();

// const pikachu = new Pokemon('pikachu', 'eletrico');

// pikachu.atacar('choque no cu');

//     //chamando
// console.log(pikachu);
// console.log(pikachuDoAsh);
// console.log(pikachuDoAsh instanceof Pikachu);
// console.log(pikachuDoAsh instanceof Pokemon);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////ENCAPSULAMENTO 

//O encapsulamento funciona com a utilização de modificadores de acesso para 
//restringir o acesso aos atributos e aos métodos de um objeto. Garante que somente as classes apropriadas possam acessar 
//as informações e ajuda a assegurar que os atributos e os métodos sejam usados de forma consistente e previsível.

class Pokemon{
    //comeca aqui o encapsulamento
    // # => privado
    //para acessar o conteudo privado eh preciso criar um novo metodo: exibeHP()
    #hp = 100;
    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }


    //metodo

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
    //metodo do encapsulamento

    recebeuAtaque(){
        this.#hp -= 10;
    }

    //metodo que acessa o conteudo privado
    exibeHp(){
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon{
    constructor(){

        //super()
        super('Pikachu', 'Eletrico')
    }
    //polimorfismo
    atacar(){
        console.log(`${this.nome} atacou com choque na bunda`)
    }
}

    //intancias
const pikachuDoAsh = new Pikachu();

//usando o metodo RECEBEUATAQUE

pikachuDoAsh.recebeuAtaque();

//nao altera o estado natural  do conteudo privado de (hp  = 100 )
//aquui estamos criando um novo atributo  hp

//pikachuDoAsh.hp = 5000;

//checando estado atual
console.log(pikachuDoAsh.hp)


pikachuDoAsh.atacar();

//chamando o metodo com conteudo PRIVADO
pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('pikachu', 'eletrico');

pikachu.atacar('choque no cu');

    //chamando
console.log(pikachu);
console.log(pikachuDoAsh);
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);