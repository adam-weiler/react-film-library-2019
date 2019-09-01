import React, { Component } from 'react';
import FilmList from './Components/FilmList';
import FilmDetails from './Components/FilmDetails';

class App extends Component {
  render() {
    return (
      <section className="film-library">
        <FilmList />
        <FilmDetails />
      </section>
    );
  }
}

export default App;
