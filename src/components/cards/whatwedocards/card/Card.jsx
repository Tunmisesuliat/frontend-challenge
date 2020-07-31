import React from "react";
import classes from "./Card.module.scss";

const Cards = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Image}><img src={props.image} /></div>
      <div className={classes.Text}>
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
