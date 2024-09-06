window.onload = (event) => {

    // Verificação
    let classcode = sessionStorage.getItem("classcode")
    let nickname = sessionStorage.getItem("nickname")

    if (classcode == '' || classcode == null || nickname == '' || nickname == null) 
    {
        location.href = "index.html"
    }

    // Elementos HTML
    const T_nome = document.getElementById("placar-nome")
    const N_pontos = document.getElementById("placar-pontos")
    const N_numQuestao = document.getElementById("num-questao")
    const T_questao = document.getElementById("questao")
    const B_res1 = document.getElementById("resposta1")    
    const B_res2 = document.getElementById("resposta2")    
    const B_res3 = document.getElementById("resposta3")    
    const B_res4 = document.getElementById("resposta4")
    const T_PontosFinais = document.getElementById("pontuacao-final")

    // Variaveis com valores iniciais
    let pontuacao = 0    
    let contadorQuestao = 1

    // DOM HTML
    T_nome.innerText = nickname
    N_pontos.innerText = pontuacao    
    N_numQuestao.innerText = contadorQuestao

    const questoes = c1a1.getQuestoes

    // Atribuindo aos elementos html, valores da questão 1
    AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    // Criar os listeners dos botões
    B_res1.addEventListener("mousedown", function(event){
        
        // Verificar se a alternativa clicada foi a correta
        pontuacao += VerificarResposta("a", questoes[contadorQuestao - 1][5])
        N_pontos.innerHTML = pontuacao + "pts"
        T_PontosFinais.innerHTML = pontuacao + "pts"
        Venceu(contadorQuestao)

        // Adicionar +1 ao contador de questão
        contadorQuestao++
        N_numQuestao.innerHTML = contadorQuestao

        // Ir para a próxima questão
        if (contadorQuestao <= 5)
            AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    })

    B_res2.addEventListener("mousedown", function(event){
        pontuacao += VerificarResposta("b", questoes[contadorQuestao - 1][5])
        N_pontos.innerHTML = pontuacao + "pts"
        T_PontosFinais.innerHTML = pontuacao + "pts"
        Venceu(contadorQuestao)

        // Adicionar +1 ao contador de questão
        contadorQuestao++
        N_numQuestao.innerHTML = contadorQuestao

        // Ir para a próxima questão
        if (contadorQuestao <= 5)
            AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    })

    B_res3.addEventListener("mousedown", function(event){
        pontuacao += VerificarResposta("c", questoes[contadorQuestao - 1][5])
        N_pontos.innerHTML = pontuacao + "pts"
        T_PontosFinais.innerHTML = pontuacao + "pts"
        Venceu(contadorQuestao)

        // Adicionar +1 ao contador de questão
        contadorQuestao++
        N_numQuestao.innerHTML = contadorQuestao

        // Ir para a próxima questão
        if (contadorQuestao <= 5)
            AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    })

    B_res4.addEventListener("mousedown", function(event){
        pontuacao += VerificarResposta("d", questoes[contadorQuestao - 1][5])
        N_pontos.innerHTML = pontuacao + "pts"
        T_PontosFinais.innerHTML = pontuacao + "pts"
        Venceu(contadorQuestao)

        // Adicionar +1 ao contador de questão
        contadorQuestao++
        N_numQuestao.innerHTML = contadorQuestao

        // Ir para a próxima questão
        if (contadorQuestao <= 5)
            AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    })
}

function VerificarResposta(altEscolhida, altCorreta)
{
    if (altEscolhida == altCorreta.replace(" ", ""))
    {     
        AninRespostaCorreta()
        return 100
    }    
    
    AninRespostaErrada()
    return 0
}

function AninRespostaErrada()
{
    var id = null;
    var elem = document.body
    var tempo = 0
    clearInterval(id)
    id = setInterval(RespostaErrada, 2)

    var audio = new Audio('./src/wrong.mp3');
    audio.play();

    function RespostaErrada()
    {
        if (tempo == 350){
            elem.classList.remove("body-anim-errado")
            clearInterval(id)
        }
        else{
            tempo++;
            elem.classList.add("body-anim-errado")
        }
    }
}

function AninRespostaCorreta()
{
    var id = null;
    var elem = document.body
    var tempo = 0
    clearInterval(id)
    id = setInterval(RespostaCorreta, 2)

    var audio = new Audio('./src/correct.mp3');
    audio.play();

    function RespostaCorreta()
    {
        if (tempo == 350){
            elem.classList.remove("body-anim-correto")
            clearInterval(id)
        }
        else{
            tempo++;
            elem.classList.add("body-anim-correto")
        }
    }
}

function AlternarQuestao(questoes, contador, enunciado, alt1, alt2, alt3, alt4)
{
    enunciado.innerText = questoes[contador - 1][0]
    alt1.innerText = questoes[contador - 1][1]
    alt2.innerText = questoes[contador - 1][2]
    alt3.innerText = questoes[contador - 1][3]
    alt4.innerText = questoes[contador - 1][4]
}

function TenteNovamente()
{
    window.location.reload()
}

function Home()
{
    sessionStorage.setItem("classcode", null)
    sessionStorage.setItem("nickname", null)

    window.location.href = "index.html"
}

function Print()
{
    html2canvas(document.getElementById("resultado")).then(canvas => {
        const B_Print = document.getElementById("btn-compartilhar")
        B_Print.href = canvas.toDataURL('image/png')
        B_Print.download = "Resultado do Quiz"
    })
}

function Venceu(contadorQuestao)
{
    if(contadorQuestao == 5)
    {
        const container = document.getElementsByClassName("container")
        const T_classcode = document.getElementsByClassName("code")

        container[0].style.display = "none"
        container[1].style.display = "none"
        container[2].style.display = "none"

        const resultado = document.getElementById("resultado")
        resultado.style.display = "block"

        T_classcode.innerHTML = sessionStorage.getItem("classcode").toUpperCase()
    }
}   