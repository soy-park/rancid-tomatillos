import React from "react";

const Form = ({ value, handleChange, filterMovies }) => {
    return (
        <form>
            <input 
                type="text" 
                name="searchbar" 
                placeholder="Search Movie" 
                onChange={handleChange}
            />
            <input 
                type="submit" 
                value="Submit" 
                onClick={filterMovies}
            />
        </form>
    )
 }

export default Form;