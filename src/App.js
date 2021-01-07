import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages'
import Projects from './pages/projects'
import NegativeEnergyMentor from './pages/negative-energy-mentor'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/negative-engergy-mentor" component={NegativeEnergyMentor} />
      </Switch>
    </Router>
  )
}

export default App
