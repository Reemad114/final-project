
import React from 'react';
import Carouselitem from './carouselitem.js'
import Carouselitems from './carouselitems.js';
import './carousel.css'


class MyCarousel extends React.Component{
  render() {
    const carouselitems = Carouselitems.map(oneitem =>
        <Carouselitem
           className = {oneitem.imgName}
           src = {oneitem.imgsrc}
           alt = {oneitem.imgalt}
           caption = {oneitem.caption}
           href = {oneitem.href}
         />
       )
    return (
      <div id="switzerland" className="carousel slide col-sm-12 col-md-12 col-lg-6 col-xl-6" data-ride="carousel">
        <ul className="carousel-indicators text-center">
          <li data-target="#switzerland" data-slide-to="0" class="active"></li>
          <li data-target="#switzerland" data-slide-to="1"></li>
          <li data-target="#switzerland" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner mt-3 mb-2">
          {carouselitems}
        </div>
        <a className="carousel-control-prev" href="#switzerland" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#switzerland" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    )
  }
}
export default MyCarousel
