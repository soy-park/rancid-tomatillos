import React from "react";
import './Movie.css';

const Movie = ({ title, poster, id }) => {
   return (
     <div className="movieCard">
       <img src={poster}/>
     </div>
   )
}

export default Movie;