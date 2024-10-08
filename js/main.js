window.onload = (event) => {

    let path = window.location.pathname
    let page = path.split("/").pop()

    switch (page) {
        case "index.html":
            break

        case "nickname.html":
            break

        case "loading.html":
            ConexaoInicial()
            break

        case "timer.html":
            Timer()
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

            if(VerificarCodigoDigitado(codigo.toUpperCase()))
            {                             
                location.href = "nickname.html"
            }            
        } 
    })    
}

function VerificarCodigoDigitado(codDigitado)
{
    const listaCodigos = ['C1A1', 'C1A2', 'C1A3', 'C1A4', 'C1A5', 'C1A6', 'C1A7','C1A9', 'C1A10','C1A11', 'C1A13', 'C1A14','C1A15', 'C1A17', 'C1A18', 'C1A19', 'C1A21', 'C1A22', 'C1A23', 'C1A25', 'C1A26', 'C1A27', 'C1A29', 'C1A30', 'C1A31', 'C1A33', 'C1A34', 'C1A35', 'C1A37', 'C138', 'C1A39']
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
    let classcode = sessionStorage.getItem("classcode")

    if(classcode == '' || classcode == null)
    {
        location.href = "index.html"
    }

    // Criar uma variavel para pegar o valor do input
    let nickname = document.getElementById("nome")

    nickname.addEventListener("keydown", function(event){

        // Chequem se o evento foi um enter
        if(event.key == "Enter")
        {
            // pegar o valor de nickname
            let nick = nickname.value

            sessionStorage.setItem("nickname", nick)
            location.href = "loading.html"

            // cheque se o valor é valido, se for salve o valor
            /*let regex = /^[a-zA-Z]+$/
            if(regex.test(nick)) 
            {
                
            }
            else{
                alert("Digitar apenas letras!")
            }*/
        }

    })
}

// LOADING FUNÇÕES

function ConexaoInicial()
{
    let classcode = sessionStorage.getItem("classcode")
    let nickname = sessionStorage.getItem("nickname")

    // Verificar se ambos são válidos

    if (classcode == '' || classcode == null || nickname == '' || nickname == null) 
    {
        location.href = "index.html"
    }
    else{
        setInterval(() => {
            location.href = "timer.html"
        }, 3000);
    }
}

// TIMER FUNÇÕES

function Timer()
{
    // Avisa a turma para adicionar as variaveis aqui
    let classcode = sessionStorage.getItem("classcode")
    let nickname = sessionStorage.getItem("nickname")

    // Explicar erro lógico
    if (classcode == '' || classcode == null || nickname == '' || nickname == null) 
    {
        location.href = "index.html"
    }

    setInterval(() => {
        location.href = "questao.html"
    }, 5000);
}
