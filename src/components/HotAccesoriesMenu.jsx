import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/HotAcceoriesmenu.css"

const HotAccesoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HotAcceoriesLink" to="/music">Music</Link>
      <Link className="HotAcceoriesLink" to="/smartDevice">Smart Device</Link>
      <Link className="HotAcceoriesLink" to="/home">Home</Link>
      <Link className="HotAcceoriesLink" to="/lifestyle">Life Style</Link>
      <Link className="HotAcceoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  );
}

export default HotAccesoriesMenu
