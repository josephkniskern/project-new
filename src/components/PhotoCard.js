import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

const PhotoCard = (props) => {
  return (
    <Paper style={{ padding: 20 }}>
      <img src={props.photo.url} width="200px" height="200px"></img>
    </Paper>
  );
};

export default PhotoCard;
