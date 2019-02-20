import React, { Component } from 'react'
import { CSE_ID, API_KEY } from '../utils/googleImages'
import { connect } from 'react-redux'
import { updateScore } from '../actions'
import GoogleImages from 'google-images';
import Details from './Details'
import Spinner from './Spinner'

export class Card extends Component {
    state = {
        // ARMAZENA A IMAGEM RECEBIDA PELA API DO GOOGLE IMAGENS
        cardImage: {
            thumbnail: '',
            image: ''
        },
        // ARMAZENA O PALPITE DO USUARIO
        userGuess: '',
        // EXIBE O CAMPO PARA DIGITAR O PALPITE
        showInput: false,
        // ARMAZENA SE O USUARIO CLICOU EM DETALHES (PARA DIMINUIR 5 PONTOS CASO ELE ACERTE)
        clickedDetails: false,
        // CLASSES QUE SERAO ADICIONADAS AO CARD
        newClasses: 'rgba-grey-slight',
        // INICIA O COMPONENTE COM O LOADING EM TRUE
        loading: true
    }

    // REQUISITA AS IMAGENS DOS CARTOES
    componentDidMount() {
        this.getImageToCard(this.props.card)
    }

    // UTILIZA API DO GOOGLE PARA PESQUISAR E RETORNAR IMAGENS
    getImageToCard = card => {
        const client = new GoogleImages(CSE_ID, API_KEY);
        client.search(`${card.name} star wars`)
            .then(response => {
                this.setState({
                    cardImage: {
                        thumbnail: response[0].thumbnail.url,
                        image: response[0].url
                    },
                    // FINALIZA O LOADING AO CARREGAR TODAS AS IMAGENS DOS CARTOES
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    // EXIBE O INPUT PARA DIGITAR O PALPITE DO USUARIO
    onPressGuess = () => {
        this.setState({
            showInput: true
        })
    }

    // FUNÇAO É CHAMADA APÓS O USUARIO CLICAR EM OK NO INPUT DO PALPITE
    // ATUALIZA A STORE COM A PONTUAÇAO (10 PONTOS CASO NAO TENHA CLICADO EM DETALHES E 5 CASO TENHA)
    // ESCONDE O CARTAO PARA QUE O USUARIO NAO JOGUE NOVAMENTE COM O MESMO CARTAO
    onPressSendGuess = () => {
        let userGuess = this.state.userGuess.toUpperCase()
        let cardName = this.props.card.name.toUpperCase()
        let clickedDetails = this.state.clickedDetails
        // VERIFICA SE O USUARIO DIGITOU ALGO NO CAMPO
        if (userGuess !== '') {
            // VERIFICA SE O USUARIO ACERTOU
            if (cardName === userGuess) {
                // CHAMA A FUNÇAO QUE MUDA O BACKGROUND DO CARTAO E O DESABILITA
                this.addNewClasses(true)
                // VERIFICA SE O USUARIO CLICOU NO BOTAO DETALHES
                if (clickedDetails) {
                    //ATUALIZA O SCORE COM 5 PONTOS
                    this.props.dispatch(updateScore(5))
                    this.setState({
                        clickedDetails: false
                    })
                } else {
                    // ATUALIZA O SCORE COM 10 PONTOS
                    this.props.dispatch(updateScore(10))
                }
            } else {
                // CHAMA A FUNÇAO QUE MUDA O BACKGROUND DO CARTAO E O DESABILITA
                this.addNewClasses(false)
            }

            // ESCONDE O INPUT
            this.setState({
                showInput: false
            })
        }
    }

    // ATUALIZA O STATE COM O PALPITE DO USUARIO
    onChangeGuess = event => {
        this.setState({
            userGuess: event.target.value
        })
    }

    // VERIFICA SE O JOGAR CLICOU EM EXIBIR OS DETALHES DO CARTAO (PERDE 5 PONTOS)
    onClickDetails = () => {
        this.setState({
            clickedDetails: true
        })
    }

    // ADICIONA CLASSES AO CARTAO APOS USUARIO ENVIAR O PALPITE
    addNewClasses = (status) => {
        // VERIFICA SE O USUARIO ACERTOU OU ERROU
        // SE ACERTOU MUDA O BACKGROUND PARA VERDE E DESABILITA O BOTAO
        if (status) {
            this.setState({
                newClasses: `mask flex-center rgba-green-light disabled`
            })
            // SE ERROU MUDA O BACKGROUND PARA VERMELHO E DESABILITA O BOTAO
        } else {
            this.setState({
                newClasses: `mask flex-center rgba-red-light disabled`
            })
        }
    }

    render() {
        return (
            <div>
                {/* VERIFICA SE O LOADING ESTA ATIVO E EXIBE O SPINNER */}
                {this.state.loading ? (
                    <Spinner />
                ) : (
                        <div>
                            <div id="card" className={`card container mb-3 view overlay zoom ${this.state.newClasses}`} style={style.card}>
                                <img src={this.state.cardImage.image} className="card-img-top mt-3 img-fluid z-depth-1 border" alt="" style={style.cardImage} />
                                <div className="card-body">
                                    <div>
                                        {/* EXIBE O INPUT DE PALPITE QUANDO O USUARIO CLICA EM ADVINHAR */}
                                        {this.state.showInput ? (
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Nome" value={this.state.userGuess} onChange={event => this.onChangeGuess(event)} />
                                                <div className="input-group-append">
                                                    <button className="input-group-text btn-dark" onClick={this.onPressSendGuess}>Ok</button>
                                                </div>
                                            </div>
                                        ) : (
                                                <button className="btn btn-light btn-block mb-2" onClick={this.onPressGuess}>Advinhar</button>
                                            )}
                                        <button className="btn btn-dark btn-block" data-toggle="modal" data-target={`#${(this.props.cardId)}`} onClick={this.onClickDetails}>Detalhes</button>
                                    </div>
                                </div>
                            </div>
                            {/* MODAL DETALHES */}
                            <Details card={this.props.card} cardImage={this.state.cardImage.image} cardId={this.props.cardId} />
                        </div>
                    )}
            </div>
        )
    }
}

const style = {
    cardImage: {
        maxWeight: 110,
        maxHeight: 110
    },
    card: {
        width: "16em"
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Card)