import React from 'react';
import NavItems from '../../components/nav/navitems/NavItems';
import Logo from '../../components/logo/Logo'
import classes from './Header.module.scss';
import Hamburger from '../../components/hamburger/Hamburger'

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.Menu}><Hamburger onClick={props.toggleNav}/></div>
            <div className={classes.Logo}><Logo /><span className={classes.LogoText}>Gidara</span></div>
            <div className={classes.DeskTopOnly}><NavItems /> </div>                      
        </div>
    )
}

export default Header;
