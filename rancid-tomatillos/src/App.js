import React, { Component } from "react";
import './App.css';
import movieData from './mockData';
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Movie from "./Movie";
import Form from "./Form";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      value: '',
      filteredMovies: [],
      searchedMoive: ""
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

  filterMovies = (title) => {
    console.log(title.toLowerCase())
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
    this.setState({filteredMovies: filteredMovies, searchedMoive: title})
    console.log(this.state.filteredMovies)
    console.log(this.searchedMoive)
  }

  clearFilteredMovies = () => {
    this.setState({filteredMovies: [], searchedMoive: ""})
  }

  // filterMovies = (event) => {
  //   const desiredMovie = this.state.value.toLowerCase();
  //   const moviesInLowerCase = this.state.movies.map(movie => movie.title.toLowerCase());
  //   const searchedMovieTitles = moviesInLowerCase.filter(movie => movie.includes(desiredMovie));
  //   const searchedMovieTitlesFormatted = searchedMovieTitles.map(movie => movie.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' '));
  //   const searchedMovies = this.state.movies.filter(movie => movie.title === searchedMovieTitlesFormatted[0])
  //   this.setState({ 
  //     movies: this.state.movies,
  //     singleMovie: {},
  //     value: event.target.value,
  //     filteredMovies: this.state.filteredMovies.push(searchedMovies)
  //   })
  //   console.log(this.state.filteredMovies)
  // }

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
  
  // handleChange = (event) => {
  //   event.preventDefault();
  //   this.setState({ 
  //     movies: this.state.movies,
  //     singleMovie: {},
  //     value: event.target.value,
  //     filteredMovies: []
  //   })
  // }
  

  render() {
    const movieData = this.state.searchedMoive ? this.state.filteredMovies : this.state.movies
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          <Route exact path="/" render={() => <Form filterMovies={this.filterMovies} clearFilteredMovies={this.clearFilteredMovies}/>} />
          {/* <Route exact path="/" render={() => <Form value={this.state.value} id={this.state.filteredMovies} handleChange={this.handleChange} filterMovies={this.filterMovies}/>} /> */}
          <Switch>
          <Route exact path="/" render={() => <Movies name = "movies" movies={movieData} displayMovieInfo={this.displayMovieInfo}/>} />
          {/* <Route exact path="/" render={() => <Movies name="movies" movies={this.state.movies} singleMovie={this.state.singleMovie} displayMovieInfo={this.displayMovieInfo}/>} /> */}
          <Route path="/:id" render={({ match }) => {
            const movieID = match.params.id;
            this.displayMovieInfo(movieID);
            return (<SingleMovie movie={this.state.singleMovie} displayMainPage={this.displayMainPage} />
            )
          }} />
          </Switch>
      </main>
    )
  } 
}

export default App;
