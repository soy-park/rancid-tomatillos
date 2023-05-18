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
      movies: []
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
        this.setState({ movies: [data.movie]})
      })
      .catch(err => console.log(err))
  }

  displayMainPage = () => {
    this.componentDidMount();
  }
  
  render() {
    return (
      <main className="App">
          <h1>Rancid Tomatillos</h1>
          <Switch>
            <Route exact path="/" render={() => <Movies name="movies" movies={this.state.movies} displayMovieInfo={this.displayMovieInfo} />} />
            <Route path="/:id" render={({match}) => {
              const movieID = match.params.id;
              this.displayMovieInfo(movieID);
              return (<SingleMovie movie={this.state.movies} displayMainPage={this.displayMainPage} />
              )
            }
          } />
          </Switch>

          {/* {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieInfo={this.displayMovieInfo}/>} */}
          {/* {this.state.movies.length === 1 && <SingleMovie movie={this.state.movies} displayMainPage={this.displayMainPage}/> }  */}
      </main>
    )
  } 
}

export default App;
