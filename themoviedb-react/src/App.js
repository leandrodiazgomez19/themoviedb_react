import './assets/css/App.css'
import React from 'react'
import Movies from './assets/components/Movies'
import Tv from './assets/components/Tv'
import Footer from './assets/components/Footer'
import Search from './assets/components/Search'
import Navbar from './assets/components/Navbar'
import People from './assets/components/People'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router> 
      <Navbar />
      <Search />

      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={Tv} />
        <Route path="/people" component={People} />
        <Route path="/" component={Movies} />

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
