import React from 'react';
import Slider from '../../components/swiper/Slider/Slider'
import classes from './Mentors.module.scss';

const Mentors = () => {
    return (
        <div className={classes.Mentors}>
            <h1 className={classes.Wrapper}>Our mentors</h1>
            <Slider />
        </div>
    )
}

export default Mentors;
