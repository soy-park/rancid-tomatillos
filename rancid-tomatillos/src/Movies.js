import React from "react";
import './Movies.css';
import Movie from './Movie';
import PropTypes from "prop-types";
<<<<<<< HEAD
=======
import { Route, Link } from 'react-router-dom';
>>>>>>> 308ebd693c45da86814435438f73a1b58ac51901

function Movies({ movies, displayMovieInfo }) {
      const movieCards = movies.map(movieInfo => {
        return (
          <Movie
            poster={movieInfo.poster_path}
            title={movieInfo.title}
            id={movieInfo.id}
            key={movieInfo.id}
            displayMovieInfo={displayMovieInfo}
          />
        )
    })

    return (
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.any.isRequired,
  displayMovieInfo: PropTypes.func.isRequired
}