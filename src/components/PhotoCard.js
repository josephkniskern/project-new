import React, { Component } from "react";

const PhotoCard = (props) => {
  return (
    <div>
      <img src={props.photo.url} width="20px" height="20px"></img>
    </div>
  );
};

export default PhotoCard;
