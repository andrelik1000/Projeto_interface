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
    

    if(param_value === 'vingadores_ultimato'){
            nome_do_filme.innerText = 'Vingadores Ultimato'
            recomendacao.innerText = 'Não recomendado para menores de 12 anos'
            descricao.innerText = 'Em Vingadores Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.'
            image.src = '../img/Vingadores.jpeg'

    }else{
        nome_do_filme.innerText = 'Outro filme'
        image.src = '../img/Euphoria.jpeg'
    }
    document.getElementById('banner').appendChild(image)

}

queryString("filme?info")