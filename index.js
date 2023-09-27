function solucao(jogadores) {
    let countZero = []
    let countUm = []

    for (const jogador of jogadores) {
        if (jogador.jogada == 0) {
            countZero.push({
                "nome": jogador.nome
            });
        } else if (jogador.jogada == 1) {
            countUm.push({
                "nome": jogador.nome
            });
        }
    }

    if (countZero.length === 1) {
        console.log(countZero[0].nome)
        return
    }

    if (countUm.length === 1) {
        console.log(countUm[0].nome)
        return
    }

    console.log('NINGUEM');
}