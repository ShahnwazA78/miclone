import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/slider.css";

const Slider = ({ start }) => {
  return (
    <div className="carausel-setting ">
      <Carousel fade>
        {start.map((value) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={value}
              alt="first slid"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
