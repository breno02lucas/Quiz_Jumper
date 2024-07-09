const c1a1 = {

    questao1: "Qual é a forma correta do verbo to be no presente simples para a terceira pessoa do singular?;am;is;are;be;c",
    questao2: "Qual é o antônimo da palavra happy?;glad;joyful;sad;delighted;c",
    questao3: "Qual é a forma no passado simples do verbo to go?;went;gone;go;going;a",
    questao4: "Qual é a tradução correta para apple em português?;banana;maçã;uva;pera;b",
    questao5: "Qual é o significado de dog em português?;gato;cachorro;peixe;pássaro;b",

    get getQuestoes()
    {
        let questoes =
        [
            Separar(this.questao1),
            Separar(this.questao2),
            Separar(this.questao3),
            Separar(this.questao4),
            Separar(this.questao5)
        ]

        return questoes
    }

}

function Separar(questao)
{
    let questaoDividida = questao.split(";")
    return questaoDividida
}


