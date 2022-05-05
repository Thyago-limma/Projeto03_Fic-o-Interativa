const prompt = require(`prompt-sync`)();

console.clear(); //Console.clear para limpar o terminal, e obter uma maior visibilidade.

//Console.log pra Contar a História do Jogo
console.log(`\x1b[31m
Em 1888, Por Volta das 3:33 da Madrugada, Em um  hospício. Um Médico Muito Renomado Teve Um Surto Psicótico,
e Acabou Matando com um Bisturi, Vários dos Pacientes que Ali se Encontravam. Logo Depois de Ter Feito Isso.
O Médico Decidiu Tirar Sua Própria Vida,Desde Então Esse Hospício se Encontra Abandonado.
Hoje em Dia Escutam Várias Histórias de Pessoas que Passam na Frente Daquele Hospício.
\x1b[0m`);

//Variavel pra Pedir o Nome do Personagem.
let nome = prompt(`\x1b[33m Qual o Nome do Seu Personagem? \x1b[0m`);

//Objeto que Define o Nome e o Status Atual do Personagem
let personagem = {
    Nome: nome,
    Sanidade: 100,
    Coragem: 100,
    Vida: 100,

    //Função para exibir o status do personagem quando for chamada.
    exibirStatus: function () {
        console.log(
            `\x1b[34m Seu Nome é: ${this.Nome} \n Sua Sanidade é: ${this.Sanidade} \n Sua Coragem é: ${this.Coragem} \n Sua Vida é: ${this.Vida} \x1b[0m`,
        );
    },
};

console.clear(); //Console.clear para limpar o terminal, e obter uma maior visibilidade.

//Lista do periodo que se Passa o Jogo,com um espaço vazio. pra quando terminar o jogo, o Usuário Decidir se Quer Voltar a Hora Zero.
let horas = ['Primeira_Hora', 'Segunda_Hora', 'Terceira_Hora', , 'Hora_Zero'];

//Arrow Function pra Dar Uma Pausa no Jogo e Continuar Quando o Usuário Pressionar Enter
const intervalo = () => prompt(`Pressione ENTER Pra Continuar`);

//Arrow Function Para Quando a Escolha For Errada,Imprimir na Tela.
const escolhaInvalida = () => console.log(`\x1b[30m Opção Inválida. \x1b[0m`);

//Váriavel Para Reiniciar o jogo Dentro do Loop
let restart = 0;

function alterarStatus(p1, p2, p3) {
    (personagem.Sanidade = p1),
        (personagem.Coragem = p2),
        (personagem.Vida = p3);
}

//Função Caso a Escolha do Usuário Leve ao Fim do Jogo
function gameover() {
    //Variavel Para Perguntar ao Usuário se Ele Deseja Jogar Novamente
    let escolha = prompt(
        `\x1b[33m Deseja Voltar Novamente Para o Começo da ${horas[i]} SIM ou NAO \x1b[0m`,
    ).toUpperCase();

    console.clear(); //Console.clear Para Limpar o Terminal e Dar Maior Visbilidade

    //Validação da Escolha do Usuario
    while (escolha != 'SIM' && escolha != 'NAO') {
        escolhaInvalida(); //Chamando a Função escolhaInvalida

        escolha = prompt(
            `\x1b[33m Deseja Jogar Novamente? SIM ou NAO \x1b[0m `,
        ).toUpperCase(); //Repetindo a Pergunta Até a Escolha Ser "SIM" ou "NAO"

        console.clear();
    }

    if (escolha == 'NAO') {
        //Condicao Para Reiniciar o Jogo Novamente
        restart = 1;
    }

    console.clear();
}

//Final Alternativo Caso o Jogador Escolha a Opção que Leve Até Ele
function Final1() {
    console.log(` \x1b[32m

Seu Chefe te Liberou do Serviço. Você Voltou Para Casa, e Nunca Mais Aceitou Nenhum Trabalho 
que Envolvesse Lugares Abandonadas. Ainda Mais Depois de Ter Lido Sobre a História Bizarra por Trás
Daquele Hospício

\x1b[0m `);

    //Determinando Manualmente O Status Atualdo Personagem.
    alterarStatus(100, 0, 100);

    personagem.exibirStatus(); //Chamando a Função Exibir Status Pra Exibir o Status do Personagem
    //Agora Modificado de Acordo com a Escolha Dele

    console.log(`\n Fim de Jogo Pra Você ${personagem.Nome} Obrigado por Jogar! \n`); //Mensagem de Fim de Jogo

    return gameover();
}

//Final Alternativo 2
function Final2() {
    console.log(`\x1b[32m
  
  Você Tenta de Toda Forma Sair da Sala Mas Não Consegue. Assim o Fantasma do Médico
  Lhe Esquarteja com um Bisturi. Gritando e Sendo Fatiado aos Poucos, Você Ver Toda a Sua Vida Passar Diante de 
  Seus Olhos. 
  
 \x1b[0m `);

    alterarStatus(15, 30, 0);

    personagem.exibirStatus();

    console.log(` \n Fim de Jogo Pra Você ${personagem.Nome} Obrigado por Jogar! \n`);

    return gameover();
}

//Final Alternativo 3
function Final3() {
    console.log(`\x1b[32m
    
    Você Decide Ajudar. Mesmo sem Entender o que Estava Acontecendo de Fato. Mas não Queria Ficar Muito Tempo
    Naquele Local Para Descobrir,Pega o Bebê e Sai a Procura de uma Saida. Enquanto Procurava 
    Você Encontra um Túnel, Mas Nele Existem Vários Fantasmas Vingativos te Atormentando,
    Mesmo Assim Você Não Desiste e Consegue Escapar. Quando Finalmente Você Consegue Sair Daquele
    Hospício. Seu Despertador Toca e Você se Dá Conta de Que Tudo Aquilo Era um Sonho.
    
    \x1b[0m`);

    alterarStatus(0, 50, 100);

    personagem.exibirStatus();

    console.log(`\n Fim de Jogo Pra Você ${personagem.Nome} Obrigado por Jogar! \n`);

    return gameover();
}

//FinalAlternativo 4
function Final4() {
    console.log(`\x1b[32m
      
      Com o Dia Raiando, Todas Aquelas Assombrações Começam a Sumir. Derrepende a Porta Principal Abre
      e Você Escuta Seu Chefe Lhe Chamando, Que Seu Turno Havia Acabado. Depois de Toda Essa Experiência Traumática
      Você Volta Para a Sua Familia,Mas Sua Sanidade Nunca Mais Foi a Mesma.
      
      \x1b[0m`);

    alterarStatus(0, 100, 100);

    personagem.exibirStatus();

    console.log(`\n Fim de Jogo Pra Você ${personagem.Nome} Obrigado por Jogar! \n`);

    return gameover();
}

//FinalAlternativo 5
function Final5() {
    console.log(`\x1b[32m
        
  Você Quebra o Vidro,Pula a Janela e Coloca Fogo em Todo o Hospicio, Após Esse Ato
  Você se Lembra de Como Chegou Ali, e que No Caminho Para o Trabalho Sofreu um Acidente.
  Derrepente Você Desmaia e Volta Novamente Para a Hora Exata em que entrou no Hospicio.
  Percebendo Então que Tinha Morrido no Acidente, e Aquilo era Uma Espécie de Purgatório... No Qual Você Vai Viver um Loop
  Infinito, Repetindo o Mesmo Episódio Até Encontrar A Luz e A Redenção. 
        
            \x1b[0m`);

    alterarStatus(0, 0, 0);

    personagem.exibirStatus();

    console.log(`\n Fim de Jogo Pra Você ${personagem.Nome} Obrigado por Jogar! \n`);

    return gameover();
}

//Inicio da Função Hora1, Primeiro Peridodo de Tempo
function Hora1() {
    console.log(`\x1b[32m

    Você Começa o Seu Horário de Trabalho. Pega Seus Equipamentos de Vigilância e Entra no Hospício. Você Vai Ter
    que Permanecer Nesse Local por 3 Horas. Com Todas as Portas Trancadas, Mas Passado Alguns Minutos Você Escuta um Barulho.
    Decida o Que Vai Fazer:

\x1b[0m`);

    console.log();

    console.log(
        `\x1b[34m \n Digite [1] Pra Escolher "INVESTIGAR O BARULHO" \n Digite [2] Pra Escolher "OLHAR PELA JANELA" \n Digite [3] Pra Escolher "CAMINHAR AO ANDAR DE CIMA" \n Digite [4] Pra EScolher "LIGAR PARA O SEU CHEFE" \n \x1b[0m`,
    );

    let Primeiraescolha = +prompt();

    //condição Pra Caso a EScolha do Jogador Seja Diferente da Desesjada
    while (
        Primeiraescolha != 1 &&
        Primeiraescolha != 2 &&
        Primeiraescolha != 3 &&
        Primeiraescolha != 4
    ) {
        escolhaInvalida(); //Chamando a Função escolhaInvalida

        console.log(
            `\x1b[34m \n Digite [1] Pra Escolher "INVESTIGAR O BARULHO" \n Digite [2] Pra Escolher "OLHAR PELA JANELA" \n Digite [3] Pra Escolher "CAMINHAR AO ANDAR DE CIMA" \n Digite [4] Pra EScolher "LIGAR PARA O SEU CHEFE" \n \x1b[0m`,
        );

        Primeiraescolha = +prompt();

        //Condição Para Executar Dependendo da Escolha do Usuário
    }

    if (Primeiraescolha == 1) {
        i++;

        intervalo();

        console.log(`\x1b[32m

    Você Decidiu Investigar o Barulho. Pegou Sua Lanterna, e Foi Ver de Onde Vinha o Que Tinha Ouvido.
    Descobrindo Assim Que o Barulho Vinha do Andar de Cima, Mas não era um Barulho Qualquer. Era um Choro de Bebê

    \x1b[0m`);

        alterarStatus(95, 90, 100);

        personagem.exibirStatus();
    } else if (Primeiraescolha == 2) {
        i++;

        intervalo();

        console.log(`\x1b[32m

    Você Pegou sua Lanterna e Sua Arma, E Olha Pela Janela de Vidro do Saguão Principal. 
    Percebeu que o Clima Havia Mudado. Como Se o Tempo Tivesse Passado de um Segundo pra Outro.
    Ao Olhar a Data e a Hora em Seu Celular,Constatou que Tinha Voltado no Tempo e Estava no Ano de 1888,
    Exatamente ás 3:33 da Madrugada.

    \x1b[0m`);

        alterarStatus(75, 100, 87);

        personagem.exibirStatus();
    } else if (Primeiraescolha == 3) {
        i++;

        intervalo();

        console.log(`\x1b[32m

    Você se Vê com Medo. Mas Decide Vasculhar Todo o Prédio, e Fazer Sua Função de Vigilante.
    Mas ao Chegar em um Determinado Local, Percebe que um Ser Vestido de Médico Está te Perseguindo.
    Você Atira Várias Vezes. Mas Ver que as Balas Atravessam. 
    \x1b[0m`);

        alterarStatus(60, 100, 80);

        personagem.exibirStatus();
    } else {
        intervalo();

        console.log(`\x1b[32m
    
    Você é Um Medroso, e Ao Escutar um Barulho de Choro de Criança. Você Liga Para o Seu Chefe 
    Contando que Não Está se Sentindo Bem, e Precisa Voltar Pra Casa
    
    \x1b[0m`);

        Final1();
    }
} //Fim da Primeira Função

//Inicio da Função Hora2,Segundo Periodo de Tempo
function Hora2() {
    console.log(`\x1b[32m
Então Você Avista Naquele Local o Espirito de Um Médico,Surtado com um Bisturi na Mão, e Corre pra Parte de Cima do Prédio
Subindo Para o Segundo Andar Você Se Depara com Várias Salas... Precisa Escolher Em Qual Sala Entrar,
Sem Saber os Perigos Que o Aguardam.
Então ${personagem.Nome}, Está Preparado Para Enfrentar Mais Essa Decisão que Pode Ser ou Não a Sua Última?
\x1b[0m`);

    console.log();

    console.log(
        `\x1b[34m \n Digite [1] Para Escolher a Primeira Sala \n Digite [2] Para Escolher a Segunda Sala \n Digite [3] Para Escolher a Terceira Sala \n Digite [4] Para Escolher a Quarta Sala \n  \x1b[0m`,
    );

    let Segundaescolha = +prompt();

    while (
        Segundaescolha != 1 &&
        Segundaescolha != 2 &&
        Segundaescolha != 3 &&
        Segundaescolha != 4
    ) {
        escolhaInvalida();

        console.log(
            `\x1b[34m \n Digite [1] Para Escolher a Primeira Sala \n Digite [2] Para Escolher a Segunda Sala \n Digite [3] Para Escolher a Terceira Sala \n Digite [4] Para Escolher a Quarta Sala \n \x1b[0m`,
        );

        Segundaescolha = +prompt();
    }

    if (Segundaescolha == 1) {
        i++;

        intervalo();

        console.log(`\x1b[32m
    
    Você Entrou em Uma Sala, e Lá Encontrou uma Carta de Um Ex-Funcionário Contando uma História Bizarra que Ocorreu Naquele Local,
    Sobre os Mistérios que Ali Rondavam. e que Sempre em um Determinado Dia e Horário, O Tempo Voltava Para o Dia dos Tais Acontecimentos.
    Agora Você tem que Dar um Jeito de Escapar Daquele Local o Mais Rápido Possivel. Ou Coisas Terriveis Podem Acontecer.

    \x1b[0m`);

        alterarStatus(58, 50, 90);

        personagem.exibirStatus();
    } else if (Segundaescolha == 2) {
        intervalo();

        console.log(`\x1b[32m
    
Você Entra na Sala o Qual Está Escrito o Nome ${personagem.Nome} Na Parede.
Ao Entrar Você se Depara com o Fantasma de Um Médico Psicopata. Você Tenta Sair da Sala,Mas Ela
se Encontra Trancada. Você Procura um Jeito de Escapar. Mas Parece que não há Saida.

\x1b[0m `);

        Final2();
    } else if (Segundaescolha == 3) {
        i++;

        intervalo();

        console.log(`\x1b[32m
    
    Você Entra Nessa Sala. E Nela se Encontra Um Telão Rodando Uma Fita, Onde Alguém Contava a História de um Médico que Surtou e Está Matando Todos Ali 
    e Para Escapar Você Teria que Achar Uma Saída por um Caminho Subterrâneo, Que Esse Tal Médico não Saberia da Existência Desse Túnel
    Depois do que Você Viu, Tem a Plena Certeza de que Não Quer Mais Continuar Ali. Então Você Recupera Sua Energia,se Enche de Coragem
    e Parte Pra Procurar uma Saída.

    \x1b[0m`);

        alterarStatus(79, 100, 100);

        personagem.exibirStatus();
    } else {
        intervalo();

        console.log(`\x1b[32m
    
    Você Adentra na Sala, E Nela Encontra uma Mulher,Toda Ensanguentada e Quase Sem Vida com Um Bebê no Colo 
    Ela Pede a Você Pra Tira-lo Dali,Antes que um Médico Psicopata,Que se Encontra Naquele Local,Mate o Seu Bebê.

    \x1b[0m`);

        Final3();
    }
} //fim da Segunda Função

//Inicio da Função Hora3, Terceiro Periodo de Tempo
function Hora3() {
    console.log(`\x1b[32m

Agora Você Escuta que o Médico Louco,Está Cada Vez Mais Perto. E Pelo Som Que Ele Está Fazendo
Também Está Cada Vez Mais Zangado. Você Precisa Escapar Dali,O Mais Rápido Possível.
Agora Meu Caro ${personagem.Nome}! As Suas Escolhas Determinarão o Seu Destino Final. 

\x1b[0m`);

    console.log();

    console.log(
        `\x1b[34m \n Digite [1] Para "ENFRENTAR O FANTASMA" \n Digite [2] Para "ESCONDER-SE" \n Digite [3] Para "CORRER" \n Digite [4] Para "COLOCAR FOGO NO HOSPICIO" \n \x1b[0m`,
    );

    let Terceiraescolha = +prompt();

    while (
        Terceiraescolha != 1 &&
        Terceiraescolha != 2 &&
        Terceiraescolha != 3 &&
        Terceiraescolha != 4
    ) {
        escolhaInvalida();

        console.log(
            `\x1b[34m \n Digite [1] Para "ENFRENTAR O FANTASMA" \nDigite [2] Para "ESCONDER-SE" \n Digite [3] Para "CORRER" \n Digite [4] Para "COLOCAR FOGO NO HOSPICIO" \n \x1b[0m`,
        );

        Terceiraescolha = prompt();
    }

    if (Terceiraescolha == 1) {
        intervalo();

        console.log(`\x1b[32m
    
   Com o Fantasma Chegando Cada Vez Mais Perto,Você Não Teve Outra Escolha a Não Ser Enfrentá-lo. Ao Tentar de Algum Jeito
   Derrotar Aquele Espirito, Você Percebe que o Dia Está Começando a Surgir.

   \x1b[0m`);

        Final4();
    } else if (Terceiraescolha == 2) {
        i++;

        intervalo();

        console.log(`\x1b[32m
    
    Você se Esconde Dentro de Um Armário,e Quando Escuta o Médico Tão Perto que Dava Pra Ouvir sua Respiração.
    Você Cai Por Uma Passagem Secreta, Que Leva Direto a uma Saida Daquele Local... Você Consegue Sair Por Essa Passagem.
    Mas Promete a Si Mesmo que Nunca Mais Vai se Lembrar do Que Aconteceu ali, nem Contar Nada a Ninguém

    \x1b[0m `);

        alterarStatus(100, 100, 100);

        personagem.exibirStatus();
    } else if (Terceiraescolha == 3) {
        i++;

        intervalo();

        console.log(`\x1b[32m

Você Corre o Mais Rápido que Pode, em Direção a Porta Principal.Ao Chegar Lá Você Percebe que Está de Dia
Então a Porta Automaticamente se Abre, e Você se Ver Livre de Toda Aquela Loucura a Qual Passou nas Últimas 3 Horas

\x1b[0m`);

        alterarStatus(50, 100, 80);

        personagem.exibirStatus();
    } else {
        intervalo();

        console.log(`\x1b[32m
  
  Você Olha Para o Lado e Ver Um Galão de Gasolina. Lembra-se que Tem Um Isqueiro no Bolso
  E Pensando em se Livrar de Toda a Assombração que Estava Passando, Decide Quebrar uma Janela que Viu
  Pular por Ela e Colocar Fogo Em Todo o Hospicio
  
  \x1b[0m`);

        Final5();
    }
} //Fim da Terceira Função

//Função Final da História,
function FinalHistoria() {
    console.log(`\x1b[32m
    
Parabéns! ${personagem.Nome} Você Conseguiu Vencer Esse Pesadelo no qual se Encontrou. Conseguiu Escapar 
Desse Hospicio, Onde Anos Atrás um Médico Louco Matou Vários Pacientes e Tirou Sua Vida Depois.
Foi Assim Que Esse Local se Tornou Assombrado.
\x1b[0m`);

    console.log();

    console.log(
        `\x1b[31m Você Tem Muita sorte de Ter Chegado Vivo Até Aqui,Obrigado Por Jogar!! \x1b[0m`,
    );

    alterarStatus(100, 100, 100);

    personagem.exibirStatus();

    i++;

    return gameover(); //Retorna a Função Pra Saber se o Usuário Deseja Jogar Novamente
} //Fim da Função FinalHistoria

function Intro() {
    console.clear();

    //Função de Introdução do Jogo,Onde Exibe a História,o Status do Personagem, e a Descrição do Jogo
    console.log(`\x1b[33m
  Bem Vindo! ${personagem.Nome}, Você Trabalha em Uma Empresa de Vigilância. e é Contratado Para Passar um ciclo de 3 Horas
  Trabalhando em um Hospicio Abandonado. Hà Lendas Bizarras a Respeito Desse Hospício. Então,Bom Trabalho e Boa Sorte!!
  \x1b[0m`);

    console.log();

    console.log(
        `\x1b[31m O Título do Jogo é "Insanity"

      Este é o Status do Seu Personagem: \x1b[0m `,
    );

    personagem.exibirStatus(); //Chamando o Metodo exibirStatus, Que Vai exibir na Tela o Status do Personagem

    console.log(
        `\x1b[33m \n Quando Algum dos Status Chegar a "0", Você Perde o Jogo! \n \x1b[0m`,
    );

    intervalo(); //Chamando a Função intervalo pra Dar Uma Pausa no Jogo Até o Usuário Pressionar Enter
}

//Aqui Começa o Jogo//
while (restart == 0) {
    //Chamando a Função de Introdução do Jogo
    Intro();

    for (i = 0; i < 5; ) {
        // Estrutura de repetição que ira rodar os periodos(horas) em qual o jogo se passa

        //Iniciando status do personagem.
        personagem.Sanidade = 100;
        personagem.Coragem = 100;
        personagem.Vida = 100;

        // Condição para Controle dos periodos, chamando as funçoes correspondente ao laço da estrutura for.

        if (i == 0) {
            // Condiçao quando i for igual a 0 ele iniciar a primeira hora

            console.log(`\n ${horas[i]} \n`);

            Hora1(); // chamando a função Hora1

            if (restart == 1) {
                // condição para encerra o jogo no game over.
                break;
            }
        } else if (i == 1) {
            console.log(`\n ${horas[i]} \n`);

            Hora2();

            if (restart == 1) {
                break;
            }
        } else if (i == 2) {
            console.log(`\n ${horas[i]} \n`);

            Hora3();

            if (restart == 1) {
                break;
            }
        } else if (i == 3) {
            console.log();

            FinalHistoria();

            if (restart == 1) {
                break;
            } else {
                break;
            }
        }
    }
}
