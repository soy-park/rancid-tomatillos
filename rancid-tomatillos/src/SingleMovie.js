import React from "react";
import './SingleMovie.css';
import PropTypes from "prop-types";

const SingleMovie = ({ movie, displayMainPage }) => {
   return (
    <div className="single-movie-info">
      
      <img className="single-img"src={movie[0].poster_path} />
      <div className="movie-info">
        <h2 className="single-title">{movie[0].title}</h2>
        <p>Release Date: {(movie[0].release_date)}</p>
        {/* <p>Genre: {(this.state.movies[0].genres)}</p>
        <p>Tagline: {(this.state.movies[0].tagline)}</p>
        <p>Plot: {(this.state.movies[0].overiew)}</p>
        <p>Runtime: {(this.state.movies[0].runtime)}</p> */}
        <p>Average Rating: {(movie[0].average_rating).toFixed(1)}</p>
        {/* <p>Budget: {(this.state.movies[0].budget)}</p>
        <p>Revenue: {(this.state.movies[0].revenue)}</p> */}
      <button className="back-to-main" onClick= {() => displayMainPage()}>Back to Main</button>
      </div>
    </div>
  );
};


export default SingleMovie;

SingleMovie.propTypes = {
  movie: PropTypes.any.isRequired,
  displayMainPage: PropTypes.func.isRequired
}