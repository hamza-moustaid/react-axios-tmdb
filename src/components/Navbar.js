import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render(){
   return (
      <div id="header">
        <div className="row text-center">
            <Link to="/popular-movies" className="movies-link">Popular movies</Link>
            <Link to="/"><img src={logo} className="logo text-center" alt="Logo"/></Link>
            <Link to="/toprated-movies" className="movies-link">High Rated Movies</Link>
        </div>
      </div>
    ); 
  }
  
}

export default Navbar;
