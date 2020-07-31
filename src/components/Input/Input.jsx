import React from 'react'
import classes from './Input.module.scss';

const Input = (props) => {
    return (
        <input className={classes.Input} type="text" placeholder="Username or email" onChange={props.onChange} />
    )
}

export default Input;
