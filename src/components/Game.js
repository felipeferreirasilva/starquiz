import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../utils/api'
import { connect } from 'react-redux'
import Card from './Card'
import Timer from './Timer'
import GameOver from './GameOver'
import Spinner from './Spinner'

export class Game extends Component {
    state = {
        cards: {},
        nextPage: null,
        previousPage: null,
        // INICIA O COMPONENT COM O LOADING EM TRUE
        loading: true
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
                    previousPage: response.data.previous,
                    // FINALIZA O LOADING AO CARREGAR OS CARTOES INICIAIS
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                {/* VERIFICA SE O LOADING ESTA ATIVO E EXIBE O SPINNER */}
                {this.state.loading ? (
                    <Spinner />
                ) : (
                        <div>

                            {/* SE O STATUS DO JOGO FOR TRUE, (TEMPO DISPONIVEL) EXIBE OS CARTOES */}
                            {this.props.game.status ? (
                                <div>
                                    <Timer />
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
                                </div>
                                // SE O STATUS DO JOGO FOR FALSE, (TEMPO ACABOU), EXIBE O COMPONENT GAMEOVER
                            ) : (
                                    <GameOver score={this.props.game.score} history={this.props.history} />
                                )}
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Game)