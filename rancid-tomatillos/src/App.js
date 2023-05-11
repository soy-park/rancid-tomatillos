import React, { Component } from "react";
import './App.css';
import movieData from './mockData';
import Movies from "./Movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rancid Tomatillos</h1>
        </header>
        <main>
          <Movies movies={this.state.movies}/>
        </main>
      </div>
    )
  } 
}

export default App;
