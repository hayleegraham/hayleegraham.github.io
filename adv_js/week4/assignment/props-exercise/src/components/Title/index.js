import React from 'react';

const Title = props => {
    return(
        <div>
            <h3>TITLE:</h3>
            <h1 className='appTitle'>{props.appTitle}</h1>
        </div>
    )
}

export default Title;