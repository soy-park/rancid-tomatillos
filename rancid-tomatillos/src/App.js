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
      movies: movieData.movies,
    }
  }

  displayMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    this.setState({ movies: filteredMovie })
    console.log(filteredMovie)
  }
  
  render() {
    console.log(this.state.movies)
    console.log(this.state.movies[0].title)
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieInfo={this.displayMovieInfo}/>}
          {this.state.movies.length === 1 && <SingleMovie movie={this.state.movies}/> } 
      </main>
    )
  } 
}

export default App;
