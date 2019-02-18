import React, { Component } from 'react'
import GoogleImages from 'google-images';
import { CSE_ID, API_KEY } from '../utils/googleImages'
import Details from './Details'

class Card extends Component {
    state = {
        cardImage: {
            thumbnail: '',
            image: ''
        }
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

    render() {
        return (
            <div>
                <div className="card mb-3" style={{ width: "15em" }}>
                    <img src={this.state.cardImage.image} className="card-img-top" alt="" style={style.cardImage} />
                    <div className="card-body">
                        <div className="">
                            <button href="#" className="btn btn-primary btn-block">Advinhar</button>
                            <button className="btn btn-dark btn-block" data-toggle="modal" data-target={`#${(this.props.card.name).split(' ')[0]}`}>Exibir Detalhes</button>
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