import React from 'react';

const FilmCard = ({ onFilmClick }) => { 
    //map

    // console.log('FilmCard.js renders');

    return (
        // Each film is represented by a FilmCard component, which displays the
        // corresponding title, overview, and poster image. The FilmCard component
        // also allows users to add or remove the film from their 'Fave' list.
        <div className="film-card" onClick = { () => onFilmClick('Avengers: Endgame') }>
            <figure>
                <img src="" alt="" className="film-poster" />
            </figure>
            <div className="film-summary">
                <h2>My Film Title</h2>
                <p>My Film Summary</p>
                <button>Add to faves</button>
            </div>
        </div>
    );
}

export default FilmCard;