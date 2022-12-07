import React from "react";
import "../styles/offer.css"
const Offers = ({ offers }) => {
  return (
    <div>
      <div className="offerSections">
        {offers.map((value) => (
          <div className="item">
            <a href={value.url}>
              <img src={value.image} alt="" srcset="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
