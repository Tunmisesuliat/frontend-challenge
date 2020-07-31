import React from 'react'
import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <div className={classes.First}></div>
            <div className={classes.Second}></div>
            <div className={classes.Third}></div>
            <div className={classes.Fourth}></div>
        </div>
    )
}

export default Logo;
