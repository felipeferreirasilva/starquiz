import { combineReducers } from 'redux'
import { GAME_STATUS} from '../actions'

const game = (state = { status: false }, action) => {
    switch (action.type) {
        case GAME_STATUS:
            return action.status
        default:
            return state
    }
}

export default combineReducers({
    game
})