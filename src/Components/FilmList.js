import React from 'react';

const FilmList = ({}) => {
    //map here

    console.log('FilmList.js renders.');

    return (
        //The FilmList component displays the 'film' and 'fave' data.
        <section className="film-list">
            <h2 className="section-title">Films</h2>

            <div className="film-list-filters">
            <button>
                All <span>(0)</span>
            </button>
            <button>
                Faves <span>(0)</span>
            </button>
            </div>

            {/* The input field allows users to search for films that contain specific
            keywords */}
            <input className="film-list-search" type="text" name="userInput" value="" />

            {/* Each film is represented by a FilmRow component, which displays the
            corresponding title, overview, and poster image. The FilmRow component
            also allows users to add or remove the film from their 'Fave' list. */}
            <div className="film-row">
            <figure>
                <img src="" alt="" className="film-poster" />
            </figure>
            <div className="film-summary">
                <h2>My Film Title</h2>
                <p>My Film Summary</p>
                <button>Add to faves</button>
            </div>
            </div>
        </section>
    );
}

export default FilmList;
