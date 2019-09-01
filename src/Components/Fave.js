import React from 'react';

const Fave = ({}) => {
    // console.log('Fave.js renders.');

    //map

    const handleClick = (event) => {
        event.stopPropagation();
        console.log('Fave ; handleClick. ');
    }

    return (
        <button className="film-row-fave add_to_queue" onClick = { (event) => handleClick(event) }>
            <i className="material-icons">Add to faves</i>
        </button>
    );
}

export default Fave;