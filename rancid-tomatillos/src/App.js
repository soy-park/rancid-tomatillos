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

  render() {
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          <Movies movies={this.state.movies}/>
      </main>
    )
  } 
}

export default App;
