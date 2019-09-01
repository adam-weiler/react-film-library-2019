import React from 'react';
import FilmCard from '../Components/FilmCard';

const FilmList = ({ films, onFilmClick }) => {
    const filmElements = films.map(
        (film, index) => <FilmCard film={ film } onFilmClick={ onFilmClick } key={ film.id }/>
    )

    const handleFilterClick = (filter) => {
        console.log('FilmList ; handleFilterClick: ', filter);
    }

    // console.log('FilmList.js renders.');

    return (
        //The FilmList component displays the 'film' and 'fave' data.
        <section className="film-list">
            <h2 className="section-title">Films</h2>

            <div className="film-list-filters">
                <button className="film-list-filter" onClick = { () => handleFilterClick('all') } >
                    ALL
                    <span className="section-count">{ films.length }</span>
                </button>
                <button className="film-list-filter" onClick = { () => handleFilterClick('faves') }>
                    FAVES
                    <span className="section-count">0</span>
                </button>
            </div>

            {/* The input field allows users to search for films that contain specific
            keywords */}
            <input className="film-list-search" type="text" name="userInput" value="" />

            {/* <FilmCard onFilmClick={ onFilmClick } /> */}
            { filmElements }
        </section>
    );
}

export default FilmList;
