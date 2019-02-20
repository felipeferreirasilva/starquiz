import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux'
import { gameStatus } from '../actions'

const Timer = props => {
    // FUNÇAO É CHAMADA APÓS O TERMINO DO CONTADOR
    const updateGameStatus = () => {
        // SETA O STATUS DO JOGO PARA FALSE (TEMPO ACABOU)
        props.dispatch(gameStatus(false))
    }

    return (
        <div>
            {/* ESCONDE / EXIBE O TIMER APOS CHECAR O STATUS DO JOGO */}
            {props.game.status &&
                <div className="text-right mr-4 mt-1 animated slideInRight">
                    <FontAwesomeIcon icon={faStopwatch} size="2x" />
                    <h3 className="float-right ml-2">
                        {/* TIMER QUE APOS 2 MINUTOS (120000) RETORNA UMA FUNÇAO */}
                        <Countdown date={Date.now() + 120000} renderer={({ minutes, seconds }) => { return <span>{minutes}:{seconds}</span> }} onComplete={updateGameStatus} />
                    </h3>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Timer)