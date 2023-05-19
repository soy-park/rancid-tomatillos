import React from "react";

const Form = ({ value, handleChange, filteredMovies }) => {
    return (
        <form>
            <input type="text" name="searchbar" placeholder="Search Movie" value={value} onChange={handleChange}></input>
            <input type="submit" value="Submit"></input>
        </form>
    )
 }

export default Form;