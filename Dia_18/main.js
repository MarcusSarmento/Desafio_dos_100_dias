let bloco = document.querySelectorAll("td");
let msg = document.querySelector('p');
let reset = document.querySelector('button');
let jogada = "O";

// Lógica

bloco.forEach(casa => {
    casa.addEventListener('click', event => {
        //Lógica para realizar uma jogada
        if (casa.innerHTML == ""){
            casa.innerText = jogada;
            //Trocar a jogada
            jogada = jogada == "X" ? "O" : "X";
            //Atualiza a menssagem
            msg.innerText = `Proximo a Jogar: ${jogada}`
            verificaGanhador();
        }
    })
})

reset.addEventListener('click', event => {
    bloco.forEach(casa => {
        casa.innerText = "";
        msg.innerText = `Próximo a Jogar: ${jogada}`
    })
    
})

function verificaGanhador(){
    let empate =true;
    if(
        (bloco[0].innerText != "" && bloco[0].innerText == bloco[1].innerText && bloco[0].innerText == bloco[2].innerText) ||
        (bloco[3].innerText != "" && bloco[3].innerText == bloco[4].innerText && bloco[3].innerText == bloco[5].innerText) ||
        (bloco[6].innerText != "" && bloco[6].innerText == bloco[7].innerText && bloco[6].innerText == bloco[8].innerText) ||
        (bloco[0].innerText != "" && bloco[0].innerText == bloco[3].innerText && bloco[0].innerText == bloco[6].innerText) ||
        (bloco[1].innerText != "" && bloco[1].innerText == bloco[4].innerText && bloco[1].innerText == bloco[7].innerText) ||
        (bloco[2].innerText != "" && bloco[2].innerText == bloco[5].innerText && bloco[2].innerText == bloco[8].innerText) ||
        (bloco[0].innerText != "" && bloco[0].innerText == bloco[4].innerText && bloco[0].innerText == bloco[8].innerText) ||
        (bloco[2].innerText != "" && bloco[2].innerText == bloco[4].innerText && bloco[2].innerText == bloco[6].innerText)
    )
    {
        msg.innerHTML =`<h1>Vitória</h1>`;
        empate = false;
    }
    if(empate) {
        let todasPreenchidas = true;
        for(let i = 0; i < bloco.length; i++){
            if(bloco[i].innerText == "")
            {
                todasPreenchidas = false;
                break;
            }
        }
        if (todasPreenchidas){
            msg.innerHTML = "<h1>Deu Velha!!</h1>"
        }
    } 
}