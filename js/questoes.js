function Separar(questao)
{
    let questaoDividida = questao.split(";")
    return questaoDividida
}

// AULAS

const c1a1 = {
    questao1: "Qual é a tradução correta para 'Hello'?;Adeus;Olá;Obrigado;Desculpa;b",
    questao2: "Qual destas opções é uma despedida informal?;Good morning;Goodbye;See you later;Good night;c",
    questao3: "Complete a frase: 'How are you?' - 'I'm ...';fine;thank you;hello;good;a",
    questao4: "Qual destas expressões é usada para cumprimentar alguém pela manhã?;Good night;Good afternoon;Good evening;Good morning;d",
    questao5: "Qual é a tradução correta para 'See you soon'?;Até breve;Até logo;Tchau;Até amanhã;a",

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

const c1a2 = {
    questao1: "Qual é a nacionalidade de alguém da Espanha?;Spanish;Spaniard;Spain;Spanner;a",
    questao2: "Complete a frase: 'I am from Japan. I am ...';Japanese;Japan;Japane;Japonese;a",
    questao3: "Qual é o país de alguém que é 'Canadian'?;Canada;Canadia;Canadese;Cana;a",
    questao4: "Qual das opções é uma nacionalidade?;Brazil;Argentina;French;London;c",
    questao5: "Qual é a tradução correta para 'England' em português?;Inglaterra;França;Espanha;Itália;a",

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


const c1a3 = {
    questao1: "Complete a frase: 'I ... a teacher.';is;are;am;be;c",
    questao2: "Qual é o possessivo correto para 'They'?;Their;They're;Theirs;Them;a",
    questao3: "Complete com a forma correta do verbo to be: 'She ... happy.';am;are;is;be;c",
    questao4: "Qual destas frases usa corretamente o possessivo?;This is mine book;That is her car;They are theirs friends;This is my's house;b",
    questao5: "Complete a frase: 'We ... from Brazil.';is;am;are;be;c",    

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

const c1a4 = {
    questao1: "Complete a frase: 'He ... from France.';is;are;am;be;a",
    questao2: "Qual é o possessivo correto para 'I'?;Mine;My;Me;I'm;b",
    questao3: "Complete a frase: 'She is ... England.';in;from;to;on;b",
    questao4: "Qual é a nacionalidade de alguém da Itália?;Italian;Italish;Itali;Italien;a",
    questao5: "Complete com o possessivo correto: 'This is ... book.';you;your;yours;you're;b",    

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

const c1a5 = {
    questao1: "Qual é a forma correta para o número 15 em inglês?;fiveteen;fifteen;fivteen;fiftin;b",
    questao2: "Complete com a palavra correta: 'My phone number is ...';four-ty;forty;fourteen;four;b",
    questao3: "Qual das formas é a tradução de Endereço?;Age;Address;Name;Phone Number;b",
    questao4: "Qual é o número 23 em inglês?;twenty-three;twenty-second;thirty-three;twenteen;a",
    questao5: "Complete a frase: 'I am ... years old.';twenty;twenties;twent;twenth;a",    

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


const c1a6 = {
    questao1: "Complete a frase: 'I have ... brothers.';three;third;threes;tree;a",
    questao2: "Qual é a forma correta do número 12 em inglês?;twelve;twelf;twenty;twelfth;a",
    questao3: "Como se diz 'pai' em inglês?;Brother;Uncle;Father;Grandfather;c",
    questao4: "Complete a frase: 'She has ... sisters.';five;fifth;fiveth;fifty;a",
    questao5: "Qual é a tradução correta de 'avó' em inglês?;Grandmother;Aunt;Mother;Sister;a",    

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

const c1a7 = {
    questao1: "Qual é a cor de uma banana?;Red;Yellow;Green;Blue;b",
    questao2: "Complete a frase: 'The sky is ... today.';yellow;green;blue;black;c",
    questao3: "Qual destas é a cor de uma maçã?;Purple;Green;Yellow;Red;d",
    questao4: "Complete a frase: 'This is ... book;blue;a;an;heavy;b",
    questao5: "Qual é a cor associada ao fogo?;Blue;Green;Red;White;c",    

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




