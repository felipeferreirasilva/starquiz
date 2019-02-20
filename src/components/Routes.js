import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Game from './Game'
import Ranking from './Ranking'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/game" component={Game} />
            <Route path="/ranking" component={Ranking} />
        </div>
    )
}

export default Routes