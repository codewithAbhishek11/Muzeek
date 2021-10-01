import React from 'react'
import {BrowserRouter, Link,Switch,Route} from 'react-router-dom'
import Browse from './pages/Browse'
import Discover from './pages/Discover'
import Home from './pages/Home'
import MyMusic from './pages/MyMusic'
import SongsList from './pages/SongsList'

import './Router.css'
function Router() {
    return (
        <div className="header">
            <BrowserRouter>
            <nav className="navbar py-2 navbar-expand-lg navbar-dark customize">
        <div className="container-fluid">
        <a className="navbar-brand " href="#" id="logo">Muzeek</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link routes" aria-current="page" to="/home">All</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link routes" aria-current="page" to="/browse">Trending</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link routes " aria-current="page" to="/discover">New Releases</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link routes" aria-current="page"  to="/mymusic">Old Hits</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/discover" component={Discover}></Route>
                <Route path="/browse" component={Browse}></Route>
                <Route path="/mymusic" component={MyMusic}></Route>
                <Route path="/songs-list" component={SongsList}></Route>
            </Switch>
            
            </BrowserRouter>
        </div>
    )
}

export default Router
