import React, { useEffect, useState } from 'react'
import { PeopleItem } from './components/PeopleItem'
import { PlanetsItem } from './components/PlanetsItem'

import { StarshipsItem } from './components/StarshipsItem'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import { PeoplesPage } from './pages/PeoplesPage'
import { PlanetsPage } from './pages/PlanetsPage'
import { StarshipsPage } from './pages/StarshipsPage'
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <Router>
      <div className="app py-5">
        <div className="container">
          {/* Main title */}
          <h1 className="display-1 mb-5">Star Wars Api</h1>

          {/* Navigation */}
          <nav>
            <ul className="nav mb-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/peoples" className="nav-link">Peoples</Link>
              </li>
              <li className="nav-item">
                <Link to="/starships" className="nav-link">Starships</Link>
              </li>
              <li className="nav-item">
                <Link to="/planets" className="nav-link">Planets</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/peoples">
              <PeoplesPage/>
            </Route>
            <Route path="/planets">
              <PlanetsPage/>
            </Route>
            <Route path="/starships">
              <StarshipsPage/>
            </Route>
            <Route path="/">
              <MainPage/>
            </Route>
          </Switch>
        </div>
      </div>  
    </Router>
  )
}

export { App }