import RootReducer from '../reducers'
import { updateScore, gameStatus, resetScore } from '../actions'

describe('Reducers', () => {
    it('Retorna initial state', () => {
        expect(RootReducer(undefined, {})).toEqual({
            game: {
                status: false,
                score: 0
            }
        })
    })

    it('gameStatus, deve retornar o status do jogo', () => {
        expect(RootReducer(undefined, gameStatus(true))).toEqual({
            game: {
                status: true,
                score: 0
            }
        })
    })
    
    it('updateScore, deve armamzenar o score do jogador', () => {
        expect(RootReducer(undefined, updateScore(30))).toEqual({
            game: {
                status: false,
                score: 30
            }
        })
    })

    it('resetScore, deve retornar o score do jogo zerado', () => {
        expect(RootReducer(undefined, resetScore())).toEqual({
            game: {
                status: false,
                score: 0
            }
        })
    })
})