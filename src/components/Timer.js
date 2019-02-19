import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux'
import { gameStatus } from '../actions'

const Timer = props => {
    const updateGameStatus = () => {
        props.dispatch(gameStatus(false))
        console.log('Game Finalizado')
    }

    return (
        <div>
            {props.game.status &&
                <div className="text-right mr-5 mt-2 animated slideInRight">
                    <FontAwesomeIcon icon={faStopwatch} size="2x" />
                    <h3 className="float-right ml-2">
                        <Countdown date={Date.now() + 120000} renderer={({ minutes, seconds }) => { return <span>{minutes}:{seconds}</span> }} onComplete={updateGameStatus} />
                        {/* 120000 */}
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