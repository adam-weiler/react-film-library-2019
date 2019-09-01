import React from 'react';

const FilmDetails = ({ currentFilm }) => {
    // console.log('FilmDetails.js renders.');

    return (
        // FilmDetails displays information about the current film.
        <article className="film-details">
            <h2 className="section-title">Details</h2>
            <figure className="film-backdrop">
                <img src={ `https://image.tmdb.org/t/p/original/${ currentFilm.backdrop_path }` } alt={ `${ currentFilm.title } movie backdrop` } />
                <h1 className="film-title">{ currentFilm.title }</h1>
            </figure>
            <div className="film-meta">
                {/* <h2 className="film-tagline">My Film Tagline</h2> */}
                <p className="film-detail-overview">
                    <img className="film-detail-poster" src={ `http://image.tmdb.org/t/p/w780${ currentFilm.poster_path }`} alt={`${ currentFilm.title } movie poster` }  />
                    { currentFilm.overview }
                </p>
            </div>
        </article>
    );
}

export default FilmDetails;
