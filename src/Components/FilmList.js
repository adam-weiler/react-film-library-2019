import React, { useState } from 'react';
import FilmCard from '../Components/FilmCard';

const FilmList = ({ films, onFilmClick }) => {
    // console.log('FilmList.js renders.');

    // currentFilter is a stateful value. setFilter is a function to return it. 'all' is the default value.
    const [currentFilter, setFilter] = useState('all');
    let btnAllStatus = '';
    let btnFavesStatus = '';

    const filmElements = films.map(
        (film, index) => <FilmCard film={ film } onFilmClick={ onFilmClick } key={ film.id }/>
    )

    const handleFilterClick = (filter) => {
        console.log('FilmList ; handleFilterClick: ', filter);

        setFilter(filter);  // Sets currentFilter to the value of filter.
    }

    if (currentFilter == 'all') {  // If currentFilter is all, changes btnAllStatus style to is-active, disables btnFaveStatus style.
        btnAllStatus = 'is-active';
        btnFavesStatus = '';
    } else if (currentFilter == 'faves') {  // Else, does the opposite.
        btnAllStatus = '';
        btnFavesStatus = 'is-active';
    }

    return (
        //The FilmList component displays the 'film' and 'fave' data.
        <section className="film-list">
            <h2 className="section-title">Films</h2>

            <div className="film-list-filters">
                <button className={ `film-list-filter ${ btnAllStatus }`} onClick = { () => handleFilterClick('all') } >
                    ALL
                    <span className="section-count">{ films.length }</span>
                </button>
                <button className={ `film-list-filter ${ btnFavesStatus }`} onClick = { () => handleFilterClick('faves') }>
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
