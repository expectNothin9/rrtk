import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages'
import Projects from './pages/projects'

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
