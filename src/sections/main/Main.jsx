import React from 'react'
import classes from './Main.module.scss';
import Smiling from '../../Assets/Hero image.png';
import PaginationNext from '../../components/Pagination/PaginationNext';

const Main = () => {
    return (
        <div className ={classes.Main}>
            <div className={classes.Text}>
                <p className={classes.Textp}>Your music career success partner</p>
                <h1 className={classes.Texth}>We back Nigerian indie artists from around the world and help them do their best work</h1>
                <p className={classes.Textp} >We invest between N2m - N5m in marketing, production and promotional fees in youbg budding Nigerian artists and help them suceed with design support and our network of successful Indie musicians</p>
                <div className={classes.Pagination}><PaginationNext /></div>
            </div>
            <div className={classes.Image}>
                <img src={Smiling} alt="smiling" data-aos = "fade-left" data-aos-duration="3000"/>
            </div>
        </div>
    )
}

export default Main;
