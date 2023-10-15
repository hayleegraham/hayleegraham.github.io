import React from 'react';

const Description = props => {
    return(
        <div>
            <h3>Description:</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default Description;