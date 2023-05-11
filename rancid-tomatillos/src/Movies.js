import React from "react";
import './Movies.css';
import Movie from './Movie';

function Movies({movies}) {
    const movieCards = movies.map(movieInfo => {
        return (
          <Movie
            title={movieInfo.title}
            poster={movieInfo.poster_path}
            id={movieInfo.id}
            key={movieInfo.id}
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