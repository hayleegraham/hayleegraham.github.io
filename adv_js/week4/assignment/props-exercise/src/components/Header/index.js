import React from 'react';
import Title from '../Title';
import Description from '../Description';
import useTheme from '../../hooks/useTheme';
import ButtonToggle from '../ButtonToggle';
import styles from './Header.module.scss'

const Header = ({userName, UserInfo}) => {
    const [theme, toggleTheme] = useTheme();
    return (
    <header className={`appHeader ${styles[theme]}`}>
        <Title appTitle= {`Welcome to React ${userName}`} toggleTheme={toggleTheme} theme={theme}/>
        <UserInfo userName={userName}/>
        <Description>You are ready to take this to the next level!</Description>
        <ButtonToggle toggleTheme={toggleTheme} theme={theme}/>
    </header>
    )
}

export default Header;