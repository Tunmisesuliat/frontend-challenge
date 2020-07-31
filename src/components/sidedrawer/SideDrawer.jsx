import React from "react";
import classes from "./Sidedrawer.module.scss";
import Navitems from "../nav/navitems/NavItems";
import BackDrop from "../backdrop/BackDrop";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  console.log(props);
  return (
    <>
     
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Cancel} onClick={props.closed}>&#x2715;</div>
        <Navitems />
      </div>
    </>
  );
};

export default SideDrawer;
