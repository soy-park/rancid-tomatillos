import React from "react";
import { Link } from 'react-router-dom';

const Form = ({ id, value, handleChange, filterMovies }) => {
    return (
        <form>
            <input 
                type="text" 
                name="searchbar" 
                placeholder="Search Movie" 
                onChange={handleChange}
            />
            <Link to={`/${id}`} key={`${id}`}><input 
                type="submit" 
                value="Submit" 
                onClick={(event) => filterMovies(event)}
            /></Link>
        </form>
    )
 }

export default Form;