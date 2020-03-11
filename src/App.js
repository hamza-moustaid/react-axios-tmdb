import React, { Component } from 'react';
import maincss from './css/main.css';
import AllMovies from './components/AllMovies.js';
import RatedMovies from './components/RatedMovies.js';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail';

class App extends Component {
  render(){
   return (
      <Router>
        <Switch>
          <Route path="/popular-movies">
            <AllMovies />
          </Route>
          <Route path="/toprated-movies">
            <RatedMovies />
          </Route>
          <Route exact path="/movie-detail/:id" render={(props) => <MovieDetail {...props} /> } />
          )} />
          <Route path="/">
            <AllMovies />
          </Route>
        </Switch>
      </Router>
    ); 
  }
  
}

export default App;
