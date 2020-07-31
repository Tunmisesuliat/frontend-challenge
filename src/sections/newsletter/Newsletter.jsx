import React from 'react'
import classes from './Newsletter.module.scss';
import Subscribe from '../../components/subscribe/Subscribe';
import Input from '../../components/Input/Input';

const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <div>
                <p>Great updates</p>
                <h1>Sign up to our newsletter to get updates on events, news and opportunities</h1>
            </div>
            <div className={classes.Buttons}>    
            <Input />
            <Subscribe />
            </div>
            
        </div>
    )
}

export default Newsletter;
