import React from 'react'

const Details = props => {
    return (
        <div className="modal fade" id={`${(props.card.name).split(' ')[0]}`} tabIndex="-1" role="dialog" aria-labelledby="detailsModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="detailsModalLabel">Detalhes do Personagem</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={props.cardImage} className="card-img-top img-thumbnail mb-3" alt="" style={style.cardImage} />
                        <h6><strong>Especie: </strong>species</h6>
                        <h6><strong>Altura: </strong>{props.card.height}</h6>
                        <h6><strong>Cabelo: </strong>{props.card.hair_color}</h6>
                        <h6><strong>Planeta: </strong>homeworld</h6>
                        <h6><strong>Filmes: </strong>films</h6>
                        <h6><strong>Veiculos: </strong>starchips</h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const style = {
    cardImage: {
        maxWeight: 100,
        maxHeight: 250
    }
}

export default Details