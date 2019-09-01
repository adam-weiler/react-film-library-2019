import React, { Component } from 'react';
import FilmList from './Components/FilmList';
import FilmDetails from './Components/FilmDetails';

class App extends Component {

  state = {
    currentFilm: {}
  }

  setCurrent = (film) => {
    console.log('setCurrent triggered: ', film)

    this.setState({
      currentFilm: film
    });
  }

  render() {
    return (
      <section className="film-library">
        <FilmList onFilmClick={ this.setCurrent } />
        <FilmDetails />
      </section>
    );
  }
}

export default App;
