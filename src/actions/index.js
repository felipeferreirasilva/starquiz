export const GAME_STATUS = 'GAME_STATUS'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const RESET_SCORE = 'RESET_SCORE'

// ATUALIZA O STATUS DO JOGO PARA TRUE OR FALSE (TRUE: TEMPO DISPONIVEL, FALSE: TEMPO ACABOU)
export const gameStatus = status => {
    return {
        type: GAME_STATUS,
        status
    }
}

// ATUALIZA A STORE COM A PONTUAÇAO RECEBIDA PELO USUARIO AO ACERTAR UMA QUESTAO
export const updateScore = score => {
    return {
        type: UPDATE_SCORE,
        score
    }
}

// RESETA O OBJETO SCORE DA STORE COM 0 PONTOS
export const resetScore = () => {
    return {
        type: RESET_SCORE
    }
}