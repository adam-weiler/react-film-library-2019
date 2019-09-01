import React from 'react';

const Fave = ({}) => {
    //map

    const handleClick = (e) => {
        console.log('Fave ; handleClick. ');
    }


    return (
        <div className="film-row-fave add_to_queue" onFilmClick={ handleClick() }>
            <i className="material-icons">add_to_queue</i>
        </div>
    );
}

export default Fave;