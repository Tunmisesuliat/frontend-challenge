import React from 'react'
import classes from './List.module.scss';

const List = (props) => {
    return (
        <ul className={classes.List}>
            <li>{props.first}</li>
            <li>Catalogue</li>
            <li>Popular</li>
            <li>Features</li>
        </ul>
    )
}

export default List;
