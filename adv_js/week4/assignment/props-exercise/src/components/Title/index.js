import React from 'react';
import ButtonToggle from '../ButtonToggle';

const Title = props => {
    return(
        <div >
            <ButtonToggle toggleTheme={props.toggleTheme} theme={props.theme}/>
            <h3>TITLE:</h3>
            <h1 className='appTitle'>{props.appTitle}</h1>
        </div>
    )
}

export default Title;