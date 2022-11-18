import React from "react";
import "../Css/Affilitate.css";
import APC from "../components/Affilitate_inner";
import arrow from "../images/arrow.png";

const Affiliate = () => {
  // const data = [
  //   {
  //     label: "HOW DOES THE PROGRAM WORK?",
  //     contents:
  //       "The SOUNDPEATS Affiliate Program allows you to make money by referring customers. Each time you refer a customer to one of our websites and that customer makes a purchase, you earn a commission (a percentage of each sale). We handle the transaction processing, fulfillment and customer service. We provide you with detailed reports on sales that were referred from your website and every month, we send you a check for the commission you earned.",
  //   },
  //   {
  //     label: "WHAT DOES IT COST TO JOIN?",
  //     contents:
  //       "Applying to and participating in the SOUNDPEATS Affiliate Program is absolutely FREE. There are no fees of any kind - there is no charge to apply and no minimum sales requirement.",
  //   },
  //   {
  //     label: "HOW DO I GET STARTED?",
  //     contents:
  //       "Register a ShareASale affiliate account. Sign up for SOUNDPEATS & ShareASale Program. Get accepted to the program. Create links to SOUNDPEATS brands from the Ads section on Impact. Promote SOUNDPEATS family of brands on your site. Login to Impact at any time to see reports of how your website is doing, how many people are browsing and what they're buying. Run reports your way whenever you want - they're updated every day. Get paid up to 20% commission!",
  //   },
  // ];

  return (
    <section>
      <div className="affilitate__banner">
        <div className="affilitate__banner container my-5">
          <div className="affilitate__banner__image">
            <img
              className="hero__image"
              src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/1e17183f88b46558cf45b25a9d3faf78_1200x.jpg?v=1631006426"
              alt=""
            />
          </div>

          <div className="inner_text_content">
            <h1 className="title">SOUNDPEATS AFFILIATE PROGRAM</h1>
            <div className="content">
              Start earning by promoting technology that has an everyday place
              in people's lives.
            </div>
          </div>

          <hr style={{ height: "1px" }} />
          <div className="affilitate__content">
            <div className="affilitate__nav__item">
              <div className="item bold_title is-active">HOW IT WORKS</div>
              <div className="item bold_title">YOUR BENEFITS</div>
              <div className="item bold_title">YOUR CUSTOMERS BENEFITS</div>
              <div className="item bold_title">JOIN US</div>  
            </div>
          </div>
          <hr style={{ height: "1px" }} />

          <div className="affilitate_nav_content">
            <div className="anc-inner">
              <div className="box box-1 active">
                <h2 className="title">HOW IT WORKS</h2>
                <div className="content">
                  1. Affiliate promotes SOUNDPEATS on social platforms
                  <br />
                  2. Potential customer clicks on the posts
                  <br />
                  3. Customer orders at SOUNDPEATS
                  <br />
                  4. Affiliate receives commissions
                </div>
              </div>

              <div className="box box-2">
                <h2 className="title">YOUR BENEFITS</h2>
                <div className="content">
                  1. 10%~20% commission on each referred sale.
                  <br />
                  2. Extra monthly Cash Bonus by sharing promotions.
                  <br />
                  3. New monthly profitable activities , updating banners and
                  coupons.
                  <br />
                  4. Newsletters when new activity and promotions update.
                </div>
              </div>

              <div className="box box-3">
                <h2 className="title">YOUR CUSTOMERS BENEFITS</h2>
                <div className="content">
                  1. Different styles of latest earbuds and headphones available
                  <br />
                  2. Affordable prices
                  <br />
                  3. customer service and Live chat service
                  <br />
                  4. Worry-free Return and Refund
                </div>
              </div>

              <div className="box box-4 ccollapse" id="collapseExample">
                <h2 className="title">JOIN US</h2>
                <div className="content">
                  <h2 style={{ fontSize: "2vw" }}>
                    <b>REGISTER NOW!</b>
                  </h2>
                  <h2 style={{ fontSize: "3vw" }}>* 10% ~ 20% *</h2>commission
                  per order
                </div>
              </div>

              <div className="button">
                <a
                  href="https://account.shareasale.com/newsignup.cfm"
                  className="sign_up"
                >
                  SIGN UP/LOG IN FOR FREE NOW &gt;
                </a>
              </div>
            </div>

            <div className="content">
              <p>
                If you have any other inquiries, please do not hesitate to
                e-mail us:
                <a
                  className="text-decoration-none"
                  href="mailto:marketing@soundpeatsaudio.com"
                  title="mailto:marketing@soundpeatsaudio.com"
                >
                  Marketing@soundpeatsaudio.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="affilitate_platforms">
          <div className="apc-inner">
            <div className="section_header">
              <h2 className="section_header_heading">PROCESS</h2>
            </div>

            <div className="apc-content">
              <APC
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/5c1c18adb65c7850c0e95c123d529df6_f95a88f2-592a-42fc-b4b3-2e6c412902c2_62x.png?v=1629253001"
                title="Visit site to apply for the affiliate program"
                arrow_icon={arrow}
              />

              <APC
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/1_36f57dd6-2a14-4147-bd83-4d3fb5e49d7d_61x.png?v=1629252916"
                title="Share an affiliate link"
                arrow_icon={arrow}
              />

              <APC
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/2_0e4b4cf2-d286-4300-b1b4-3de8a154a7cd_61x.png?v=1629252937"
                title="Get customers to make a purchase"
                arrow_icon={arrow}
              />

              <APC
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/4_f5d49b71-b701-4f24-8fba-8e112bcf9cc7_61x.png?v=1629252948"
                title="Wait for your order to be confirmed"
                arrow_icon={arrow}
              />

              <APC
                image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/5_bda96c6a-509a-46d5-acdb-6b2df2022821_61x.png?v=1629253212"
                title="Get your commission!"
              />
            </div>
          </div>
        </div>

        <div className="affilitate_join container">
          <div className="affilitate_join_container">
            <div className="affilitate-content">
              <div className="ajc-inner">
                <div className="sectionHeader">
                  <h3 className="sectionHeader__Heading">
                    GET STARTED WITH PARTNER AFFILIATE PLATFORMS
                  </h3>
                </div>
              </div>
              <div className="ajc-content">
                <div className="cell">
                  <img
                    className
                    src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/4532de5a6fc6f01392a1576217f2fd5c_296x.png?v=1629257809"
                    alt=""
                  />
                  <div className="button">
                    <a
                      href="https://account.shareasale.com/newsignup.cfm"
                      className="sign_up log-in"
                    >
                      SIGN UP/LOG IN NOW &gt;
                    </a>
                  </div>
                </div>
              </div>
              <div className="affilitate-join-bottom">
                <div className="sectionHeader">
                  <h3 className="sectionHeader__Heading">
                    <a
                      href="/pages/affiliate"
                      className="text-decoration-none text-dark"
                    >
                      MORE COMING SOON...
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="affilitate-faq-container">
          <div className="faqs container">
            <div className="commonHeader">
              <h5 className="faqs__Heading text-start">FAQS</h5>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <div
                  className="question"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                 HOW DOES THE PROGRAM WORK?
                </div>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="contents">
                  The SOUNDPEATS Affiliate Program allows you to make money by referring customers. Each time you refer a customer to one of our websites and that customer makes a purchase, you earn a commission (a percentage of each sale). We handle the transaction processing, fulfillment and customer service. We provide you with detailed reports on sales that were referred from your website and every month, we send you a check for the commission you earned.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="question"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  WHAT DOES IT COST TO JOIN?
                </div>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="contents">
                  Applying to and participating in the SOUNDPEATS Affiliate Program is absolutely FREE. There are no fees of any kind - there is no charge to apply and no minimum sales requirement.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="question"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  HOW DO I GET STARTED?
                </div>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="contents">
                  Register a ShareASale affiliate account. Sign up for SOUNDPEATS & ShareASale Program. Get accepted to the program. Create links to SOUNDPEATS brands from the Ads section on Impact. Promote SOUNDPEATS family of brands on your site. Login to Impact at any time to see reports of how your website is doing, how many people are browsing and what they're buying. Run reports your way whenever you want - they're updated every day. Get paid up to 20% commission!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
