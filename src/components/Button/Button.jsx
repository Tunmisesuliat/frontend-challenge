import React from 'react'
import classes from './Button.module.scss';
import Arrow from '../../Assets/download.png'

const Button = () => {
    return (
        <div className={classes.Button}>
            VIEW RESOURCES <span><img src={Arrow} alt="arrow" /></span>
        </div>
    )
}

export default Button;
