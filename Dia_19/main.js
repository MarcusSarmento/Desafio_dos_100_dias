//91eb4c53a969dacd271509bbf8e864f7
//https://openweathermap.org/img/wn/${dados.weather[0].icon}.png
//https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&lang=pt_br&units=metric

const API = '91eb4c53a969dacd271509bbf8e864f7'

function dadosNaTela(dados){
    // Exibindo dados consumidos da API na tela do DOM
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").innerHTML.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    dadosNaTela(dados);
}

function clickButton(){
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}