import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../utils/images'
import { withRouter } from "react-router";

export class Nav extends Component {
    render() {
        const pathName = this.props.location.pathname
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 animated slideInDown fixed-top scrolling-navbar">
                <Link className="navbar-brand" to="/"><img src={LOGO} alt="" className="img-fluid" style={style.logo}></img><span className="ml-2"><strong>StarQuiz</strong></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${pathName === '/' && 'active'}`}>
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className={`nav-item ${pathName === '/about' && 'active'}`}>
                            <Link className="nav-link" to="/about">Sobre</Link>
                        </li>
                        <li className={`nav-item ${pathName === '/ranking' && 'active'}`}>
                            <Link className="nav-link" to="/ranking">Placar</Link>
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

const NavWithRouter = withRouter(Nav)

export default (NavWithRouter)