import React from "react";
import PhotoCard from "./PhotoCard";

const PhotosContainer = ({ photos }) => {
  return (
    <div>
      {photos.slice(0, 10).map((photo) => (
        <PhotoCard key={photo.id} photo={photo}></PhotoCard>
      ))}
    </div>
  );
};

export default PhotosContainer;
