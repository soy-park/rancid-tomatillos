import React from "react";
import './Movies.css';
import Movie from './Movie';

function Movies({movies, displayMovieInfo}) {
    const movieCards = movies.map(movieInfo => {
        return (
          <Movie
            poster={movieInfo.poster_path}
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