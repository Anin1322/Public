const nome = "Erick Gonçalves";
let nome2= "";
let pessoaDefault = {
    nome: "Erick",
    idade: "24",
    trabalho: "Dev"
}

let nomes = ["Julio","Erick","Ambrosio","Juskleiton"];
let pessoas = [
    {
    nome: "Erick",
    idade: "24",
    trabalho: "Dev"
        
    },
    {
    nome: "Julio",
    idade: "25",
    trabalho: "Feirante"
        
    },
    {
    nome: "Ambrosio",
    idade: "19",
    trabalho: "Bancário"  
    }
];

function alterarNome() {
    nome2 = "Maira";
    console.log("valor alterado");
console.log(nome2);
}


function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome");
console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
    
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}


adicionarPessoa({
    nome: "Otavio",
    idade: "32",
    trabalho: "Professor"
})

function imprimirPessoas(){
    pessoas.forEach((item) =>{

        console.log("----------- Imprimir Pessoas ")

        console.log("Nome:")
        console.log(item.nome)
        
        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho);

       // console.log(item);
    
    })

}

imprimirPessoas();
//console.log(pessoas)
//console.log(nomes[0]);
//imprimirPessoa(pessoaDefault);

/*imprimirPessoa({
    nome: "Lucio",
    idade: "45",
    trabalho: "Jogador"
});*/
//recebeEalteraNome("Miqueias");
//recebeEalteraNome("Jessica")
//alterarNome();