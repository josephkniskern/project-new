import React, { Component } from "react";
import axios from "axios";
import PhotosContainer from "./PhotosContainer";

class Home extends Component {
  state = {
    photos: [],
  };

  async componentDidMount() {
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        const photos = res.data;
        this.setState({ photos });
      });
  }

  render() {
    return (
      <div>
        <PhotosContainer photos={this.state.photos}></PhotosContainer>
      </div>
    );
  }
}

export default Home;
