import React from 'react'
import classes from './Copyright.module.scss';
import Twitter from '../../Assets/twitter.png';
import Facebook from '../../Assets/facebook.png';
import Google from '../../Assets/google.png';
import Instagram from '../../Assets/insta.png'

const Copyright = () => {
    return (
        <div className={classes.Copyright}>
            <span>© 2018. All rights reserved</span>
            <div className={classes.Icons}>
                <div><img src={Twitter} alt="twitter"/></div>
                <div><img src={Facebook} alt="twitter"/></div>
                <div><img src={Google} alt="twitter"/></div>
                <div><img src={Instagram} alt="twitter"/></div>
            </div>
        </div>
    )
}

export default Copyright;
