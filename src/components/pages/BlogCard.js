import React from "react";
import "../Css/BlogCard.css";

const Product = ({ title, image, heading, description }) => {
  return (
    <div className="BlogCard__Content">
      <div className="card-wrapper">
        <div className="Blog__Card__info">
          <div className="image-wrapper">
            <img className="Card__Image" src={image} alt="" />
          </div>

          <div className="text-box-wrapper">
            <div className="text-box">
              <div className="title">{title}</div>
              <div className="heading my-2">{heading}</div>
              <div className="description">{description}</div>
              <div className="button-wrapper">
                <a className="button" href="/">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
