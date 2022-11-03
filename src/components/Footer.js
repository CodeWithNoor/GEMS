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
          <div className="Footer__Block Footer__Block--links d-flex p-4 text-white">
            <div md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h2 className=" u-h6">SOUNDPEATS</h2>
              <ul className="Linklist  Footer_link_Linklist">
                <li className="Linklist__Item">
                  <a href="/pages/about-us" className="Link Link--primary"> ABOUT US </a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/affiliate" className="Link Link--primary">AFFILIATE</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/media" className="Link Link--primary">NEWSROOM</a>
                </li>
              </ul>
            </div>

            <div md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h2 className="  u-h6">ACCOUNT</h2>
              <ul className="Linklist  Footer_link_Linklist">
                <li className="Linklist__Item">
                  <a href="/account/login" className="Link Link--primary">ACCOUNT LOGIN</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/account/register" className="Link Link--primary">REGISTER</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/cart" className="Link Link--primary">CART</a>
                </li>
              </ul>
            </div>

            <div md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h2 className="  u-h6">SUPPORT</h2>
              <ul className="Linklist  Footer_link_Linklist">
                <li className="Linklist__Item">
                  <a href="/pages/faq" className="Link Link--primary">HELP CENTER</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/download" className="Link Link--primary">DOWNLOADS</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/warranty" className="Link Link--primary"> WARRANTY &amp; SERVICE</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/claim-your-warranty" className="Link Link--primary"> CLAIM YOUR WARRANTY</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/return-refund-policy" className="Link Link--primary">
                    RETURN &amp; REFUND POLICY
                  </a>
                </li>
              </ul>
            </div>

            <div md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h2 className="  u-h6">SHOP</h2>
              <ul className="Linklist  Footer_link_Linklist">
                <li className="Linklist__Item">
                  <a href="/collections/all-products" className="Link Link--primary">
                    ALL PRODUCT
                  </a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/shipping-policy" className="Link Link--primary">
                    SHIPPING POLICY
                  </a>
                </li>
                <li className="Linklist__Item">
                  <a
                    href="/pages/soundpeats-wireless-earbuds-wheretobuy"
                    className="Link Link--primary"
                  >
                    WHERE TO BUY
                  </a>
                </li>
              </ul>
            </div>
            <div md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">icon</h6>
              <ul className="Linklist  Footer_link_Linklist">
                <li className="Linklist__Item">
                  <a href="/collections/all-products" className="Link Link--primary">
                    ALL PRODUCT
                  </a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/shipping-policy" className="Link Link--primary">
                    SHIPPING POLICY
                  </a>
                </li>
                <li className="Linklist__Item">
                  <a
                    href="/pages/soundpeats-wireless-earbuds-wheretobuy"
                    className="Link Link--primary"
                  >
                    WHERE TO BUY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        <div className="Footer__Copyright">
          <p className="Footer__ThemeAuthor">
            {" "}
            © 2019-2022,{" "}
            <a href="/" title="">
              SOUNDPEATS
            </a>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
