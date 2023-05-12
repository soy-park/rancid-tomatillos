import React from "react";
import './SingleMovie.css';

const SingleMovie = ({ movie }) => {
   return (
    <div className="movie-info">
          <img src={movie[0].poster_path}/>
            <h2>{movie[0].title}</h2>
            <p>Release Date:{(movie[0].release_date)}</p>
            {/* <p>Genre: {(this.state.movies[0].genres)}</p>
            <p>Tagline: {(this.state.movies[0].tagline)}</p>
            <p>Plot: {(this.state.movies[0].overiew)}</p>
            <p>Runtime: {(this.state.movies[0].runtime)}</p> */}
            <p>Average Rating:{(movie[0].average_rating).toFixed(1)}</p>
            {/* <p>Budget: {(this.state.movies[0].budget)}</p>
            <p>Revenue: {(this.state.movies[0].revenue)}</p> */}
            </div>
            )}


export default SingleMovie;