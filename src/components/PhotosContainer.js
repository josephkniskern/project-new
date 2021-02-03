import React from "react";
import PhotoCard from "./PhotoCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const PhotosContainer = ({ photos }) => {
  return (
    <Grid item xs={12}>
      <Grid container justify="center">
        {photos.slice(0, 10).map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </Grid>
    </Grid>
  );
};

export default PhotosContainer;
