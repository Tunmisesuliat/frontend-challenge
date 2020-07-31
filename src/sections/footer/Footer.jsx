import React from 'react'
import classes from './Footer.module.scss';
import List from '../../components/list/List'
import Logo from '../../components/logo/Logo';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Leftfooter}>
                <List first="Store"  />
                <List first="About"  />
                <List first="Catalog"  />
            </div>
            
            <div className={classes.Rightfooter}>
                <div className={classes.Logo} >
            <Logo  />
            </div>
            <div>
                <p>Gidara</p>
                <p>Your music career success partner</p>
            </div>
            
            </div>
        </div>
    )
}

export default Footer;
