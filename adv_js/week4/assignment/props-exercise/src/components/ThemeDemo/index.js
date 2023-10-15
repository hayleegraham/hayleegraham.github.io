import React, {useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ButtonToggle from '../ButtonToggle';
import styles from './ThemeDemo.module.scss';
import useTheme from '../../hooks/useTheme';

const ThemeDemo = () => {
    const [theme, toggleTheme] = useTheme();
    
    
    return (
        <>
        <ButtonToggle toggleTheme={toggleTheme} theme={theme}/>
        <ComponentA className={styles[theme]}/>
        <ComponentB />
        </>
    )
}

export default ThemeDemo;