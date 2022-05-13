import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import avatar1 from "../assets/img/shadow.jpeg"
import avatar2 from "../assets/img/shadow.jpeg"

export default function Gallery() {

  return (
    <div className="gallery">
      <Slider
        autoplay={true}
        className="slider"
        slidesToShow={4}
        autoplaySpeed={2000}
        arrows={false}
        dots={true}
      >
        <div>
          <img src={avatar1} />
        </div>
        <div>
          <img src={avatar2} />
        </div>
        <div>
          <img src={avatar2} />
        </div>
        <div>
          <img src={avatar1} />
        </div>
        <div>
          <img src={avatar2} />
        </div>
        <div>
          <img src={avatar1} />
        </div>
        <div>
          <img src={avatar2} />
        </div>
      </Slider >
    </div >
  )
}