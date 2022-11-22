import React from "react";
import '../Css/Affiliate_inner.css'

const Affilitate_inner = ({ image, title, arrow_icon }) => {
  return (
    <div className="apc-content col-2" >
      <div className="cell">
        <img className="image" src={image} alt="" />
        <div className="content">{title}</div>
      </div>

      <div className="apc-arrow">
        <img className="arrow" src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Affilitate_inner;
