import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../utils/images'

// PARA UTLIZAR O HISTORY EM UM COMPONENT FORA DO <ROUTER />
import { withRouter } from "react-router";

export class Nav extends Component {
    render() {
        const pathName = this.props.location.pathname
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 animated slideInDown fixed-top scrolling-navbar">
                <Link id="linkLogo" className="navbar-brand" to="/"><img id="logo" src={LOGO} alt="" className="img-fluid" style={style.logo}></img><span className="ml-2"><strong>StarQuiz</strong></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${pathName === '/' && 'active'}`}>
                            <Link id="linkHome" className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className={`nav-item ${pathName === '/about' && 'active'}`}>
                            <Link id="linkAbout" className="nav-link" to="/about">Sobre</Link>
                        </li>
                        <li className={`nav-item ${pathName === '/ranking' && 'active'}`}>
                            <Link id="linkRanking" className="nav-link" to="/ranking">Placar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const style = {
    logo: {
        maxHeight: 50
    }
}

// CONECTA O COMPONENT COM O <ROUTER />
const NavWithRouter = withRouter(Nav)

export default (NavWithRouter)