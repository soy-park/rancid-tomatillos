import React from "react";
import './Movie.css';

const Movie = ({ poster, id, displayMovieInfo }) => {
   return (
     <div className="movieCard">
       <img src={poster} onClick={() => displayMovieInfo(id)}/>
     </div>
   )
}

export default Movie;