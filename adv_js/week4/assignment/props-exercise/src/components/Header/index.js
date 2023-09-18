import React from 'react';
import Title from '../Title';
import Description from '../Description';

const Header = props => {
    return (
    <header className='appHeader'>
        <Title appTitle= {`Welcome to React ${props.userName}`}/>
        {props.UserInfo}
        <Description>You are ready to take this to the next level!</Description>
    </header>
    )
}

export default Header;