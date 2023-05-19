import React from "react";
import './SingleMovie.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const SingleMovie = ({ movie, displayMainPage }) => {
  const movieRating = Math.round(movie.average_rating)
   return (
    <div className="single-movie-info">
      <img className="single-img"src={movie.poster_path} />
      <div className="movie-info">
        <h2 className="single-title">{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Genre: {movie.genres}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Plot: {movie.overview}</p>
        <p>Runtime: {movie.runtime} min</p>
        <p>Average Rating: {movieRating}</p>
        <p>Budget: ${movie.budget}</p>
        <p>Revenue: ${movie.revenue}</p>
      <Link to={'/'} key={`${movie.id}`}><button className="back-to-main" onClick= {() => displayMainPage()}>Back to Main</button></Link>
      </div>
    </div>
  );
  }; 


export default SingleMovie;

SingleMovie.propTypes = {
  movie: PropTypes.any.isRequired,
  displayMainPage: PropTypes.func.isRequired
}