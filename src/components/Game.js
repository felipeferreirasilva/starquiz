import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../utils/api'
import Card from './Card'
import { connect } from 'react-redux'
import Timer from '../components/Timer'
import GameOver from '../components/GameOver'

class Game extends Component {
    state = {
        cards: {},
        nextPage: null,
        previousPage: null
    }

    // REQUISITA OS 10 PRIMEIROS PERSONAGENS CADASTRADOS NA API
    componentDidMount() {
        if (this.props.game.status) {
            this.getCards(URL)
        } else {
            this.props.history.push('/')
        }
    }

    // REQUISITA OS 10 PERSONAGEM DA PROXIMA PAGINA PASSANDO A URL ARMAZENADA NO STATE nextPage
    onClickNextPage = () => {
        let nextPage = this.state.nextPage
        if (nextPage !== null) {
            this.getCards(nextPage)
        }
    }

    // REQUISITA OS 10 PERSONAGEM DA PAGINA ANTERIOR PASSANDO A URL ARMAZENADA NO STATE previousPage
    onClickPreviousPage = () => {
        let previousPage = this.state.previousPage
        if (previousPage !== null) {
            this.getCards(previousPage)
        }
    }

    // REQUISITA OS PERSONAGENS A API STARWARS
    getCards = (url) => {
        axios.get(url)
            .then(response => {
                this.setState({
                    cards: response.data.results,
                    nextPage: response.data.next,
                    previousPage: response.data.previous
                })
            })
    }


    render() {
        return (
            <div>
                <Timer />
                {/* SE O STATUS DO JOGO FOR TRUE, (TEMPO DISPONIVEL) EXIBE OS CARTOES */}
                {this.props.game.status ? (
                    <div className="container-fluid">
                        <hr />
                        <div className="row">
                            {Object.keys(this.state.cards).length > 0 &&
                                this.state.cards.map(card => (
                                    <div key={card.name} className="col-lg-3 col-md-4 col-sm-6"><Card card={card} /></div>
                                ))
                            }
                        </div>
                        <hr />
                        <nav>
                            <ul className="pagination justify-content-center pagination-lg">
                                <li className={`page-item ${this.state.previousPage === null && 'disabled'}`}><button className="page-link" onClick={this.onClickPreviousPage}>Anterior</button></li>
                                <li className={`page-item ${this.state.nextPage === null && 'disabled'}`}><button className="page-link" onClick={this.onClickNextPage}>Proximo</button></li>
                            </ul>
                        </nav>

                    </div>
                    // SE O STATUS DO JOGO FOR FALSE, (TEMPO ACABOU), EXIBE O COMPONENT GAMEOVER
                ) : (
                        <GameOver score={this.props.game.score} />
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Game)