import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Blog.css";
import Blog__Cards from "./BlogCard";

const Blogs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };

  return (
    <div className="blog">
      <div className="container">
        {/* ****************** Menus****************** */}
        <header className="Page__Header">
          <div className="Section__Header">
            <h4 className="Section__Header__heading text-start text-dark">
              {/* eslint-disable-next-line  */}
              News <a href="/blogs/news"></a>
            </h4>
            <div className="Blog__TagList">
              <ul className="Blog__TagList HorizontalList my-3">
                <li className="HorizontalList__Item">
                  <a
                    id="news"
                    href="/blogs/news"
                    className="Heading Link Text__subdued is-active"
                  >
                    All
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/anc"
                    className="Heading Link Text__subdued"
                  >
                    ANC
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a href="/ANC" className="Heading Link Text__subdued">
                    earbuds
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/new-release"
                    className="Heading Link Text__subdued"
                  >
                    New Release
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/news"
                    className="Heading Link Text__subdued"
                  >
                    News
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/press-releases"
                    className="Heading Link Text__subdued"
                  >
                    press releases
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/wireles"
                    className="Heading Link Text__subdued"
                  >
                    Wireless
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* *************************************Desktop Responsive********************************************* */}
        <section className=" Article__List container">
          <div className="ArticleList__Featured Desktop">
            <div className="Section__Header">
              <div className="Hero__Section container">
                <div className="Blog__Hero__Section">
                  <div className="image-wrapper" style={{ height: "400px" }}>
                    <img
                      className="HeroImage"
                      src="	https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_1500x.jpg?v=1664437542"
                      alt=""
                    />
                  </div>
                  <div className="Section__Header__Article">
                    <h4 className="SectionHeader__Heading">
                      <a href="/blogs/news/new-arrival-soundpeats-launches-life-wireless-earbuds-in-the-us">
                        New Arrival | SOUNDPEATS Launches Life Wireless Earbuds
                        in the US
                      </a>
                    </h4>
                    <div className="SectionHeader__ButtonWrapper">
                      <a
                        href="/blogs/news/new-arrival-soundpeats-launches-life-wireless-earbuds-in-the-us"
                        className="Button Button--primary"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* *************************************Mobile Responsive********************************************* */}
          <div className="ArticleList__Featured Mobile">
            <div className="Section__Header">
              <div className="Hero__Section container">
                <div className="Blog__Hero__Section">
                  <div className="image-wrapper" style={{ height: "200pxpx" }}>
                    <img
                      className="HeroImage"
                      src="	https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_1500x.jpg?v=1664437542"
                      alt=""
                    />
                  </div>
                  <div className="Section__Header__Article">
                    <h4 className="SectionHeader__Heading">
                      <a href="/blogs/news/new-arrival-soundpeats-launches-life-wireless-earbuds-in-the-us">
                        New Arrival | SOUNDPEATS Launches Life Wireless Earbuds
                        in the US
                      </a>
                    </h4>
                    <p className="SectionHeader__ArticleItem__Excerpt">
                      FOR IMMEDIATE RELEASE &nbsp; SOUNDPEATS Launches Life
                      Wireless Earbuds in the United States&nbsp; &nbsp; Priced
                      at $29.99, SOUNDPEATS Life&nbsp;offers an ideal budget ...
                    </p>
                    <div className="SectionHeader__ButtonWrapper">
                      <a
                        href="/blogs/news/new-arrival-soundpeats-launches-life-wireless-earbuds-in-the-us"
                        className="Button Button--primary"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* *************************************Product Cards********************************************* */}
          <div className="Blog container">
            <div className="Blog__row row">
              <Blog__Cards
                title="News"
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/Halloween_Party_Flyer_A4_600x.jpg?v=1666003195"
                heading="Halloween Giveaway | Win Newest LIFE Wireless Earbuds"
                description=" Thought it was a hoot and a half? We have other channels for more giveaways to Oct,31! Go again for more chances: Facebook Instgram Twittwer ..."
              />
              <Blog__Cards
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/IMG_5031_800x.jpg?v=1665328678"
                heading="Review | SOUNDPEATS Air3 Deluxe"
                description=' Google "wireless earbuds", you will find thousands of models from hundreds of manufacturers. The truth is that there’s an excess of earbuds the...'
              />
              <Blog__Cards
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/mini_pro_b6a881b9-4235-450d-ac8e-2acbdda12e2d_600x.jpg?v=1662006074"
                heading="Review | SOUNDPEATS Mini Pro"
                description="SOUNDPEATS advocates smart technology and is committed to integrating music into daily life. They want to create scientific and innovative True Wir..."
              />
            </div>

            <div className="Blog__row row">
              <Blog__Cards
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/Untitled_design_1_800x.png?v=1661425882"
                heading="Review | SOUNDPEATS Air3 Pro"
                description='  "Great Value" "Highly Recommmend" "Awesome"… There are rave reviews on SOUNDPEATS Air3 Pro since these true wireless earbuds was launche...'
              />

              <Blog__Cards
                title="ANC"
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/4_600x.jpg?v=1655365834"
                heading="SOUNDPEATS Air3 Pro - Pre-launch l $39.99"
                description=" SOUNDPEATS Hybrid ANC Air3 Pro will be launched on 28th June in the US Amazon. There will be a limited-time online deal price of $39.99 on a first..."
              />

              <Blog__Cards
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_16_800x.jpg?v=1654156012"
                heading="SOUNDPEATS Free2 Classic Video Review - June 2022"
                description=" SOUNDPEATS Free2 Classic has Long battery life, Innovative exterior design, 6mm bio-diaphragm speaker, Touch control with deal price."
              />
            </div>

            <div className="Blog__row row">
              <Blog__Cards
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/3_800x.jpg?v=1630296836"
                title="press releases"
                heading=" New Arrival | SOUNDPEATS Launches Air3 Wireless Earbuds in the US"
                description="Priced at $49.99, SOUNDPEATS Air3 offers superior sound quality at a reasonable price. SOUNDPEATS’ new Air3 earbuds feature a 14.2 mm dynamic drive..."
              />

              <Blog__Cards
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/KTA2754_800x.jpg?v=1630057268"
                title="press releases"
                heading=" SOUNDPEATS Introduces New H1 True Wireless Earbuds in the United States"
                description="SOUNDPEATS, a global headphone producer and an Amazon bestseller in the headphone category, announced today that it launched its H1 True Wireless E..."
              />
            </div>
          </div>
        </section>
      </div>
      {/* ******************************************Shop Now*********************************************************** */}
      <section className="container">
        <div className="ProductItem__container container">
          <div className="ProductItem">
            <h5 className="ShopNow"> Shop Now </h5>
            <div className="products">
              <div>
                <div>
                  <Slider {...settings}>
                    <div className="Product__Item">
                      <div className="product-image1">
                        <img
                          className="product__image"
                          src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/Free2classic_35f34fc0-30dc-43ab-9d14-4b2e53b34764_400x.png?v=1658806095"
                          alt=""
                        />
                      </div>
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-sonic-wireless-earbuds text-dark">
                            SOUNDPEATS Sonic True Wireless Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$63.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/12_a0483a3f-62bd-4ec1-b981-26835553a97f_400x.png?v=1632293892"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-t3-tws-earbuds">
                            SOUNDPEATS T3 Active Noise Canceling TWS Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$55.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/H1_1_1_adobespark_400x.png?v=1630635189"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-h1-wireless-earbuds">
                            SOUNDPEATS H1 Hybrid Dual Driver True Wireless
                            Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price Price--highlight">
                            $89.99
                          </span>
                          <span className="ProductItem__Price Price--compareAt">
                            $119.99
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_1_adobespark_edbaa5b5-383f-4bd1-a4ef-0f6b4e7006cf_400x.png?v=1630635175"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-truefree-plus-wireless-in-ear-sport-earbuds">
                            SOUNDPEATS TrueFree + True Wireless In-Ear Sports
                            Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$49.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/T2_1_1_1__adobespark_400x.png?v=1630635188"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-t2-wireless-earbuds">
                            SOUNDPEATS T2 True Wireless Hybrid ANC In-Ear
                            Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$69.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/3se_1_1_adobespark_400x.png?v=1630635174"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-truengine-3-se-wireless-in-ear-hifi-earbuds">
                            SOUNDPEATS Truengine 3 SE True Wireless In-Ear HiFi
                            Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$57.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/Air3deluxe-2_400x.png?v=1658805139"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-air3-deluxe-wireless-earbuds">
                            SOUNDPEATS Air3 Deluxe Wireless Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$59.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/Minipro_200x.png?v=1658806458"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-mini-pro-wireless-earbuds">
                            SOUNDPEATS Mini Pro Wireless Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price Price--highlight">
                            $69.99
                          </span>
                          <span className="ProductItem__Price Price--compareAt">
                            $79.99
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="Product__Item">
                      <img
                        className="product__image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/products/Sonic_1_1_adobespark-min_400x.png?v=1630636324"
                        alt=""
                      />
                      <div className="Product__info">
                        <h6 className="ProductItem__Title">
                          <a href="/products/soundpeats-sonic-wireless-earbuds">
                            SOUNDPEATS Sonic True Wireless Earbuds
                          </a>
                        </h6>
                        <div className="ProductItem__PriceList">
                          <span className="ProductItem__Price">$63.99</span>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          {/* *************************************FeatureQuote********************************************* */}
          <div className="FeatureQuote">
            <div className="FeaturedQuote__Container">
              <div className="FeaturedQuote__Content">
                <p>
                  For the price, these H1 wireless earbuds provide unsurpassed
                  clarity and detail in music, movie and game audio, making them
                  super easy to recommend.
                  <br />
                  <br />
                </p>
              </div>
              <p className="FeaturedQuote__Author">SCOTT THARLER</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
