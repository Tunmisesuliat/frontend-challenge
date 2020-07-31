import React from 'react'
import classes from './Backdrop.module.scss';

const BackDrop = (props) => {
    return (
        props.show? 
        <div className={classes.BackDrop} onClick={props.clicked}>

        </div> 
        : ''
    )
}

export default BackDrop;
