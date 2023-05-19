import React from "react";
import './Movie.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Movie = ({ poster, id, displayMovieInfo }) => {
   return (
     <div className="movieCard">
       <Link to={`/${id}`} key={`${id}`}><img src={poster} onClick={() => displayMovieInfo(id)}/></Link>
     </div>
   )
}

export default Movie;

Movie.propTypes = {
  poster: PropTypes.string,
  id: PropTypes.number,
  displayMovieInfo: PropTypes.func.isRequired
}