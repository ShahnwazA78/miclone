import React from 'react'
import "../styles/starProduct.css"

const StarProducts = ({ starProduct }) => {
  return (
    <div className="main-section">
      <div className="parent-section">
        <div className="left">
          <a href={starProduct[0].url}>
            <img src={starProduct[0].image} alt="" srcset="" />
          </a>
        </div>
        <div className="right">
          <div className="upper">
            <a href={starProduct[1].url}>
              <img src={starProduct[1].image} alt="" srcset="" />
            </a>
            <a href={starProduct[2].url}>
              <img src={starProduct[2].image} alt="" srcset="" />
            </a>
          </div>
          <div className="lower">
            <a href={starProduct[3].url}>
              <img src={starProduct[3].image} alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarProducts
