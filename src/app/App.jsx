import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import { Navbar } from './navBar'
import '../style/index.scss'

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Router>
)

export default App
