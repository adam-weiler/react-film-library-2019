import React, { Component } from 'react';
import FilmDetails from './Components/FilmDetails';

class App extends Component {
  render() {
    return (
      <section className="film-library">
        <h1>Hello, world!</h1>
        <FilmDetails />
      </section>
    );
  }
}

export default App;
