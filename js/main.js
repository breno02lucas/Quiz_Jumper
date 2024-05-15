window.onload = (event) => {

    let path = window.location.pathname

    // Pop remove o último el. e o guarda
    let page = path.split("/").pop();
    console.log(page)
    
    // Switch de páginas
    switch(page)
    {
        case "loading.html":
            ConexaoInicial()
            break
        case "timer.html":
            Timer()
            break
        case "questao.html":
            Questao()
            break
    }
}

// CLASSCODE FUNÇÕES

function VerificarCodigoAula()
{
    const I_Code = document.getElementById("code")
    
    I_Code.addEventListener("keydown", function(event){

        if(event.key == "Enter")
        {      
            event.preventDefault();

            let codigo = I_Code.value
            
            // if para verificar se o codigo digitado 
            // é igual ao codigo
            // Se sim, vá para nickname.html

            if(VerificarCodigoDigitado(codigo))
            {                             
                location.href = "nickname.html"
            }            
        } 
    })    
}

function VerificarCodigoDigitado(codDigitado)
{
    const listaCodigos = ['C1A1', 'C1A2', 'C1A3']
    let resultado = false

    listaCodigos.forEach(element => {
        if (element == codDigitado)
        {
            VerificarCodigoCookie(codDigitado)
            resultado = true
            return false
        }
    })

    return resultado
}

function VerificarCodigoCookie(codigoAula)
{
    let codigo = sessionStorage.getItem("classcode")
    if(codigo == '' || codigo == null)
    {
        sessionStorage.setItem("classcode", codigoAula)
    }
}

// NICKNAME FUNÇÕES

function Nickname()
{
    // Criar uma variavel para pegar o valor do input
    let nickname = document.getElementById("nome")

    nickname.addEventListener("keydown", function(event){

        // Chequem se o evento foi um enter
        if(event.key == "Enter")
        {
            // pegar o valor de nickname
            let nick = nickname.value

            // cheque se o valor é valido, se for salve o valor
            let regex = /^[a-zA-Z]+$/
            if(regex.test(nick)) 
            {
                sessionStorage.setItem("nickname", nick)
                location.href = "loading.html"
            }
            else{
                alert("Digitar apenas letras!")
            }
        }

    })
}

// LOADING FUNÇÕES

function ConexaoInicial()
{
    let classcode = sessionStorage.getItem("classcode")
    let nickname = sessionStorage.getItem("nickname")

    // Verificar se ambos são válidos

    if (classcode != '' && classcode != null && nickname != '' && nickname != null) 
    {
        setInterval(() => {
            location.href = "timer.html"
        }, 1000);
    }
}

// TIMER FUNÇÕES

function Timer(){
    setInterval(() => {
        location.href = "questao.html"
    }, 5000);
}

// QUESTAO FUNÇÕES

function Questao()
{
    // DOM HTML
    const nomePlacar = document.getElementById("placar-nome")
    const scoresPlacar = document.getElementById("placar-pontos")
    const numQuestao = document.getElementById("num-questao")
    const enunciadoQuestao = document.getElementById("questao")
    const altA = document.getElementById("resposta1")
    const altB = document.getElementById("resposta2")
    const altC = document.getElementById("resposta3")
    const altD = document.getElementById("resposta4")

    // Variaveis das Questoes
    nome = sessionStorage.getItem("nickname")
    scores = 0
    
    // Atribuindo
    nomePlacar.innerHTML = nome
    scoresPlacar.innerHTML = scores + "pts"

    // Supondo que você tenha um arquivo chamado "arquivo.txt" no mesmo diretório que este código

    // Importa o módulo 'fs' (File System) para manipulação de arquivos
    const fs = require('fs');

    // Nome do arquivo que queremos ler
    const nomeArquivo = 'C1A1.txt';

    // Função para ler o arquivo
    function lerArquivo(nomeArquivo) {
        // Utiliza o método readFile do módulo fs para ler o arquivo
        fs.readFile(nomeArquivo, 'utf8', (err, data) => {
            if (err) {
                // Se houver um erro, imprime-o
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            // Se não houver erros, imprime o conteúdo do arquivo
            console.log('Conteúdo do arquivo:');
            console.log(data);
        });
    }
}