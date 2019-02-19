import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GameOver extends Component {
    state = {
        name: '',
        email: ''
    }
    
    // FUNÇAO QUE É CHAMADA AO CLICAR NO BOTAO SALVAR, ATUALIZA / CRIA A LOCALSTORAGE
    onSaveScore = () => {
        if(this.state.name !== '' && this.state.email !== ''){
            if(localStorage.length > 0){
                this.addPlayerToLocalStorage()
            }else{
                localStorage.setItem('players', JSON.stringify([]))
                this.addPlayerToLocalStorage()
            }
            this.props.history.push('/ranking')
        }   
    }

    // ADICIONAR UM NOVO PLAYER A LISTA DE PLAYERS DA LOCALSTORAGE
    addPlayerToLocalStorage = () => {
        let players = JSON.parse(localStorage.getItem('players'))
        let newPlayer = {
            name: this.state.name,
            email: this.state.email,
            score: this.props.score
        }
        players.push(newPlayer)
        localStorage.setItem('players', JSON.stringify(players))        
    }

    // ATUALIZA O STATE NAME
    onChangeName = event => {
        this.setState({
            name: event.target.value
        })
    }

    // ATUALIZA O STATE EMAIL
    onChangeEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron p-0 animated slideInDown">
                    <div className="view overlay rounded-top">
                        <img src="http://i.imgur.com/vXzudMx.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="card-body text-center mb-3">
                        <h3 className="card-title h3 mt-3 mb-3"><strong>Fim de Jogo</strong></h3>
                        <h4 className="card-text mt-2 mb-4">Placar: <strong>{this.props.score}</strong> pontos</h4>
                        <div className="text-center border border-light p-4 container">
                            <p>Preencha o formulário abaixo para salvar sua pontuação.</p>
                            <input type="text" className="form-control mb-4" placeholder="Nome" onChange={event => this.onChangeName(event)} required/>
                            <input type="email" className="form-control mb-4" placeholder="E-mail" onChange={event => this.onChangeEmail(event)}/>
                            <button className="btn btn-dark btn-block" onClick={this.onSaveScore}>Salvar</button>
                            <Link to="/" className="btn btn-light btn-block mt-2">Fechar</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameOver