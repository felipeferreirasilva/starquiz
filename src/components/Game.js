import React, { Component } from 'react'
import { URL } from '../utils/api'
import { connect } from 'react-redux'
import axios from 'axios'
import Card from './Card'
import Timer from './Timer'
import GameOver from './GameOver'
import Spinner from './Spinner'

export class Game extends Component {
    state = {
        // ARRAY QUE RECEBE OS CARDS DA API
        cards: [],
        // RECEBE A URL DA API PARA A PROXIMA PAGINA
        nextPage: null,
        // INICIA O COMPONENT COM O LOADING EM TRUE
        loading: true,
        // STATE VAI RECEBER AS CLASSES DO SPINNER PARA ADICIONAR AO BOTAO CARREGAR MAIS
        loadingMoreCardsNewClasses: ''
    }

    componentDidMount() {
        // VERIFICA SE O USUÁRIO ACESSOU A ROTA PELA PAPGINA INICIAL CLICANDO NO BOTAO JOGAR
        if (this.props.game.status) {
            // REQUISITA OS 10 PRIMEIROS PERSONAGENS CADASTRADOS NA API
            this.getCards(URL)
        } else {
            // GARANTE QUE A PAGINA NAO SEJA ACESSADA SEM QUE O BOTAO JOGAR TENHA SIDO CLICADO
            this.props.history.push('/')
        }
    }

    // REQUISITA OS 10 PERSONAGEM DA PROXIMA PAGINA PASSANDO A URL ARMAZENADA NO STATE nextPage
    onClickNextPage = () => {
        // SETA A URL DA API PARA A PROXIMA PAGINA DE PERSONAGENS
        let nextPage = this.state.nextPage
        // CRIA VARIAVEL COM CLASSES DO BOTAO SPINNER
        let newClasses = `ml-2 spinner-border spinner-border-sm disabled`
        if (nextPage !== null) {
            // CHAMA API PASSANDO URL DA PROXIMA PAGINA
            this.getCards(nextPage)
            // ADICIONA CLASSES DO SPINNER AO STATE
            this.setState({
                loadingMoreCardsNewClasses: newClasses
            })
        }
    }

    // REQUISITA OS PERSONAGENS A API STARWARS
    getCards = (url) => {
        axios.get(url)
            .then(response => {
                // RECEBE INFORMAÇOES DA API E ATUALIZA OS STATES
                this.setState({
                    cards: response.data.results,
                    nextPage: response.data.next,
                    previousPage: response.data.previous,
                    loadingMoreCardsNewClasses: '',
                    // FINALIZA O LOADING AO CARREGAR OS CARTOES INICIAIS
                    loading: false
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
                                                    <div key={card.name} className="col-lg-3 col-md-4 col-sm-6">
                                                        <Card card={card} cardId={`md${index}`} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <hr />
                                        <nav>
                                            <button
                                                id="moreCards"
                                                className={`btn btn-light btn-lg btn-block mb-3 ${this.state.nextPage === null && 'disabled'}`}
                                                onClick={this.onClickNextPage}>
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