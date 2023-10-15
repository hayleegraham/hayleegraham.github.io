import React from 'react';
import styles from './ComponentA.module.scss'

const ComponentA = props => {
    return(
        <div className={props.className}>
            <h1>Testing</h1>
            <p>Component A</p>
        </div>
    )
}

export default ComponentA;