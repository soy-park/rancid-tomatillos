import React from "react";

const Form = ({ handleChange, filterMovies }) => {
    return (
        <form>
            <input type="text" name="searchbar" placeholder="Search Movie" onChange={handleChange}></input>
            <input type="submit" value="Submit" onClick={() => filterMovies()}></input>
        </form>
    )
 }

export default Form;