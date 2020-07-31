import React from "react";
import classes from "./Resources.module.scss";
import Cardlist from "../../components/cards/whatwedocards/cardlist/Cardlist";
import Button from "../../components/Button/Button";

const Resources = (props) => {
  return (
    <div className={classes.Resources}>
      <div className={classes.SideText}>
        <h1>{props.text}</h1>
      </div>
      <div className={classes.Main}>
        <div className={classes.Head}>
          <hr />
          <p>{props.resource}</p>
        </div>
        <div className={classes.Body}>
          <Cardlist />
        </div>
        <div className={classes.View}>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Resources;
