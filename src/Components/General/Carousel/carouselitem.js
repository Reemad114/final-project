import React from "react"
import './carousel.css'

class Carouselitem extends React.Component{
  render() {
    return (
        <div className={this.props.className}>
          <img src={this.props.src} alt={this.props.alt}/>
          <div className="carousel-caption">
            <a href={this.props.href}>{this.props.caption}</a>
          </div>
         </div>
      )
    }
  }
  export default Carouselitem
