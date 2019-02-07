import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './navBar'

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={Navbar} />
        </Switch>
    </Router>
)

export default App
