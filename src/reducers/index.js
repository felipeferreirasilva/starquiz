import { combineReducers } from 'redux'
import { GAME_STATUS, UPDATE_SCORE, RESET_SCORE } from '../actions'

const game = (state = { status: false, score: 0 }, action) => {
    switch (action.type) {
        case GAME_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_SCORE:
            state.score += action.score
            return state
        case RESET_SCORE:
           return {
               ...state,
               score: 0
           }
        default:
            return state
    }
}

export default combineReducers({
    game
})