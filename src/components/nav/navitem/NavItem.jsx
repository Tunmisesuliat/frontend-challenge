import React from 'react'
import classes from './NavItem.module.scss';

const Navitem = (props) => {
    return (
        <li className={classes.NavItem}>
            <a className={classes.link} href= {props.link}>
                {props.children}
            </a>
        </li>
    )
}

export default Navitem;
