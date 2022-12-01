import React from "react";
import { Link } from "react-router-dom";
import "../../Css/Checkout.css";
import { useCartContext } from "../../context/cart_context";
import PriceFormat from "../../Helpers/PriceFormat";
import Form from "../Form";
import CheckoutItem from "../CheckoutItem";
import disc__Img from "../../images/discount.png";
import PayPalCheckouButtons from "../Paypal_Checkout_Button";

const Checkout = () => {
  const { cart, shipping_fee, total_price, discount} = useCartContext();

  return (
    <>
      <div className="checkout__info container">

        {/* *************************** checkout__form ************************* */}
        <div className="checkout__form">
          <nav className="breadcrumbs" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Cart">Cart</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Information
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shipping
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Payment
              </li>
            </ol>
          </nav>

          <div className="express__checkout">
            <div className="Paypal__checkout">Express Checkout</div>
            <div className="paypal__payment">
              <button className="btn">
                <PayPalCheckouButtons />
              </button>
            </div>
          </div>

          <div className="divider">
            <div className="Or">OR</div>
          </div>

          <div className="form">
            <Form />
          </div>
        </div>

        {/* *************************** payment ********************************* */}
        <div className="payment">

          {/* ***********************order confirmation************************* */}

          {cart.map((curItem, index) => {
            return <CheckoutItem key={curItem.id} {...curItem} />;
          })}

          {/* ***********************separater********************************** */}
          <hr />

          {/* ***********************Discount__btn********************************** */}
          <div className="discount__code d-flex my-3">
            <div className="form-floating col-9">
              <input
                type="text"
                className="form-control"
                id="dcode"
                placeholder="dcode"
                required
              />
              <label htmlhtmlFor="floatingInputGrid">Discount Code</label>
            </div>

            <button type="submit" className="btn btn-dark mx-2 col-3">
              Apply
            </button>
          </div>

          {/* ***********************separater********************************** */}
          <hr />

          <div className="shipping">
            {/* ***********************Subtotal******************************** */}
            <div className="card-total">
              <h3 className="sub__total">Subtotal</h3>
              <h3 className="sub__total_price">
                <span> {<PriceFormat price={total_price} />} </span>
              </h3>
            </div>

            {/* ***********************discount******************************** */}
            <div className="card-total">
              <h3 className="discount">Discount</h3>
              <h3 className="discount__price">
                <span>-{<PriceFormat price={discount} />}</span>
              </h3>
            </div>

            <div className="discount_tag">
              <img src={disc__Img} alt="" />
              <h6 className="my-2" style={{ fontSize: "14px" }}>
                SAVE 20% AT CHECK <br /> OUT
              </h6>
            </div>

            {/* ***********************shipping__price************************** */}
            <div className="card-total">
              <h3 className="discount">Shipping</h3>
              <h3 className="discount__price">
                <span>{<PriceFormat price={shipping_fee} />}</span>
              </h3>
            </div>
          </div>

          {/* ***********************separater********************************** */}
          <hr />

          {/* ***********************total__amount****************************** */}
          <div className="card-total">
            <h6 className="total">Total</h6>
            <div className="price__format">
              <small>USD</small>
              <h2>{<PriceFormat price={total_price + shipping_fee} />}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
