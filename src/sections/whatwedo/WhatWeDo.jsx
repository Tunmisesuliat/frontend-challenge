import React from "react";
import Cardlist from "../../components/cards/whatwedocards/cardlist/Cardlist";
import classes from "./WhatWeDo.module.scss";
import Prev from '../../components/cardpagination/PaginationPrev';
import Next from '../../components/cardpagination/PaginationNext';

const WhatWeDo = () => {
  return (
    <div className={classes.WhatWeDo}>
        <div className={classes.SideText}>
        <h1 >What we do</h1>
        </div>
      <div className={classes.Main}>
        <div className={classes.Head}>
          <hr />
          <p>You’re in great company</p>
          <h4>
            Gidara seeks to connect young talented musicians with world class
            producers, managers etc
          </h4>
          <div className={classes.Pagination}><Prev/> <Next/></div>
        </div>
        <div className={classes.Body}>
            <Cardlist />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
