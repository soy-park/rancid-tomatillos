import React, { Component } from "react";
import './Form.css'
import PropTypes from "prop-types";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => this.props.filterMovies(this.state.title))
    };

    clearInputs = (event) => {
        this.setState({title: ''});
        this.props.clearFilteredMovies();
    };

    render() {
        return (
            <div className="form-container">
                <input 
                    type="text" 
                    placeholder="Search Movie Title" 
                    value={this.state.title}
                    name="title" 
                    onChange={(event) => this.handleChange(event)}
                    className="search-field"
                />
                <button className="button" onClick={(event) => this.clearInputs(event)}>Back to All Movies</button>
            </div>
        )
     };
    };

export default Form;

Form.propTypes = {
    title: PropTypes.string
  }