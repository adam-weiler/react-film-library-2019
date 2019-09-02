import React from 'react';
import Fave from '../Components/Fave';

const FilmCard = ({ film, onFilmClick }) => { 
    // console.log('FilmCard.js renders');

    const handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title} `);
    }

    return (
        // Each film is represented by a FilmCard component, which displays the
        // corresponding title, overview, and poster image. The FilmCard component
        // also allows users to add or remove the film from their 'Fave' list.
        <div className="film-card" onClick = { () => onFilmClick(film) }>
        {/* <div className="film-card" onClick = { () => handleDetailsClick(film) }> */}
            <figure>
                <img src={ `http://image.tmdb.org/t/p/w780${ film.poster_path }`} alt={`${ film.title } movie poster` } className="film-poster" />
            </figure>
            <div className="film-summary">
                <h2>{ film.title }</h2>
                {/* <p>{ film.overview }</p> */}
                <p>{ film.release_date.substring(0,4) }</p>
                {/* <button>Add to faves</button> */}
                <Fave />
            </div>
        </div>
    );
}

export default FilmCard;