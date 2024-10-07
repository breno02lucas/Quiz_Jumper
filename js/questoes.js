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

const c1a9 = {
    questao1: "Complete a frase afirmativa: 'He ... to school every day.';goes;go;going;gone;a",
    questao2: "Complete a frase negativa: 'She ... like pizza.';don't;isn't;aren't;doesn't;d",
    questao3: "Qual é a forma correta no afirmativo para 'They ... football on Sundays.';plays;play;played;playing;b",
    questao4: "Complete a frase negativa: 'We ... have a car.';not;doesn't;don't;aren't;c",
    questao5: "Qual das frases está correta no afirmativo?;She don't go to work.;He goes to work.;They doesn't like coffee.;I doesn't play soccer.;b",

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

const c1a10 = {
    questao1: "Qual é o primeiro dia da semana em inglês?;Monday;Sunday;Saturday;Friday;a",
    questao2: "Complete a frase: 'Today is ...' (segunda-feira).;Tuesday;Sunday;Monday;Friday;c",
    questao3: "Qual dessas opções indica 'meia-noite' em inglês?;Midday;Midnight;Noon;Evening;b",
    questao4: "Complete a frase: 'There are ... days in a week.';five;six;seven;eight;c",
    questao5: "Qual é o dia da semana após 'Wednesday'?;Thursday;Tuesday;Saturday;Friday;a",

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

const c1a11 = {
    questao1: "Complete a frase: 'I have a meeting ... Monday.';in;on;at;to;b",
    questao2: "Qual preposição correta para 'She is ... the car.'?;on;at;in;over;c",
    questao3: "Complete a frase: 'The party is ... 7 PM.';on;in;at;by;c",
    questao4: "Qual é a preposição correta para 'We live ... Brazil.'?;at;in;on;by;b",
    questao5: "Complete a frase: 'I always wake up early ... the morning.';at;on;in;from;c",

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

const c1a13 = {
    questao1: "Complete a frase: 'She wears a ... to the office every day.';shirt;book;pencil;bag;a",
    questao2: "Qual das seguintes opções é uma peça de roupa?;Table;Shoes;Pen;Phone;b",
    questao3: "Complete a frase: 'He ... wears a hat.';always;sometimes;never;all the time;a",
    questao4: "Qual é o objeto que você usa para escrever?;Shirt;Notebook;Pencil;Jacket;c",
    questao5: "Complete a frase: 'I ... wear a jacket in summer.';always;never;often;sometimes;b",


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

const c1a14 = {
    questao1: "Complete a frase: 'This is ... pen.';mine;my;me;I;b",
    questao2: "Qual possessivo está correto para 'They'?;Their;They're;Them;There;a",
    questao3: "Complete a frase: 'That is ... book on the table.';his;he;her;him;a",
    questao4: "Qual das opções é um objeto?;Shoes;His;Their;Mine;a",
    questao5: "Complete a frase: 'Is this ... laptop?' (perguntando para ela);her;she;hers;he;c",


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

const c1a15 = {
    questao1: "Qual palavra 'W' usamos para perguntar sobre uma pessoa?;What;When;Who;Where;c",
    questao2: "Complete a frase: '... is your favorite color?';Who;When;What;Where;c",
    questao3: "Qual das palavras 'W' é usada para perguntar sobre tempo?;Why;When;Where;Which;b",
    questao4: "Complete a frase: '... do you live?' (perguntando sobre localização);What;When;Where;Why;c",
    questao5: "Qual das opções é usada para perguntar sobre uma razão ou motivo?;Which;Who;Why;What;c",

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

const c1a17 = {
    questao1: "Complete a frase: 'She is a ... She works in a hospital.';teacher;doctor;chef;police officer;b",
    questao2: "Qual destas profissões trabalha em uma escola?;Nurse;Chef;Teacher;Pilot;c",
    questao3: "Complete a frase: 'A ... flies airplanes.';doctor;engineer;pilot;waiter;c",
    questao4: "Qual das profissões trabalha em um restaurante?;Doctor;Chef;Farmer;Teacher;b",
    questao5: "Complete a frase: 'He is a ... He writes for a newspaper.';reporter;firefighter;musician;builder;a",

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

const c1a18 = {
    questao1: "Complete a frase: 'In my free time, I like to ... books.';read;write;watch;play;a",
    questao2: "Qual destas atividades você pode fazer no seu tempo livre?;Work;Sleep;Study;Cook;b",
    questao3: "Complete a frase: 'They ... play soccer on weekends.';always;never;sometimes;every;c",
    questao4: "Qual dessas opções é um hobby comum?;Sleeping;Running;Eating;Cleaning;b",
    questao5: "Complete a frase: 'She ... to the gym in her free time.';go;goes;going;gone;b",

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

const c1a19 = {
    questao1: "Complete a frase: 'I ... swim very well.';can;can't;am;are;a",
    questao2: "Qual a forma negativa correta de 'can'?;cann't;can't;cannot;can not;b",
    questao3: "Complete a frase: 'She ... play the piano, but not the guitar.';can;can't;is;are;a",
    questao4: "Qual destas frases está correta?;He can speaks English.;He can speak English.;He cans speak English.;He can speaking English.;b",
    questao5: "Complete a frase: 'They ... come to the party because they are busy.';can;can't;could;cannot;b",    

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

const c1a21 = {
    questao1: "Complete a frase: 'There are ... apples on the table.';some;any;a few;many;a",
    questao2: "Qual é a forma correta para uma frase negativa?;There are some bananas.;There is some bananas.;There aren't any bananas.;There isn't some bananas.;c",
    questao3: "Complete a frase: 'Do you have ... oranges?' (pergunta);some;any;many;a few;b",
    questao4: "Qual das opções é uma fruta?;Potato;Tomato;Banana;Carrot;c",
    questao5: "Complete a frase: 'There ... any strawberries in the fridge.';isn't;aren't;is;are;b",

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

const c1a22 = {
    questao1: "Qual destas opções é um tipo de carne?;Broccoli;Chicken;Apple;Rice;b",
    questao2: "Complete a frase: 'I love eating ... for breakfast.';cereal;cake;steak;ice cream;a",
    questao3: "Qual é a fruta que tem casca amarela?;Orange;Banana;Grape;Apple;b",
    questao4: "Complete a frase: 'He doesn't like ...';vegetables;chocolate;fruit;meat;a",
    questao5: "Qual é a bebida comum em festas?;Milk;Water;Juice;Soda;d",


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

const c1a23 = {
    questao1: "Complete a frase: 'I have ... apple in my bag.';a;an;some;any;b",
    questao2: "Qual a forma correta para a frase negativa?;I don't have some friends.;I don't have any friends.;I have not any friends.;I have no friends.;b",
    questao3: "Complete a frase: 'There are ... bananas on the table.';some;any;a few;many;a",
    questao4: "Qual das opções é um substantivo incontável?;Book;Chair;Water;Dog;c",
    questao5: "Complete a frase: 'She wants to buy ... orange.';an;a;some;any;b",    

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

const c1a25 = {
    questao1: "Complete a frase: 'I ... a book right now.';read;reads;am reading;is reading;c",
    questao2: "Qual é a forma correta da frase?;They is playing soccer.;They are playing soccer.;They playing soccer.;They are play soccer.;b",
    questao3: "Complete a frase: 'She ... dinner at the moment.';cooking;is cooking;are cooking;am cooking;b",
    questao4: "Qual das opções está correta?;He is not watching TV.;He aren't watching TV.;He isn't watches TV.;He isn't watching TV.;d",
    questao5: "Complete a frase: 'We ... to the park tomorrow.';go;are going;goes;is going;b",

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

const c1a26 = {
    questao1: "Qual é o lugar onde você pode ver filmes?;Library;Cinema;Museum;Park;b",
    questao2: "Complete a frase: 'I bought some groceries at the ...';supermarket;hospital;bank;restaurant;a",
    questao3: "Qual destes lugares é usado para aprender?;School;Hotel;Restaurant;Park;a",
    questao4: "Complete a frase: 'The ... is a good place to have fun.';museum;zoo;theater;library;b",
    questao5: "Qual lugar você visitaria para ver arte?;Gallery;Stadium;Factory;Airport;a",

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

const c1a27 = {
    questao1: "Qual lugar é conhecido por abrigar várias espécies de animais?;Zoo;Library;School;Market;a",
    questao2: "Complete a frase: 'You can buy clothes at the ...';supermarket;mall;hospital;airport;b",
    questao3: "Qual lugar é ideal para ver peças de teatro?;Cinema;Theater;Museum;Park;b",
    questao4: "Complete a frase: 'The ... is where you can get a flight.';bus station;hotel;airport;supermarket;c",
    questao5: "Qual lugar você frequenta para se exercitar?;Gym;Library;Restaurant;School;a",
    
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

const c1a29 = {
    questao1: "Complete a frase: 'Yesterday, the weather ... sunny.';was;is;were;be;a",
    questao2: "Qual é o adjetivo correto para descrever algo muito grande?;Small;Tall;Big;Short;c",
    questao3: "Complete a frase: 'They ... happy to see us last week.';was;were;is;are;b",
    questao4: "Qual das opções é um adjetivo?;Run;Blue;Jump;Walk;b",
    questao5: "Complete a frase: 'She was ... tired after the trip.';very;too;so;much;a",
    
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

const c1a30 = {
    questao1: "Qual é o passado simples do verbo 'play'?;played;play;playing;plays;a",
    questao2: "Complete a frase: 'Yesterday, I ... a book.';read;readed;reads;reading;a",
    questao3: "Qual é o passado simples do verbo 'go'?;went;goed;going;gone;a",
    questao4: "Complete a frase: 'She ... her homework last night.';do;did;does;done;b",
    questao5: "Qual é o passado simples do verbo 'like'?;liked;like;likes;liking;a",
    
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

const c1a31 = {
    questao1: "Qual é o passado simples do verbo 'eat'?;ate;eated;eats;eating;a",
    questao2: "Complete a frase: 'They ... to the beach last summer.';goed;went;gone;go;b",
    questao3: "Qual é o passado simples do verbo 'see'?;saw;see;seen;seeing;a",
    questao4: "Complete a frase: 'He ... a beautiful painting yesterday.';painted;paints;paint;painted;b",
    questao5: "Qual é o passado simples do verbo 'take'?;took;taken;take;tooken;a",
    
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

const c1a32 = {
    questao1: "Qual é o passado simples do verbo 'eat'?;ate;eated;eats;eating;a",
    questao2: "Complete a frase: 'They ... to the beach last summer.';goed;went;gone;go;b",
    questao3: "Qual é o passado simples do verbo 'see'?;saw;see;seen;seeing;a",
    questao4: "Complete a frase: 'He ... a beautiful painting yesterday.';painted;paints;paint;painted;b",
    questao5: "Qual é o passado simples do verbo 'take'?;took;taken;take;tooken;a",
    
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








