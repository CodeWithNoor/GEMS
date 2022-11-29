import React from 'react';
import { Link } from "react-router-dom";
import PriceFormat from '../Helpers/PriceFormat';
import { useCartContext } from "../context/cart_context";

const CheckoutItem = ({id, name, color, oldPrice, newPrice, image, quantity}) => {
  const { total_item } = useCartContext();
  return (
    <>
        <div className="cart_item d-flex" key={id}>
            {/* Item Details  */}
            <div className="cart_item_details d-flex">
                <div className="cart_item_img">
            <span className="total_cartProduct">{total_item}</span>
                    <img src={image} alt="item" />
                </div>

                <div className="cart_item_details_info align-self-center">
                    <h6><Link to={`/singleproduct/${id}`}>{window.innerWidth <= 768 ? `${name.slice(0, 50)}...` : name}</Link></h6>
                    <p>{color}</p>
                </div>


                <div className="cart_item_details_price align-self-center">
                    <div className="cart_item_details_info_priceList">
                        <div className="oldPrice ms-2">{PriceFormat(oldPrice)}</div>
                        <div className="newPrice ms-2">{PriceFormat(newPrice)}</div>
                    </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default CheckoutItem

