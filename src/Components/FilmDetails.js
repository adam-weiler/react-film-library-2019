import React from 'react';

const FilmDetails = ({}) => {
    //Map here

    console.log('FilmDetails.js renders');

    return (
        <article className="film-details">
            <h1 className="section-title">Details</h1>
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
