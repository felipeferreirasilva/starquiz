import React, { Component } from 'react'
import GoogleImages from 'google-images';
import { CSE_ID, API_KEY } from '../utils/googleImages'
import Details from './Details'
import { connect } from 'react-redux'
import { updateScore } from '../actions'

class Card extends Component {
    state = {
        cardImage: {
            thumbnail: '',
            image: ''
        },
        userGuess: '',
        showInput: false,
        cardVisibility: 'visible',
        clickedDetails: false
    }

    // REQUISITA AS IMAGENS DOS CARTOES
    componentDidMount() {
        // this.getImageToCard(this.props.card)
        // .then(response => {
        //     this.setState({
        //         cardImage:{
        //             thumbnail: response[0].thumbnail.url,
        //             image: response[0].url
        //         }
        //     })
        // })
    }

    // UTILIZA API DO GOOGLE PARA PESQUISAR E RETORNAR IMAGENS
    getImageToCard = card => {
        const client = new GoogleImages(CSE_ID, API_KEY);
        return client.search(`${card.name} star wars`)
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
        if (userGuess !== '') {
            if (cardName === userGuess) {
                if (clickedDetails) {
                    this.props.dispatch(updateScore(5))
                } else {
                    this.props.dispatch(updateScore(10))
                }
            }

            this.setState({
                showInput: false,
                cardVisibility: 'hidden'
            })
        }
    }

    // ATUALIZA O STATE COM O PALPITE DO USUARIO
    onChangeGuess = event => {
        this.setState({
            userGuess: event.target.value
        })
    }

    onClickDetails = () => {
        this.setState({
            clickedDetails: true
        })
    }

    render() {
        return (
            <div>
                {/* OBSERVA O STATE cardVisibility PARA MOSTRAR OU ESCONDER O CARTAO */}
                <div className="card container mb-3 view overlay zoom" style={{ width: "16em", visibility: `${this.state.cardVisibility}` }}>
                    <img src={this.state.cardImage.image} className="card-img-top mt-3 img-fluid z-depth-1 border" alt="" style={style.cardImage} />
                    <div className="card-body">
                        <div className="">
                            {/* EXIBE O INPUT DE PALPITE QUANDO O USUARIO CLICA EM ADVINHAR */}
                            {this.state.showInput ? (
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" value={this.state.userGuess} onChange={event => this.onChangeGuess(event)} />
                                    <div className="input-group-append">
                                        <button className="input-group-text btn-dark" onClick={this.onPressSendGuess}>Ok</button>
                                    </div>
                                </div>
                            ) : (
                                    <button href="#" className="btn btn-light btn-block mb-2" onClick={this.onPressGuess}>Advinhar</button>
                                )}
                            {/* CRIA UM ID PRA O MODAL UTILIZANDO A PRIMEIRA PARTE DO NOME DO PERSONAGEM COMO ID */}
                            <button className="btn btn-dark btn-block" data-toggle="modal" data-target={`#${(this.props.card.name).split(' ')[0]}`} onClick={this.onClickDetails}>Detalhes</button>
                        </div>
                    </div>
                </div>

                {/* MODAL DETALHES */}
                <Details card={this.props.card} cardImage={this.state.cardImage.image} />
            </div>
        )
    }
}

const style = {
    cardImage: {
        maxWeight: 110,
        maxHeight: 110
    }
}

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(Card)