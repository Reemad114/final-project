import React from 'react';
import "./content.css";
import MyCarousel from '../../General/Carousel/carousel.js'

class Content extends React.Component{
  render() {
    return (
      <div className="content container" id="home-content">
        <MyCarousel />
      </div>
    );
  }
}
export default Content
