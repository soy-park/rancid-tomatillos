import React, { Component } from "react";
import './App.css';
import movieData from './mockData';
import Movies from "./Movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  displayMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    this.setState({ movies: filteredMovie })
    
    // {this.state.movies.length === 1 && <h2>Hello</h2>}
    
    // (<div>
    //   <img src={this.state.movies.poster_path}/>
    //   <h3>{this.state.movies.title}</h3>
    //   </div>)}
  }

  render() {
    console.log(this.state.movies.title)
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          <Movies movies={this.state.movies} displayMovieInfo={this.displayMovieInfo}/>
          {this.state.movies.length === 1 && <div className="movie-info">
          <img src={this.state.movies[0].poster_path}/>
            <h2>{this.state.movies[0].title}</h2>
            <p>Release Date:{(this.state.movies[0].release_date)}</p>
            {/* <p>Genre: {(this.state.movies[0].genres)}</p>
            <p>Tagline: {(this.state.movies[0].tagline)}</p>
            <p>Plot: {(this.state.movies[0].overiew)}</p>
            <p>Runtime: {(this.state.movies[0].runtime)}</p> */}
            <p>Average Rating:{(this.state.movies[0].average_rating).toFixed(1)}</p>
            {/* <p>Budget: {(this.state.movies[0].budget)}</p>
            <p>Revenue: {(this.state.movies[0].revenue)}</p> */}
            </div>}
      </main>
    )
  } 
}

export default App;
