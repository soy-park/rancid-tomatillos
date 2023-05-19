import React, { Component } from "react";
import './App.css';
import movieData from './mockData';
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Movie from "./Movie";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {}
    }
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(err => console.log(err))
  }  

  displayMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({ movies: this.state.movies, singleMovie: data.movie })
      })
      .catch(err => console.log(err))
  }

  displayMainPage = () => {
    this.setState({ movies: this.state.movies, singleMovie: {} })
  }
  
  render() {
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
            <Route exact path="/" render={() => <Movies name="movies" movies={this.state.movies} singleMovie={this.state.singleMovie} displayMovieInfo={this.displayMovieInfo} />} />
            <Route path="/:id" render={({ match }) => {
              const movieID = match.params.id;
              this.displayMovieInfo(movieID);
              return (<SingleMovie movie={this.state.singleMovie} displayMainPage={this.displayMainPage} />
              )
            }
          } />
      </main>
    )
  } 
}

export default App;
