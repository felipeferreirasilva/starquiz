import React, { Component } from 'react'
import GoogleImages from 'google-images';
import { CSE_ID, API_KEY } from '../utils/googleImages'
import Details from './Details'

class Card extends Component {
    state = {
        cardImage: {
            thumbnail: '',
            image: ''
        },
        userGuess: '',
        showInput: false
    }

    componentWillMount() {
        // REQUISITA AS IMAGENS DOS CARTOES
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
        return client.search(card.name)
    }

    onPressGuess = () => {
        this.setState({
            showInput: true
        })
    }

    render() {
        return (
            <div>
                <div className="card container mb-3" style={{ width: "15em" }}>
                    <img src={this.state.cardImage.image} className="card-img-top mt-2" alt="" style={style.cardImage} />
                    <div className="card-body">
                        <div className="">
                            {this.state.showInput ? (
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" />
                                    <div className="input-group-append">
                                        <button className="input-group-text btn-dark" onClick={() => console.log('salvo')}>Ok</button>
                                    </div>
                                </div>
                            ) : (
                                    <button href="#" className="btn btn-primary btn-block mb-2" onClick={this.onPressGuess}>Advinhar</button>
                                )}
                            <button className="btn btn-dark btn-block" data-toggle="modal" data-target={`#${(this.props.card.name).split(' ')[0]}`}>Detalhes</button>
                        </div>
                    </div>
                </div>

                {/* MODAL */}
                <Details card={this.props.card} cardImage={this.state.cardImage.image} />
            </div>
        )
    }
}

const style = {
    cardImage: {
        maxWeight: 100,
        maxHeight: 150
    }
}

export default Card