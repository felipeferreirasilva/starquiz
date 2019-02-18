import React, { Component } from 'react'
import GoogleImages from 'google-images';
import { CSE_ID, API_KEY } from '../utils/googleImages'

class Card extends Component {
    state = {
        cardImage: ''
    }

    componentWillMount() {
        // REQUISITA AS IMAGENS DOS CARTOES
        // this.getImageToCard(this.props.card)
        // .then(response => {
        //     this.setState({
        //         cardImage: response[0].thumbnail.url
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
                    <img src={this.state.cardImage} className="card-img-top img-thumbnail" alt="" style={style.cardImage} />
                    <div className="card-body">
                        <div className="">
                            <button href="#" className="btn btn-primary btn-block">Advinhar</button>
                            <button className="btn btn-dark btn-block" data-toggle="modal" data-target="#detailsModal">Exibir Detalhes</button>
                        </div>
                    </div>
                </div>

                {/* MODAL */}
                <div className="modal fade" id="detailsModal" tabIndex="-1" role="dialog" aria-labelledby="detailsModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="detailsModalLabel">Detalhes do Personagem</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

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