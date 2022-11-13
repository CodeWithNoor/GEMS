import React from "react";
import "../Css/Product.css";

const Product = ({Image, Title, Price, actual__Price }) => {
  return (
    <>
    <div className="product">
      <div className="product__item">
        <img className="product__image" src={Image} alt="" />
      </div>

      <div className="product__info">
        <h6 className="productItem__Title">{Title}</h6>
      </div>
      <div className="ProductItem__PriceList">
        <span className="ProductItem__Price"> <large>$</large>{Price}</span>
        <span className="ProductItem__Price Price--compareAt">
          {actual__Price}
        </span>
      </div>
    </div>  
    </>
  );
};

export default Product;
