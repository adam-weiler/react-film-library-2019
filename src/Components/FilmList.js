import React from 'react';
import FilmCard from '../Components/FilmCard';

const FilmList = ({ onFilmClick }) => {
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

            <FilmCard />
        </section>
    );
}

export default FilmList;
