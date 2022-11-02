import React from 'react';
import '../Css/Header.css';
import 'https://kit.fontawesome.com/b3b18b68d1.js';
const Header = () => {
  return (
    <div className='header'>
      <p className='header__topBar fw-bolder text-white text-center bg-dark'>Air3 Deluxe HS will be launch on 11/18.</p>
      <div className="header__navBar d-flex justify-content-between bg-black mt-1">
        <div className="navBar__left">Left</div>
        <div className="navBar__center"><img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/sound-logo_18x.png?v=1626159675" alt="SoundPeats" /></div>
        <div className="navBar__right d-flex align-items-center justify-content-between text-white">
          <div class="dropdown">
            <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              USD$
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><button class="dropdown-item" href="#">CNY¥</button></li>
              <li><button class="dropdown-item" href="#">EUR€</button></li>
              <li><button class="dropdown-item" href="#">MXN$</button></li>
            </ul>
          </div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <div class="dropdown">
            <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://cdn.weglot.com/flags/circle/us.svg" alt="American" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><img src="https://cdn.weglot.com/flags/circle/es.svg" alt="American" /></li>
              <li><img src="https://cdn.weglot.com/flags/circle/de.svg" alt="American" /></li>
              <li><img src="https://cdn.weglot.com/flags/circle/cn.svg" alt="American" /></li>
              <li><img src="https://cdn.shopifycdn.net/s/files/1/0508/7461/3942/files/jp_1.svg?v=1635846138" alt="American" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
