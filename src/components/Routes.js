import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Game from './Game'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
        </div>
    )
}

export default Routes