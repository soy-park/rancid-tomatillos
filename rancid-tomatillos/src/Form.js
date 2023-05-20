import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    };

    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value }, () => this.props.filterMovies(this.state.title))
        console.log(this.state.title)
        // console.log(this.props.filterMovies())
    }

    clearInputs = (event) => {
        console.log(this.props)
        event.preventDefault();
        this.setState({title: ''});
        this.props.clearFilteredMovies();
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search Movie Title" 
                    value={this.state.title}
                    name="title" 
                    onChange={(event) => this.handleChange(event)}
                    className="search-field"
                />
                <button className="button" onClick={(event) => this.clearInputs(event)}>
                Clear
                </button>
                {/* <Link to={`/${id}`} key={`${id}`}><input 
                    type="submit" 
                    value="Submit" 
                    onClick={(event) => filterMovies(event)}
                /></Link> */}
            </div>
        )
     }

    }




export default Form;