import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../utils/images'

const Home = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="text-center">
                <div><img src={LOGO} alt="darth vader banner" className="img-fluid" style={style.logo}></img></div>
                <h2 className="mt-5">StarQuiz!</h2>
                <Link to="/game" className="btn btn-outline-dark btn-lg mt-3">Jogar!</Link>
            </div>
        </div>
    )
}

const style = {
    logo: {
        maxHeight: 260
    }
}

export default Home