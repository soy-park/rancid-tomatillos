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
        <p>Genre: {(movie[0].genres)}</p>
        <p>Tagline: {(movie[0].tagline)}</p>
        <p>Plot: {(movie[0].overview)}</p>
        <p>Runtime: {(movie[0].runtime)} min</p>
        <p>Average Rating: {(movie[0].average_rating).toFixed(1)}</p>
        <p>Budget: ${(movie[0].budget)}</p>
        <p>Revenue: ${(movie[0].revenue)}</p>
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