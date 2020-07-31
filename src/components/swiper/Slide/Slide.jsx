import React from "react";

const Slide = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Slide;
