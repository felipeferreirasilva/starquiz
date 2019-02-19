import React, { Component } from 'react'
import axios from 'axios'

class Details extends Component {

    state = {
        species: [],
        height: '',
        hair: '',
        homeworld: '',
        films: [],
        vehicles: []
    }

    componentWillMount() {
        let card = this.props.card
        this.onGetSpecies(card)
        this.onGetHomeWorld(card)
        this.onGetFilms(card)
        this.onGetVehicles(card)
        this.setState({
            height: this.props.card.height,
            hair: this.props.card.hair_color
        })
    }

    onGetSpecies = card => {
        card.species.map(specie => (
            axios.get(specie)
                .then(response => {
                    let newSpecies = this.state.species
                    newSpecies.push(response.data.name)
                    this.setState({
                        species: newSpecies
                    })
                })
        ))
    }

    onGetHomeWorld = card => {
        axios.get(card.homeworld)
            .then(response => {
                this.setState({
                    homeworld: response.data.name
                })
            })
    }

    onGetFilms = card => {
        card.films.map(film => (
            axios.get(film)
                .then(response => {
                    let newFilms = this.state.films
                    newFilms.push(response.data.title)
                    this.setState({
                        films: newFilms
                    })
                })
        ))
    }

    onGetVehicles = card => {
        card.vehicles.map(vehicle => (
            axios.get(vehicle)
                .then(response => {
                    let newVehicles = this.state.vehicles
                    newVehicles.push(response.data.name)
                    this.setState({
                        vehicles: newVehicles
                    })
                })
        ))
    }

    render() {
        console.log(this.props.card)
        return (
            <div className="modal fade" id={`${(this.props.card.name).split(' ')[0]}`} tabIndex="-1" role="dialog" aria-labelledby="detailsModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="detailsModalLabel">Detalhes do Personagem</h5>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.cardImage} className="card-img-top img-thumbnail mb-3" alt="" style={style.cardImage} />
                            <h6><strong>Especie: </strong>{this.state.species.map(specie => <span key={specie}>{specie}, </span>)}</h6>
                            <h6><strong>Altura: </strong>{this.state.height}</h6>
                            <h6><strong>Cabelo: </strong>{this.state.hair}</h6>
                            <h6><strong>Planeta: </strong>{this.state.homeworld}</h6>
                            <h6><strong>Filmes: </strong>{this.state.films.map(film => <span key={film}>{film}, </span>)}</h6>
                            <h6><strong>Veiculos: </strong>{this.state.vehicles.map(vehicle => <span key={vehicle}>{vehicle}, </span>)}</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
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
        maxHeight: 250
    }
}

export default Details