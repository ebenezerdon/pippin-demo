import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'materialize-css'
import { Navbar } from './navBar'
import '../style/index.scss'

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={Navbar} />
        </Switch>
    </Router>
)

export default App
