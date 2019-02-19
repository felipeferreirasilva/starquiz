export const GAME_STATUS = 'GAME_STATUS'

export const gameStatus = (status) => {
    return {
        type: GAME_STATUS,
        status: { status: status }
    }
}