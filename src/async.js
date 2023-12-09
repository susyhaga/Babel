//criando Promise

//resolve/fulfilled  = executa em caso de sucesso
//reject = executa em caso de falha

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) =>{

    //try ===> O try consegue recuperar erros que possam ocorrer no código fornecido em seu bloco.
    try{
        let execucoes = 0;
        for(let i=0;i<1000000000; i++){
            execucoes++;
        }
        resolve(execucoes);
    //catch() ===>  catch por sua vez faz o tratamento dos erros que aconteceram.
    }catch(e){
        reject("Deu erro na iteracao dos numeros")
    }
})

//console.log("inicio")

//funcaoo .then() =>O método then() em JavaScript foi definido
// na API Promise e é usado para lidar com tarefas assíncronas, como uma chamada de API. 

//usando catch() para tratar o erro
//funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

//console.log("fim");

//Tornando a funcao assincrona em sincrona de novo

//async e await 

// async function execucaoPrincipal(){
//     console.log("inicio");
//     await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
//     console.log("fim");

// }
//execucaoPrincipal();

//PASSANDO PARAMETROS PARA UMA PROMISE
//login e senha = parametros
const promiseComParametros = (login, senha) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`Login do usuario: ${login}`)
        },3000)
    })
}


//outra forma de usar o AWAIT

async function execucaoPrincipal(){
    console.log("inicio");

    promiseComParametros("susyhg87@gmail.com", 1234).then(resultado =>{
        console.log(resultado);

    })

    try{
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    }catch(e){
        console.log(e);
    }
    console.log("fim");
}

execucaoPrincipal();



