<<<<<<< HEAD
import React from 'react';
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.webp'
import img4 from '../images/4.webp'
import '../Css/Footer.css'

export default function App() {
  return (
    <div className='text-center' color='white' bgColor='dark'>
      <div className='p-0'>
        <section className='site-footer-header mb-0 d-flex justify-content-center'>
          <div outline color="light" floating className='m-1' href="https://twitter.com/SOUNDPEATS" target='_blank' role='button'>
          <i class="fa-brands fa-twitter"></i>
          </div>

          <div outline color="light" floating className='m-1' href="https://www.facebook.com/SOUNDPEATS.Official" target='_blank' role='button'>
          <i class="fa-brands fa-facebook"></i>
          </div>

          <div outline color="light" floating className='m-1' href="https://www.instagram.com/soundpeats_global/" target='_blank' role='button'>
          <i class="fa-brands fa-instagram"></i>
          </div>

          <div outline color="light" floating className='m-1' href="https://www.youtube.com/channel/UCYRNJk2TjaTj_fWJ5omNoBA" target='_blank' role='button'>
          <i class="fa-brands fa-youtube"></i>
          </div>

          <div outline color="light" floating className='m-1' href="https://www.tiktok.com/@soundpeatsaudio" target='_blank' role='button'>
          <i class="fa-brands fa-tiktok"></i>
          </div>
        </section>

        <section className='site-footer-header'>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div classNAme='col footer__newsletter' size="auto">
                <p className='pt-2 mb-3'>
                  Sign up for our newsletter for the latest news and exclusive deals
                </p>
              </div>

              <div className='col md-5' start>
                <input contrast type='email' label='Email address' className='mb-3 p-3' placeholder="Enter your email address"/>
              </div>

              <div classNaAme='col' size="auto">
                <button outline color='light' type='submit' className='mb-4 p-1' style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: '1px solid white',
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className='Footer'>
          <div className="col">
            <div className='footer-brand-container hidden-phone d-flex col mb-4 mb-md-0 lg-3 md-6 justify-content-around' style={{paddingTop:'78px'}}>
                <div><img className='cell' src={img1} alt="" /> </div>
                <div><img className='cell' src={img2} alt="" /> </div>
                <div><img className='cell' src={img3} alt="" /> </div>
                <div><img className='cell' src={img4} alt="" /> </div>
            </div>
          <div className='row p-4' style={{textAlign: 'left'}}>
            <div className='col mb-4 mb-md-0 lg-3 md-6'>
              <h6 className='text-uppercase text-white'><strong>SOUNDPEATS</strong></h6>

              <ul className='Linklist  Footer_link_Linklist list-unstyled mb-0'>
              <li className="Linklist__Item">
                  <a href="/pages/about-us" className="Link Link--primary">ABOUT US</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/affiliate" className="Link Link--primary">AFFILIATE</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/media" className="Link Link--primary">NEWSROOM</a>
                </li>
              </ul>
            </div>

            <div className='col mb-4 mb-md-0  lg-3 md-6' >
              <h6 className='text-uppercase text-white'><strong>ACCOUNT</strong></h6>

              <ul className='Linklist  Footer_link_Linklist list-unstyled mb-0'>
              <li className="Linklist__Item">
                  <a href="/collections/all-products" className="Link Link--primary">ALL PRODUCT</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/shipping-policy" className="Link Link--primary">SHIPPING POLICY</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/soundpeats-wireless-earbuds-wheretobuy" className="Link Link--primary">WHERE TO BUY</a>
                </li>
              </ul>
            </div>

            <div className='col mb-4 mb-md-0 lg-3 md-6'>
              <h6 className='text-uppercase text-white'><strong>SUPPORT</strong></h6>

              <ul className='Linklist  Footer_link_Linklist list-unstyled mb-0'>
              <li className="Linklist__Item">
                  <a href="/pages/faq" className="Link Link--primary">HELP CENTER</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/download" className="Link Link--primary">DOWNLOADS</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/warranty" className="Link Link--primary">WARRANTY &amp; SERVICE</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/claim-your-warranty" className="Link Link--primary">CLAIM YOUR WARRANTY</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/return-refund-policy" className="Link Link--primary">RETURN &amp; REFUND POLICY</a>
                </li>
              </ul>
            </div>

            <div className='col mb-4 mb-md-0 lg-3 md-6'>
              <h6 className='text-uppercase text-white'><strong>SHOP</strong></h6>

              <ul className='Linklist  Footer_link_Linklist list-unstyled mb-0'>
              <li className="Linklist__Item">
                  <a href="/collections/all-products" className="Link Link--primary">ALL PRODUCT</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/shipping-policy" className="Link Link--primary">SHIPPING POLICY</a>
                </li>
                <li className="Linklist__Item">
                  <a href="/pages/soundpeats-wireless-earbuds-wheretobuy" className="Link Link--primary">WHERE TO BUY</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </section>
      </div>

      <div className='Footer__content text-center p-3 d-flex' style={{ backgroundColor: '#000000'}}>
      <p className="Footer__ThemeAuthor"> © 2019-2022,  <a href="/en-mx" title="">
      SOUNDPEATS</a>. All Rights Reserved</p>
      <div><a className='cell' href="/en-mx/pages/privacy-policy">Privacy Policy</a></div>
      <div><a className='cell' href="//en-mx/pages/cookie-preferences">Cookie Policy</a></div>
      <div><a className='cell' href="/en-mx/pages/terms-of-use">Term of Use</a></div>
      <div><a className='cell' href="/en-mx/pages/weee">WEEE</a></div>
      <div><a className='cell' href="/en-mx/pages/intellectual-property-rights"> Intellectual Property Rights</a></div>
      </div>
    </div>
  );
}
