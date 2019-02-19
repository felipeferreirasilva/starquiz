import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux'
import { gameStatus } from '../actions'

const Timer = props => {
    // FUNÇAO É CHAMADA APÓS O TERMINO DO CONTADOR
    // SETA O STATUS DO JOGO PARA FALSE (TEMPO ACABOU)
    const updateGameStatus = () => {
        props.dispatch(gameStatus(false))
        console.log('Game Finalizado')
    }

    return (
        <div>
            {/* ESCONDE / EXIBE O TIMER APOS CHECAR O STATUS DO JOGO */}
            {props.game.status &&
                <div className="text-right mr-5 mt-2 animated slideInRight">
                <h4 className="text-right">Tempo</h4>
                    <FontAwesomeIcon icon={faStopwatch} size="2x" />
                    <h3 className="float-right ml-2">
                        {/* TIMER QUE APOS 2 MINUTOS (20000) RETORNA UMA FUNÇAO */}
                        <Countdown date={Date.now() + 20000} renderer={({ minutes, seconds }) => { return <span>{minutes}:{seconds}</span> }} onComplete={updateGameStatus} />
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