import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../utils/images'
import { connect } from 'react-redux'
import { gameStatus } from '../actions'

class Home extends Component {

    onClickStart = () => {
        this.props.dispatch(gameStatus(true))
    }

    render() {
        return (
            <div className="container-fluid mt-4">
                <div className="text-center">
                    <div><img src={LOGO} alt="darth vader banner" className="img-fluid mt-3 animated zoomIn" style={style.logo}></img></div>
                    <h2 className="mt-5">StarQuiz!</h2>
                    <Link to="/game" className="btn btn-outline-dark btn-lg mt-3" onClick={this.onClickStart}>Jogar!</Link>
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