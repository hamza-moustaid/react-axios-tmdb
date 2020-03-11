import React, { Component } from 'react';
import Navbar from './Navbar.js'
import axios from 'axios';
import MovieCard from './MovieCard.js';
import Pagination from "react-js-pagination";

class AllMovies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies: [],
             activePage: 1
        }
        this.getMovies = this.getMovies.bind(this);
        this.getMovies(1)
    }
    
    getMovies(page){
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d7d4eb655831d5b6781ceeebfa4094dd&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${page}`).then(response => 
            this.setState({
                movies: response.data.results,
                activePage: page
            })
        )
    } 
    
  render(){
   return (
    <div className="App">
        <Navbar />
        <div className="allmovies-body">
            <h1 className="h1">Popular Movies</h1>
            <MovieCard movies={this.state.movies} />
            <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={5}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={this.getMovies.bind(this)}
            />
        </div>
      </div>
    ); 
  }
  
}

export default AllMovies;
