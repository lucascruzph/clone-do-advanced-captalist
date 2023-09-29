function logicaJogo(score, intervalDuration, multiplicador, subtracao, nivel, nomeFase, IdNomeFase, IdPontuacao, IdScore, IdCustoPassarDeNivel, IdNivel, IdPassarDeNivel, IdPassarDeNivelButton) {

    const h2NomeFase = document.createElement("h2");
    h2NomeFase.textContent = nomeFase;
    document.getElementById(IdNomeFase).appendChild(h2NomeFase);

    const scoreElement = document.createElement("span");
    scoreElement.id = IdScore;
    document.getElementById(IdPontuacao).appendChild(scoreElement);

    const custoPassarDeNivel = document.createElement("span");
    custoPassarDeNivel.textContent = subtracao;
    document.getElementById(IdCustoPassarDeNivel).appendChild(custoPassarDeNivel);

    const nivelElement = document.createElement("span");
    nivelElement.textContent = 0;
    document.getElementById(IdNivel).appendChild(nivelElement);

    const button = document.createElement("button");
    button.textContent = "Passar de nível";
    button.id = IdPassarDeNivelButton;
    document.getElementById(IdPassarDeNivel).appendChild(button);

    // Função para aumentar os pontos automaticamente
    function autoIncrement() {
        setTimeout(autoIncrement, intervalDuration);
        score += multiplicador;
        scoreElement.textContent = score;
    }

    // Função para passar de nível e atualizar a pontuação com base na subtração atual
    function passarDeNivel() {
        intervalDuration /= 2;
        score -= subtracao;
        subtracao *= 2; // Dobre o valor de subtração para a próxima vez
        scoreElement.textContent = score;
        custoPassarDeNivel.textContent = subtracao;
        nivel += 1;
        nivelElement.textContent = nivel;
    }

    // Event listener para o botão de atualização do nível de pontuação
    const passarDeNivelButton = document.getElementById(IdPassarDeNivelButton);
    passarDeNivelButton.addEventListener("click", () => {
        if (score >= subtracao) {
            passarDeNivel();
            reduzirIntervalButton();
        }
    });
    
    autoIncrement();

}

function criarFaseBronze() {
    // Substitua "seuContainerID" pelo ID do elemento onde deseja anexar a estrutura
    logicaJogo(0, 1000, 2, 10, 0, "Nivel Bronze", "criarNivel", "pontuacaoBronze", "scoreBronze", "custoPassarDeNivel", "nivel", "passarDeNivel", "passarDeNivelButton");
}

function criarFasePrata() {
    // Substitua "seuContainerID" pelo ID do elemento onde deseja anexar a estrutura
    logicaJogo(0, 2000, 4, 20, 0, "Nivel Prata", "criarNivelPrata", "pontuacaoPrata", "scorePrata", "custoPassarDeNivelPrata", "nivelPrata", "passarDeNivelPrata", "passarDeNivelButtonPrata");
}

function updateScoreTotal() {
    //função para pegar o valor de scoreBronze e scorePrata, somar e mostrar no console a cada 1 segundo
    const criarSpanScoreTotal = document.createElement("span");
    criarSpanScoreTotal.id = "pontuacaoTotalSpan";
    criarSpanScoreTotal.textContent = 0;
    document.getElementById("pontuacaoTotal").appendChild(criarSpanScoreTotal);


    function mostrarScoreTotal() {
        const scoreBronze = document.getElementById("scoreBronze").textContent;
        const scorePrata = document.getElementById("scorePrata").textContent;
        const somaScoreTotal = parseInt(scoreBronze) + parseInt(scorePrata);

        setTimeout(mostrarScoreTotal, 1);
        const atualizaPontuacaoTotal = document.getElementById("pontuacaoTotalSpan");
        atualizaPontuacaoTotal.textContent = somaScoreTotal;
    }
    mostrarScoreTotal();
}

criarFaseBronze();
criarFasePrata();
updateScoreTotal();