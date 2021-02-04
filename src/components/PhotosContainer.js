import React from "react";
import PhotoCard from "./PhotoCard";

const PhotosContainer = ({ photos }) => {
  return (
    <div>
      {photos.slice(0, 12).map((photo) => (
        <PhotoCard key={photo.id} photo={photo.url}></PhotoCard>
      ))}
    </div>
  );
};

export default PhotosContainer;
