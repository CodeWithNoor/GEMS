import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__newsletter">
        <div className="card-body">
          <p className="card-text">
            Sign up for our newsletter for the latest news and exclusive deals
          </p>
          <div className="mb-3">
            <input
              type="email"
              className="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>

      
        <section>
          <div className="Footer__container">
            <div className="Footer__Block d-flex p-4 bg-dark text-white">
              <div md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">SOUNDPEATS</h6>
                <ul className="Linklist  Footer_link_Linklist">
                    <li className="Linklist__Item"><a href="/pages/about-us" > ABOUT US </a></li>
                    <li className="Linklist__Item"> <a href="/pages/affiliate" >AFFILIATE</a></li>
                    <li className="Linklist__Item"><a href="/pages/media" >NEWSROOM</a></li>
                </ul>
              </div>

              <div md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">ACCOUNT</h6>
                <ul className="Linklist  Footer_link_Linklist">
                    <li className="Linklist__Item"><a href="/account/login" >ACCOUNT LOGIN</a></li>
                    <li className="Linklist__Item"><a href="/account/register" >REGISTER</a></li>
                    <li className="Linklist__Item"><a href="/cart" >CART</a></li>
                </ul>
              </div>

              <div md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">SUPPORT</h6>
                <ul className="Linklist  Footer_link_Linklist">
                    <li className="Linklist__Item"><a href="/pages/faq" >HELP CENTER</a></li>
                    <li className="Linklist__Item"><a href="/pages/download" >DOWNLOADS</a></li>
                    <li className="Linklist__Item"><a href="/pages/warranty" > WARRANTY &amp; SERVICE</a></li>
                    <li className="Linklist__Item"><a href="/pages/claim-your-warranty" > CLAIM YOUR WARRANTY</a></li>
                    <li className="Linklist__Item"> <a href="/pages/return-refund-policy" >RETURN &amp; REFUND POLICY</a></li>
                </ul>
              </div>

              <div md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">SHOP</h6>
                <ul className="Linklist  Footer_link_Linklist">
                    <li className="Linklist__Item"> <a href="/collections/all-products" class="Link Link--dark">ALL PRODUCT</a></li>
                    <li className="Linklist__Item"><a href="/pages/shipping-policy" class="Link Link--dark">SHIPPING POLICY</a></li>
                    <li className="Linklist__Item"><a href="/pages/soundpeats-wireless-earbuds-wheretobuy" className="Link Link--danger">WHERE TO BUY</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4">
          
        <div className="Footer__Copyright">
        <p className="Footer__ThemeAuthor"> © 2019-2022,  <a href="/" title="">SOUNDPEATS</a>. All Rights Reserved</p>
        </div>

        </div>
    </>
  );
};

export default Footer;
