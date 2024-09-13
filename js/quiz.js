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
    const B_Audio = document.getElementById("b-playaudio")

    // Variaveis com valores iniciais
    let pontuacao = 0    
    let contadorQuestao = 1
    let isaudioback = false    
    let tempo = 120;

    // DOM HTML
    T_nome.innerText = nickname
    N_pontos.innerText = pontuacao    
    N_numQuestao.innerText = contadorQuestao

    // Audios    
    audio_background = new Audio('./src/background.mp3')

    // Questão
    const c1 = [c1a1, c1a2, c1a3, c1a4, c1a5, c1a6, c1a7]
    const questoes = EscolherQuestao(classcode, c1).getQuestoes

    // Atribuindo aos elementos html, valores da questão 1
    AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    // Criar os listeners dos botões
    B_res1.addEventListener("mousedown", function(event){
        
        // Verificar se a alternativa clicada foi a correta
        pontuacao += VerificarResposta("a", questoes[contadorQuestao - 1][5])
        N_pontos.innerHTML = pontuacao + "pts"
        T_PontosFinais.innerHTML = pontuacao + "pts"
        Venceu(contadorQuestao, tempo)

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
        Venceu(contadorQuestao, tempo)

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
        Venceu(contadorQuestao, tempo)

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
        Venceu(contadorQuestao, tempo)

        // Adicionar +1 ao contador de questão
        contadorQuestao++
        N_numQuestao.innerHTML = contadorQuestao

        // Ir para a próxima questão
        if (contadorQuestao <= 5)
            AlternarQuestao(questoes, contadorQuestao, T_questao, B_res1, B_res2, B_res3, B_res4)

    })

    // Som de fundo
    B_Audio.addEventListener("mousedown", function(event)
    {
        isaudioback = !isaudioback

        if (isaudioback == true)
        {        
            audio_background.play()

            B_Audio.style.backgroundColor = "#95a80d"
        }
        else{
            audio_background.pause()

            document.getElementById("b-playaudio").style.backgroundColor = "#e0ff00"
        }
        
    })

    // Countdown
    function Timer(){
        var timer = setInterval(function(){
            document.getElementById('tempo-max').innerHTML= tempo + "s";
            tempo--;
            if (tempo < 0) {
                clearInterval(timer);

                Venceu(contadorQuestao, tempo)
            }
        }, 1000);
    }

    Timer()
}

function EscolherQuestao(codigo, curso)
{
    classnumber = parseInt(codigo[3], 10) - 1
    return curso[classnumber]
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

function Venceu(contadorQuestao, tempo)
{
    if(contadorQuestao == 5 || tempo <= 0)
    {
        const container = document.getElementsByClassName("container")
        const T_classcode = document.getElementById("code")
        const T_nickname = document.getElementById("name")

        container[0].style.display = "none"
        container[1].style.display = "none"
        container[2].style.display = "none"
        
        const resultado = document.getElementById("resultado")
        resultado.style.display = "block"

        T_classcode.innerHTML = sessionStorage.getItem("classcode").toUpperCase()
        T_nickname.innerHTML = sessionStorage.getItem("nickname")
    }
}   

