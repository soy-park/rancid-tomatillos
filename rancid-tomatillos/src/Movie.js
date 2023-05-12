import React from "react";
import './Movie.css';
import PropTypes from "prop-types";

const Movie = ({ poster, id, displayMovieInfo }) => {
   return (
     <div className="movieCard">
       <img src={poster} onClick={() => displayMovieInfo(id)}/>
     </div>
   )
}

export default Movie;

Movie.propTypes = {
  poster: PropTypes.string,
  id: PropTypes.number,
  displayMovieInfo: PropTypes.func.isRequired
}