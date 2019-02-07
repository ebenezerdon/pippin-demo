import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { Navbar } from './navBar'

const App = () => (
    <Router>
        <Switch>
            <Navbar />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
)

export default App
