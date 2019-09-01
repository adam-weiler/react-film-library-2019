import React from 'react';

const FilmDetails = ({ currentFilm }) => {
    //Map here

    // console.log('FilmDetails.js renders');

    return (
        // FilmDetails displays information about the current film.
        <article className="film-details">
            <h2 className="section-title">Details</h2>
            <figure className="film-backdrop">
                <img src="" alt="" />
                <h1 className="film-title">My Film Title</h1>
            </figure>
            <div className="film-meta">
                <h2 className="film-tagline">My Film Tagline</h2>
                <p className="film-detail-overview">
                    <img className="film-detail-poster" src="" alt="" />
                    My Film Summary
                </p>
            </div>
        </article>
    );
}

export default FilmDetails;
