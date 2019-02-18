import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron text-center mt-5">
                <div><img src="https://pngimage.net/wp-content/uploads/2018/05/darth-vader-face-png.png" alt="darth vader banner" className="img-fluid" style={style.mainImage}></img></div>
                <h2 className="mt-5">StarQuiz!</h2>
                <Link to="/game" className="btn btn-outline-dark btn-lg mt-5">Jogar!</Link>
            </div>
        </div>
    )
}

const style = {
    mainImage: {
        maxHeight: 250
    }
}

export default Home