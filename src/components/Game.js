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
        // INICIA O COMPONENT COM O LOADING EM TRUE
        loading: true,
        loadingMoreCards: false,
        loadingMoreCardsNewClasses: ''
    }

    componentDidMount() {
        if (this.props.game.status) {
            // REQUISITA OS 10 PRIMEIROS PERSONAGENS CADASTRADOS NA API
            this.getCards(URL)
        } else {
            // GARANTE QUE A PAGINA NAO SEJA ACESSADA SEM QUE O BOTAO DE INICIAR GAME TENHA SIDO CLICADO
            this.props.history.push('/')
        }
    }

    // REQUISITA OS 10 PERSONAGEM DA PROXIMA PAGINA PASSANDO A URL ARMAZENADA NO STATE nextPage
    onClickNextPage = () => {
        let nextPage = this.state.nextPage
        let newClasses = `ml-2 spinner-border spinner-border-sm`
        if (nextPage !== null) {
            this.getCards(nextPage)
            this.setState({
                loadingMoreCardsNewClasses: newClasses
            })
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
                    loading: false,
                    loadingMoreCardsNewClasses: ''
                })
            })
            .catch(error => {
                console.log(error)
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
                                                this.state.cards.map((card, index) => (
                                                    <div key={card.name} className="col-lg-3 col-md-4 col-sm-6"><Card card={card} cardId={`md${index}`} /></div>
                                                ))
                                            }
                                        </div>
                                        <hr />
                                        <nav>
                                            <button id="moreCards" className={`btn btn-light btn-lg btn-block mb-3 ${this.state.nextPage === null && 'disabled'}`} onClick={this.onClickNextPage}>
                                               Carregar Mais <span className={`${this.state.loadingMoreCardsNewClasses}`}></span>
                                            </button>
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