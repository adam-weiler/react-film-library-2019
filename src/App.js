import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmList from './Components/FilmList';
import FilmDetails from './Components/FilmDetails';

class App extends Component {

  state = {
    currentFilm: {}
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
        <FilmDetails currentFilm={ this.state.currenFilm } />
      </section>
    );
  }
}

export default App;
