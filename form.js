function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name === parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1)
        }
    }
    

    let nome_do_filme = document.getElementById("nome_do_filme")
    const image = document.createElement('img')
    let recomendacao = document.getElementById("recomendacao")
    let descricao = document.getElementById("descricao")
    let duracao = document.getElementById("duracao")
    let tags = document.getElementById("tags")
    let direcao = document.getElementById("direcao")
    let roteiro = document.getElementById("roteiro")
    let elenco = document.getElementById("elenco")
    let titulo_original = document.getElementById("titulo_original")
    let streaming = document.getElementById('streaming')
    const image1 = document.createElement('img')
   


    
    
    document.getElementById('banner').appendChild(image)
    document.getElementById('plataforma').appendChild(image1)
    

    if(param_value === 'vingadores_ultimato'){
            nome_do_filme.innerText = 'Vingadores Ultimato'
            recomendacao.innerText = 'Não recomendado para menores de 12 anos'
            descricao.innerText = 'Em Vingadores Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.'
            image.src = '../img/Vingadores.jpeg'
            duracao.innerText = '3h 01min'
            tags.innerText = 'Ação , Fantasia , Aventura'
            direcao.innerText = 'Joe Russo , Anthony Russo'
            roteiro.innerText = 'Christopher Markus , Stephen McFeely'
            elenco.innerText = 'Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth, Mark Ruffalo e Jeremy Renner'
            titulo_original.innerText = 'Avengers Endgame'
            image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
            streaming.href ='https://disney.com.br/filmes/vingadores-ultimato'
            
    }else 
    if(param_value === 'the_batman'){
        nome_do_filme.innerText = 'Batman'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = 'Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.'
        image.src = '../img/Batman2.jpg'
        duracao.innerText = '2h 57min'
        tags.innerText = 'Ação, Aventura, Drama, Fcção científica'
        direcao.innerText = 'Matt Reeves'
        roteiro.innerText = 'Matt Reeves , Peter Craig'
        elenco.innerText = 'Robert Pattinson , Zoë Kravitz , Paul Dano'
        titulo_original.innerText = 'The Batman'
        image1.src = 'https://ingresso-a.akamaihd.net/sitenovo-2017/comum/img/logoingresso@3x.png'
        streaming.href ='https://m.ingresso.com/filme/batman?partnership=home'

    }else 
    if(param_value === 'eternos'){
        nome_do_filme.innerText = 'Eternos'
        recomendacao.innerText = 'Não recomendado para menores de 12 anos'
        descricao.innerText = 'Eternos são seres super dotados com características como imortalidade e manipulação de energia cósmica, e eles são frutos de experiências fracassadas de seu próprio criador, o Celestial Arishem, desde a criação da Terra há milhões de anos. Destinados a salvar o mundo e a raça humana dos Deviantes, seres também criados pelo Celestial, os Eternos então derrotam tais seres e seguem caminhos diferentes, esperando que seu criador volte com boas novas. Mas após séculos e milênios aguardando ele, o grupo de heróis imortais agora precisa se preparar para uma nova ameaça, e precisam lutar contra os Deviantes novamente para garantir a segurança da humanidade. Muitos conflitos internos podem surgir, entre o amor que sentem pela Terra e a necessidade de protegê-la acima de tudo, e a fé naquilo que está acima deles. Cada um deverá lutar pelo o que acredita, e defender o que for mais importante. Eternos se passa pouco tempo após os acontecimentos de Vingadores: Ultimato (2019), dentro do universo MCU, inspirado nos quadrinhos, em adaptação da Marvel Studios.'
        image.src = '../img/Eternos2.jpg'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
        streaming.href ='https://disney.com.br/filmes/eternos'
    }else 
    if(param_value === 'red'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    }else 
    if(param_value === 'uncharted_fora_do_mapa'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    } else 
    if(param_value === 'homem-aranha_sem_volta_pra_casa'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    } else 
    if(param_value === 'projeto_adam'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    } else 
    if(param_value === 'venom_tempo_de_carnificina'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    } else 
    if(param_value === 'duna'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    } else 
    if(param_value === 'casa_gucci'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    } else 
    if(param_value === 'filhos_do_privilegio'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    }else 
    if(param_value === 'moonfall_ameaca_lunar'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
    }   
    if(param_value === 'euphoria'){
        nome_do_filme.innerText = 'Euphoria'
        recomendacao.innerText = 'Não recomendado para menores de 16 anos'
        descricao.innerText = ' Em Euphoria, Rue Bennett (Zendaya) é uma jovem de 17 anos que acaba de sair da clínica de reabilitação após ter uma overdose. Rue sofre com transtornos mentais desde criança, o que a fez entrar em contato com drogas ainda no início da adolescência. Ela tenta agora se adaptar a uma vida "limpa" e volta a frequentar a escola. Mas, assim como ela, os demais alunos do ensino médio enfrentam seus próprios desafios, envolvendo sexo, drogas, amizades, relacionamentos amorosos, conflitos familiares, redes sociais e violência. À medida que luta contra a dependência química, Rue precisa lidar com todos os traumas e segredos da adolescência. Ela encontra apoio em uma nova amiga, Jules (Hunter Schafer), uma adolescente transgênero que acabou de se mudar para a cidade com o pai. A princípio, Jules tem suas próprias questões para lidar, porém, aos poucos, essa amizade vai se transformando em um intenso interesse amoroso.'
        image.src = '../img/Euphoria.jpeg'
        duracao.innerText = '54–61 minutos'
        tags.innerText = 'Drama adolescente'
        direcao.innerText = 'Sam Levinson, Augustine Frizzell, Jennifer Morriso, Pippa Bianco'
        roteiro.innerText = 'Tyler Romary, Philipp A. Barnett, Jamie Feldman, Kenneth Yu'
        elenco.innerText = 'Zendaya, Maude Apatow, Angus Cloud, Eric Dane, Alexa Demie, Jacob Elordi, Barbie Ferreira, Nika King, Storm Reid, Hunter Schafer'
        titulo_original.innerText = 'Euphoria'
        image1.src = 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'
        streaming.href ='https://www.hbomax.com/br/pt/series/urn:hbo:series:GXKN_xQX5csPDwwEAAABj'
    }else 
    if(param_value === 'naomi'){
        nome_do_filme.innerText = 'Naomi'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
     
    }else 
    if(param_value === 'the-boys-diabolical'){
        nome_do_filme.innerText = 'The Boys Diabolical'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
     
    }else 
    if(param_value === 'the-nevers'){
        nome_do_filme.innerText = 'The Nevers'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
     
    }else 
    if(param_value === 'a-roda-do-tempo'){
        nome_do_filme.innerText = 'A Roda do Tempo'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = ''
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
     
    }else 
    if(param_value === 'quanto-mais-vida-melhor'){
        nome_do_filme.innerText = 'Quanto Mais Vida, Melhor!'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = 'Quanto Mais Vida, Melhor!'
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
     
    }
    else 
    if(param_value === 'superman-and-louis'){
        nome_do_filme.innerText = 'Quanto Mais Vida, Melhor!'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = '../'
        duracao.innerText = ''
        tags.innerText = ''
        direcao.innerText = ''
        roteiro.innerText = ''
        elenco.innerText = ''
        titulo_original.innerText = 'Quanto Mais Vida, Melhor!'
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
     
    }

}
queryString("filme?info")
