import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import noImage from '../img/no-image.jpg';


class MovieDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movie: {},
             genre: [],
             recommendation: []
        }

        this.getM = this.getM.bind(this)
    }

    getM(id){      
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d7d4eb655831d5b6781ceeebfa4094dd`)
          .then( response  => {
            this.setState({ movie: response.data, genre: response.data.genres });
          });

          axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=d7d4eb655831d5b6781ceeebfa4094dd`)
          .then( response  => {
            this.setState({ recommendation: response.data.results });
          });
    }

    componentDidMount() {
      const { match: { params } } = this.props;
      
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d7d4eb655831d5b6781ceeebfa4094dd`)
          .then( response  => {
            this.setState({ movie: response.data, genre: response.data.genres });
          });

          axios.get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=d7d4eb655831d5b6781ceeebfa4094dd`)
          .then( response  => {
            this.setState({ recommendation: response.data.results });
          });
    }

  render(){
    const { match: { params } } = this.props;
      const movie = this.state.movie;
      const genre = this.state.genre;
      const recom = this.state.recommendation;
   return (
    <div className="App">
        <Navbar/>
        <div className="row m-0 movie-detail-div">
                {movie.poster_path == null && 
                    <div className="col-md-3 no-image-movie text-center"><img alt="" src={noImage} className="card-img-top"/></div>
                }
                {movie.poster_path != null && 
                    <div className="col-md-3 text-center"><img alt="" src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} className="card-img-top"/></div>
                }
                <div className="col-md-9 no-image-movie text-left m-l-10 m-r-10">
                    <h1>{movie.title} <span className="badge badge-success">{movie.original_language}</span></h1>
                    <hr/>
                    <h5 className="h-moviedetail">Overview : </h5> <h5>{movie.overview}</h5><br/>
                    <h5 className="h-moviedetail">Genre : </h5> <h5 className="movie-genre">{genre.map(rep => <div key={rep.id}><span className="badge badge-warning badge-result">{rep.name}</span>&nbsp;</div>)}</h5><br/>
                    <h5 className="h-moviedetail">Release date : </h5> <h5 className="badge badge-success badge-result">{movie.release_date}</h5><br/>
                    <h5 className="h-moviedetail">Vote average : </h5> <h5 className="badge badge-success badge-result">{movie.vote_average}</h5><br/>
                    <h5 className="h-moviedetail">Vote count : </h5> <h5 className="badge badge-success badge-result">{movie.vote_count}</h5><br/>
                    
                </div>
        </div>
        {this.state.recommendation != "" ?
        <div className="row recom-div m-0 m-t-40 p-15">
            <h2>Recommendations</h2>
            <MovieCard movies={this.state.recommendation} pid={params.id} getMa={this.getM} match={this.props.match} />  
        </div>
        : <div className="row recom-div m-0 m-t-40 p-15">
            <h2>No recommendation movies for this movie</h2>
        </div>
        }
    </div>
    ); 
  }
  
}

export default MovieDetail;
