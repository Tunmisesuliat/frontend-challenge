import React from 'react';
import Card from '../card/Card';
import Image1 from '../../../../Assets/What1.png';
import Image2 from '../../../../Assets/What2.png';
import Image3 from '../../../../Assets/What3.png'
import classes from './Cardlist.module.scss';

const data=[
    {
        image: Image1,
        header: "One",
        paragraph: "Place any text you want here etc. We invest between N2m - N5m in marketing, production and promotional fees."    
    },
    {
        image: Image2,
        header: "Two",
        paragraph: "Place any text you want here etc. We invest between N2m - N5m in marketing, production and promotional fees."    
    },
    {
        image: Image3,
        header: "Three",
        paragraph: "Place any text you want here etc. We invest between N2m - N5m in marketing, production and promotional fees."    
    }
]

const Cardlist = () => {
    return (
        <div className={classes.Cardlist}>
            {data.map(single =>
                <Card image={single.image} header={single.header} paragraph={single.paragraph} /> 
            )}
           
         </div>
    )
}

export default Cardlist;
