import React, { Component } from "react";
import './App.css';
import movieData from './mockData';
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Movie from "./Movie";
import Form from "./Form";
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      filteredMovies: [],
      searchedMovie: ""
    }
  };

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(err => {
        throw new Error(`${err}`)
      })
  };

  filterMovies = (title) => {
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    this.setState({filteredMovies: filteredMovies, searchedMovie: title});
  };

  clearFilteredMovies = () => {
    this.setState({filteredMovies: [], searchedMovie: ""});
  };

  displayMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({ movies: this.state.movies, singleMovie: data.movie })
      })
      .catch(err => {
        throw new Error(`${err}`)
      })
  };

  displayMainPage = () => {
    this.setState({ movies: this.state.movies, singleMovie: {} });
  };

  render() {
    const movieData = this.state.searchedMovie ? this.state.filteredMovies : this.state.movies;
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          <Route exact path="/" render={() => <Form filterMovies={this.filterMovies} clearFilteredMovies={this.clearFilteredMovies}/>} />
          {(this.state.filteredMovies.length === 0 && this.state.searchedMovie) && <h2 className="error-message">Sorry, no movies match that title</h2>}
          <Route exact path="/" render={() => <Movies name = "movies" movies={movieData} displayMovieInfo={this.displayMovieInfo}/>} />
          <Route path="/:id" render={({ match }) => {
            const movieID = match.params.id;
            this.displayMovieInfo(movieID);
            return (<SingleMovie movie={this.state.singleMovie} displayMainPage={this.displayMainPage} />
            )
          }} />
      </main>
    );
  } ;
};

export default App;

App.propTypes = {
  movies: PropTypes.array.isRequired,
  singleMovie: PropTypes.object,
  filteredMovies: PropTypes.array,
  searchedMovie: PropTypes.string
}