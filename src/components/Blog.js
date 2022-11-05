import React from "react";
import "../Css/Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <header className="Page__Header">
          <div className="Section__Header">
            <h4 className="Section__Header Heading text-start text-dark mt-0">
              News<a href="/blog" target="_blank"></a>
            </h4>
            <ul className="Blog__TagList d-flex text-center">
              <li className="HorizontalList__Item">
                <a href="/blogs/news" className="Heading Link">
                  All
                </a>
              </li>
              <li className="HorizontalList__Item">
                <a href="/blogs/news/tagged/anc" className="Heading Link">
                  ANC
                </a>
              </li>
              <li className="HorizontalList__Item">
                <a href="/blogs/news/tagged/earbuds" className="Heading Link">
                  Earbuds
                </a>
              </li>
              <li className="HorizontalList__Item">
                <a
                  href="/blogs/news/tagged/new-release"
                  className="Heading Link"
                >
                  New Release
                </a>
              </li>
              <li className="HorizontalList__Item">
                <a href="/blogs/news/tagged/news" className="Heading Link">
                  News
                </a>
              </li>
              <li className="HorizontalList__Item">
                <a
                  href="/blogs/news/tagged/press-releases"
                  className="Heading Link"
                >
                  Press Releases
                </a>
              </li>
              <li className="HorizontalList__Item">
                <a href="/blogs/news/tagged/wireless" className="Heading Link">
                  Wireless
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="Article__List">
          <div className="ArticleList__Featured">
            <div className="Image__Hero Image__Wrapper">
              <div className="ImageHero__Image">
                <div className="ImageHero__Image card m-4">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_1500x.jpg?v=1664437542"
                    className="Image"
                    alt="..."
                  />
                  <header className="Section__Header card-img-overlay">
                    <h4 className="SectionHeader__Heading">
                      <a
                        href="/blogs/news/new-arrival-soundpeats-launches-life-wireless-earbuds-in-the-us"
                        className=" text-decoration-none text-white text-start"
                      >
                        New Arrival | SOUNDPEATS Launches Life Wireless Earbuds
                        in the US
                      </a>
                    </h4>
                    <div className="SectionHeader__ButtonWrapper">
                      <a
                        href="/blogs/news/new-arrival-soundpeats-launches-life-wireless-earbuds-in-the-us"
                        className="button text-decoration-none"
                      >
                        Read more
                      </a>
                    </div>
                  </header>
                </div>
              </div>
            </div>

            <section className="Blog__cards container">
              <div className="row m-4">
                <div className="col">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="image-wrapper">
                        <a href="/" className="Iamge-Link">
                          <img
                            src="https://drscdn.500px.org/photo/92064849/m%3D900/v2?webp=true&sig=11d9fce5c5ec6d7b5ace21eff0cf8103b220658bc787b801dfe37ddc8e0b3d48"
                            alt="Beautiful woman face by Oleg Gekman on 500px.com"
                          />
                        </a>
                      </div>
                      <div className="text-box-wrapper">
                        <div className="text-box">
                          <h1 className="heading">Fashion Week Styles</h1>

                          <p className="text">
                            Let's get this straight out of the way. Fashion in
                            2018 has been really hot. From Gucci sandals to
                            Fendi handbags, we saw all of our favorite brands .
                            .
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
        </div>
      </div>
    </div>
  );
};

export default Blog;
