import React from 'react';

const FilmCard = ({ film, onFilmClick }) => { 
    //map

    // console.log('FilmCard.js renders');

    return (
        // Each film is represented by a FilmCard component, which displays the
        // corresponding title, overview, and poster image. The FilmCard component
        // also allows users to add or remove the film from their 'Fave' list.
        <div className="film-card" onClick = { () => onFilmClick('Avengers: Endgame') }>
            <figure>
                <img src={`http://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={`${film.title} movie poster`} className="film-poster" />
            </figure>
            <div className="film-summary">
                <h2>{ film.title }</h2>
                {/* <p>{ film.overview }</p> */}
                <p>{ film.release_date }</p>
                <button>Add to faves</button>
            </div>
        </div>
    );
}

export default FilmCard;