import React, {useState} from 'react';


const ButtonToggle = ({toggleTheme, theme}) => {
    
    return (
        <>
        <p>Click the button to toggle color themes.</p>
        <button onClick={toggleTheme}>{theme}</button>
        </>
    )
}

export default ButtonToggle;