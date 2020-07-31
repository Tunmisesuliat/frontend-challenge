import React from 'react';
import NavItem from '../navitem/NavItem' 
import classes from './NavItems.module.scss';

const Navitems = () => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" active> Companies </NavItem>
            <NavItem link="/" > Team </NavItem>
            <NavItem link="/" > Resources </NavItem>
            <NavItem link="/" > Programs </NavItem>
            <NavItem link="/" > Blog </NavItem>
            <NavItem link="/" > Contact </NavItem>
        </ul>
    )
}

export default Navitems;
