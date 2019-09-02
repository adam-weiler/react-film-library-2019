import React, { useState } from 'react';

const Fave = ({}) => {
    // console.log('Fave.js renders.');

    // isFave is a stateful value. setIsFave is a function to return it. false is the default value.
    const [isFave, setIsFave] = useState(false);  
    let btnAddStatus = 'add_to_queue';

    const handleClick = (event) => {  // When user clicks on 'Add to faves' button.
        event.stopPropagation();  // Prevents page from registering 2 events for 1 click.
        console.log('Fave ; handleClick. ');
        
        setIsFave(!isFave);  // This toggles the opposite state.
    }

    isFave ? btnAddStatus = 'remove_from_queue' : btnAddStatus = 'add_to_queue';  // Changes the btnAddStatus style depending on if isFave is true or false.

    return (
        <button className={ `film-card-fave ${ btnAddStatus }`}  onClick = { (event) => handleClick(event) }>
            <i className="material-icons">Add to faves</i>
        </button>
    );
}

export default Fave;