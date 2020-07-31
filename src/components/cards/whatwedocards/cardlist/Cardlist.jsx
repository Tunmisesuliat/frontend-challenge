import React from 'react';
import Card from '../card/Card';
import Image1 from '../../../../Assets/What1.png';
import Image2 from '../../../../Assets/What2.png';
import Image3 from '../../../../Assets/What3.png'
import classes from './Cardlist.module.scss';

const data=[
    {
        aos :"flip-right",
        duration: "3000",
        image: Image1,
        header: "One",
        paragraph: "Place any text you want here etc. We invest between N2m - N5m in marketing, production and promotional fees."    
    },
    {
        aos :"flip-right",
        duration: "4000",
        image: Image2,
        header: "Two",
        paragraph: "Place any text you want here etc. We invest between N2m - N5m in marketing, production and promotional fees."    
    },
    {
        aos :"flip-right",
        duration: "5000",
        image: Image3,
        header: "Three",
        paragraph: "Place any text you want here etc. We invest between N2m - N5m in marketing, production and promotional fees."    
    }
]

const Cardlist = () => {
    return (
        <div className={classes.Cardlist}>
            {data.map(single =>
                <Card aos={single.aos} duration={single.duration} image={single.image} header={single.header} paragraph={single.paragraph} /> 
            )}
           
         </div>
    )
}

export default Cardlist;
