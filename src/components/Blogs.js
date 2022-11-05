import React from "react";
import "../Css/Blogs.css";

const Blogs = () => {
  return (
    <div className="blog">
      <div className="container">
        <header className="Page__Header">
          <div className="Section__Header">
            <h4 className="Section__Header__heading text-start text-dark">
              News <a href="/blogs/news"></a>
            </h4>
            <div className="Blog__TagList">
              <ul className="Blog__TagList HorizontalList my-3">
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news"
                    className="Heading Link Text--subdued is-active"
                  >
                    All
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/anc"
                    className="Heading Link Text--subdued"
                  >
                    ANC
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/earbuds"
                    className="Heading Link Text--subdued"
                  >
                    earbuds
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/new-release"
                    className="Heading Link Text--subdued"
                  >
                    New Release
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/news"
                    className="Heading Link Text--subdued"
                  >
                    News
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/press-releases"
                    className="Heading Link Text--subdued"
                  >
                    press releases
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    href="/blogs/news/tagged/wireles"
                    className="Heading Link Text--subdued"
                  >
                    Wireless
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <section className="container Article__List">
          <div className="ArticleList__Featured container">
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
                    <h4 className="SectionHeader__Heading Heading ">
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

          <div className="Blog container m-3">
            <div className="Blog__Card row">
              <div className="col-4">
                <div className="card-wrapper">
                  <div className="Blog__Card__Content">
                    <div className="image-wrapper">
                      <a className="image-link" href="/">
                        <img
                          className="Card__Image"
                          src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/Halloween_Party_Flyer_A4_600x.jpg?v=1666003195"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="text-box-wrapper">
                      <div className="text-box">
                        <p className="ArticleList text">News</p>
                        <h1 className="heading my-3">
                          Halloween Giveaway | Win Newest LIFE Wireless Earbuds
                        </h1>

                        <p className="text">
                          Thought it was a hoot and a half? We have other
                          channels for more giveaways to Oct,31! Go again for
                          more chances: Facebook Instgram Twittwer ...
                        </p>
                      </div>
                    </div>

                    <div className="button-wrapper">
                      <a className="button" href="/">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card-wrapper">
                  <div className="Blog__Card__Content">
                    <div className="image-wrapper">
                      <a
                        className="image-link"
                        href="/blogs/news/review-soundpeats-air3-deluxe"
                      >
                        <img
                          className="Card__Image"
                          src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/IMG_5031_800x.jpg?v=1665328678"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="text-box-wrapper">
                      <div className="text-box">
                        <h1 className="heading my-3">
                          Review | SOUNDPEATS Air3 Deluxe
                        </h1>

                        <p className="text">
                          Google "wireless earbuds", you will find thousands of
                          models from hundreds of manufacturers. The truth is
                          that there’s an excess of earbuds the...
                        </p>
                      </div>
                    </div>

                    <div className="button-wrapper">
                      <a className="button" href="/">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card-wrapper">
                  <div className="Blog__Card__Content">
                    <div className="image-wrapper">
                      <a
                        className="image-link"
                        href="/blogs/news/soundpeats-bluetooth-true-wireless-earbuds-article-review-june-2022"
                      >
                        <img
                          className="Card__Image"
                          src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/mini_pro_b6a881b9-4235-450d-ac8e-2acbdda12e2d_600x.jpg?v=1662006074"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="text-box-wrapper">
                      <div className="text-box">
                        <h1 className="heading my-3">
                          Review | SOUNDPEATS Mini Pro
                        </h1>

                        <p className="text">
                          SOUNDPEATS advocates smart technology and is committed
                          to integrating music into daily life. They want to
                          create scientific and innovative True Wir...
                        </p>
                      </div>
                    </div>

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

          <div className="Blog__Card row">
            <div className="col-4">
              <div className="card-wrapper">
                <div className="Blog__Card__Content">
                  <div className="image-wrapper">
                    <a
                      className="image-link"
                      href="/blogs/news/soundpeats-air-3-pro-review"
                    >
                      <img
                        className="Card__Image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/Untitled_design_1_800x.png?v=1661425882"
                        alt=" Review | SOUNDPEATS Air3 Pro"
                      />
                    </a>
                  </div>
                  <div className="text-box-wrapper">
                    <div className="text-box">
                      <h1 className="heading my-3">
                        Review | SOUNDPEATS Air3 Pro
                      </h1>

                      <p className="text">
                        "Great Value" "Highly Recommmend" "Awesome"… There are
                        rave reviews on SOUNDPEATS Air3 Pro since these true
                        wireless earbuds was launche...
                      </p>
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <a className="button" href="/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card-wrapper">
                <div className="Blog__Card__Content">
                  <div className="image-wrapper">
                    <a
                      className="image-link"
                      href="/blogs/news/soundpeats-air3pro"
                    >
                      <img
                        className="Card__Image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/4_600x.jpg?v=1655365834"
                        alt="SOUNDPEATS Air3 Pro - Pre-launch l $39.99"
                      />
                    </a>
                  </div>
                  <div className="text-box-wrapper">
                    <div className="text-box">
                      <p className="ArticleList text">ANC</p>
                      <h1 className="heading my-3">
                        SOUNDPEATS Air3 Pro - Pre-launch l $39.99
                      </h1>

                      <p className="text">
                        SOUNDPEATS Hybrid ANC Air3 Pro will be launched on 28th
                        June in the US Amazon. There will be a limited-time
                        online deal price of $39.99 on a first...
                      </p>
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <a className="button" href="/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card-wrapper">
                <div className="Blog__Card__Content">
                  <div className="image-wrapper">
                    <a
                      className="image-link"
                      href="/blogs/news/soundpeats-free2-classic-video-review-june-2022"
                    >
                      <img
                        className="Card__Image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_16_800x.jpg?v=1654156012"
                        alt="SOUNDPEATS Free2 Classic Video Review - June 2022"
                      />
                    </a>
                  </div>
                  <div className="text-box-wrapper">
                    <div className="text-box">
                      <h1 className="heading my-3">
                        SOUNDPEATS Free2 Classic Video Review - June 2022
                      </h1>

                      <p className="text">
                        SOUNDPEATS Free2 Classic has Long battery life,
                        Innovative exterior design, 6mm bio-diaphragm speaker,
                        Touch control with deal price.
                      </p>
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <a className="button" href="/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blog__Card row">
            <div className="col-4">
              <div className="card-wrapper">
                <div className="Blog__Card__Content">
                  <div className="image-wrapper">
                    <a className="image-link" href="/blogs/news/air3-release">
                      <img
                        className="Card__Image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/3_800x.jpg?v=1630296836"
                        alt="New Arrival | SOUNDPEATS Launches Air3 Wireless Earbuds in the US"
                      />
                    </a>
                  </div>
                  <div className="text-box-wrapper">
                    <div className="text-box">
                      <p className="ArticleList text">press releases</p>
                      <h1 className="heading my-3">
                        New Arrival | SOUNDPEATS Launches Air3 Wireless Earbuds
                        in the US
                      </h1>

                      <p className="text">
                        Priced at $49.99, SOUNDPEATS Air3 offers superior sound
                        quality at a reasonable price. SOUNDPEATS’ new Air3
                        earbuds feature a 14.2 mm dynamic drive...
                      </p>
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <a className="button" href="/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card-wrapper">
                <div className="Blog__Card__Content">
                  <div className="image-wrapper">
                    <a
                      className="image-link"
                      href="/blogs/news/the-future-of-tech-is-here"
                    >
                      <img
                        className="Card__Image"
                        src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/KTA2754_800x.jpg?v=1630057268"
                        alt="SOUNDPEATS Introduces New H1 True Wireless Earbuds in the United States"
                      />
                    </a>
                  </div>
                  <div className="text-box-wrapper">
                    <div className="text-box">
                      <p className="ArticleList text">press releases</p>
                      <h1 className="heading my-3">
                        SOUNDPEATS Introduces New H1 True Wireless Earbuds in
                        the United States
                      </h1>

                      <p className="text">
                        SOUNDPEATS, a global headphone producer and an Amazon
                        bestseller in the headphone category, announced today
                        that it launched its H1 True Wireless E...
                      </p>
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <a className="button" href="/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ***************************************************************************************************** */}

      <section className="Section__ShopNow container">
        <div className="Shop__Now">
          <h5 className="Shop__Now__Heading">Shop Now</h5>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
