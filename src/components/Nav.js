import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../utils/images'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <Link className="navbar-brand" to="/"><img src={LOGO} alt="" className="img-fluid" style={style.logo}></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const style = {
    logo: {
        maxHeight: 50
    }
}

export default Nav