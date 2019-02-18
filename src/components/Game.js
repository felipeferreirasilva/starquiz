import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../utils/api'
import Card from './Card'

class Game extends Component {
    state = {
        cards: {}
    }

    // REQUISITA OS 10 PRIMEIROS PERSONAGENS CADASTRADOS NA API
    componentWillMount() {
        axios.get(`${URL}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    cards: response.data.results
                })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {Object.keys(this.state.cards).length > 0 &&
                        this.state.cards.map(card => (
                            <div key={card.name} className="col-lg-3 col-md-4 col-sm-6"><Card card={card} /></div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Game