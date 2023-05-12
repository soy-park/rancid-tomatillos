import React, { Component } from "react";
import './App.css';
import movieData from './mockData';
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Movie from "./Movie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ''
    }
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
  }

  displayMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    this.setState({ movies: filteredMovie })
  }

  displayMainPage = () => {
    this.setState({ movies: movieData.movies })
  }
  
  render() {
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieInfo={this.displayMovieInfo}/>}
          {this.state.movies.length === 1 && <SingleMovie movie={this.state.movies} displayMainPage={this.displayMainPage}/> } 
      </main>
    )
  } 
}

export default App;
