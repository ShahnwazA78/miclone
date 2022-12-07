import React from 'react'
import "../styles/section.css"
const Section = ({title}) => {
  return (
    <div className="section-main">
      <div className="line"></div>
      <div className="title">{title}</div>
      <div className="line"></div>
    </div>
  );
}

export default Section
