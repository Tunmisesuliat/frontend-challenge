import React from 'react'
import classes from './Hamburger.module.scss';

const Hamburger = (props) => {
    return (
        <div className={classes.Hamburger} onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Hamburger;
