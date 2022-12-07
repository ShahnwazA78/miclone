import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/banner.css"

const Banner = ({ Banner }) => {
  return (
    <Carousel fade>
      {Banner.map((item, idx) => (
        <Carousel.Item
          key={item.image}
          id="banner"
          interval={2000}
          keybaord={true}
        >
          {" "}
          <img className="d-block w-100" src={item.image} alt= {`${idx} banner`} />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
