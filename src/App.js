import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmList from './Components/FilmList';
import FilmDetails from './Components/FilmDetails';

class App extends Component {

  state = {
    currentFilm: TMDB.films[0]
  }

  setCurrent = (film) => {
    console.log('setCurrent triggered: ', film);

    this.setState({
      currentFilm: film
    });
  }

  componentDidUpdate() {
    console.log('App.js did update: ', this.state);
    // console.log(TMDB.films)
  }

  

  render() {
    return (
      <section className="film-library">
        <FilmList films={ TMDB.films } onFilmClick={ this.setCurrent } />
        
        {/* { this.state.currentFilm != {} 
        ? `${this.state.currentFilm}`
        : 'No' } */}
        
        <FilmDetails currentFilm={ this.state.currentFilm } />
      </section>
    );
  }
}

export default App;
