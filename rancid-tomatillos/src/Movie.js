import React from "react";
import './Movie.css';

const Movie = ({ title, poster, id }) => {
   return (
     <div className="movieCard">
       <img src={poster}/>
       <h3>{title}</h3>
     </div>
   )
}

export default Movie;