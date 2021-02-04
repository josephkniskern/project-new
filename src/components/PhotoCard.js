import React, { Component } from "react";

const PhotoCard = (props) => {
  return (
    <div>
      <img src={props.photo.url} width="200px" height="200px"></img>
    </div>
  );
};

export default PhotoCard;
