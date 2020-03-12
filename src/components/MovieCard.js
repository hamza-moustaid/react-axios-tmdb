import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import noImage from '../img/no-image.jpg';


class MovieCard extends Component {

    constructor(props) {
        super(props)
        this.haha = this.haha.bind(this)
    
    }
    


    haha(){
        // console.log(this.props.getMa(this.state.pid))
        if(this.props.getMa) {
            const {getMa, pid} = this.props
            getMa(pid)
        }
    }



    // static getDerivedStateFromProps(props, state) {
    //     console.log(props)
    //     if (props.pid !== state.movieID) {

    //         console.log(props, state);
    //         // return {
    //         //     movieID: props.pid,
    //         // }
    //     }
    //     return null;
    // };

  render(){
      //console.log(this.state.movie)
    const mv = this.props.movies.map((movie) => 
        <div className="movie-card card col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"  key={movie.id}>
        <div className="badge badge-success badge-vote">{movie.vote_average}</div>
            {movie.poster_path == null && 
                <Link to={`/movie-detail/${movie.id}`}><img alt="" src={noImage} className="card-img-top"/></Link>
            }
            {movie.poster_path != null && 
                <Link onClick={this.haha} to={`/movie-detail/${movie.id}`}><img alt="" src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} className="card-img-top"/></Link>
                
            }
            <div className="card-body">
            <Link to={`/movie-detail/${movie.id}`}><h5 className="card-title">{movie.title}</h5></Link>

            <p>Release date : <span className="badge badge-warning">{movie.release_date}</span></p>



            
                {/* {movie.overview.length > 100 && 
                    <p className="card-text">{`${movie.overview.substring(0, 100)}...`}</p>
                }
                {movie.overview.length <= 100 && 
                    <p className="card-text">{`${movie.overview.substring(0, 100)}`}</p>
                } */}
                {/* <Link to={`/movie-detail/${movie.id}`} className="btn btn-info btn-movie-detail">Movie detail</Link> */}
            </div>
        </div>
    )
   return (
    <div className="row">
        {mv}
    </div>
    ); 
  }
  
}

export default MovieCard;
