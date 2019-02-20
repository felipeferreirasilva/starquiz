import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../utils/images'
import { connect } from 'react-redux'
import { gameStatus, resetScore } from '../actions'

class Home extends Component {

    // RESETA STATUS DO JOGO CASO O JOGADOR JA TENHA JOGADO NA MESMA SESSAO
    componentDidMount(){
        this.props.dispatch(gameStatus(false))
    }

    // MUDA O STATUS DO JOGO PARA TRUE (INICIA CONTADOR DE TEMPO)
    // RESETA O SCORE PARA ZERO CASO O JOGADOR JA TENHA JOGADO NA MESMA SESSAO
    onClickStart = () => {
        this.props.dispatch(gameStatus(true))
        this.props.dispatch(resetScore())
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <img src={LOGO} alt="darth vader banner" className="img-fluid mt-3 animated zoomIn" style={style.logo}></img>
                    <h2 className="mt-5">StarQuiz!</h2>
                    <Link to="/game" className="btn btn-light btn-lg mt-3" onClick={this.onClickStart}>Jogar!</Link>
                </div>
            </div>
        )
    }
}

const style = {
    logo: {
        maxHeight: 260
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Home)