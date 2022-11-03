import React from "react";
import "https://kit.fontawesome.com/b3b18b68d1.js";
import "../Css/Header.css";

const Header = () => {


  // function myFunction(x) {
  //   if (x.matches) { // If media query matches
  //     document.getElementById("mySidenav").style.width = "100%";
  //   } 
  // }
  // var x = window.matchMedia("(max-width: 768px)")
  // myFunction(x) // Call listener function at run time
  // x.addEventListener("click", myFunction) // Attach listener function on state changes
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function handleHoverIn() {
    document.querySelector(".header__navBar").style.transition = "all 0.5s";
    document.querySelector(".header__navBar").style.backgroundColor = "#FFFFFF";
    document.querySelector(".currency_Btn").style.color = "#000000";
    document.querySelector(".whiteLogo").style.display = "none";
    document.querySelector(".blackLogo").style.display = "block";
    const hamIcon = document.querySelectorAll(".hamburger__Icon");
    for (const iterator of hamIcon) {
      iterator.style.backgroundColor = "#000000";
    }
    const rightIcon = document.querySelectorAll(".righIcon");
    for (const iterator of rightIcon) {
      iterator.style.color = "#000000";
    }
  }
  function handleHoverOut() {
    document.querySelector(".header__navBar").style.transition = "all 0.5s";
    document.querySelector(".header__navBar").style.backgroundColor =
      "transparent";
    document.querySelector(".currency_Btn").style.color = "#FFFFFF";
    document.querySelector(".whiteLogo").style.display = "block";
    document.querySelector(".blackLogo").style.display = "none";
    const hamIcon = document.querySelectorAll(".hamburger__Icon");
    for (const iterator of hamIcon) {
      iterator.style.backgroundColor = "#FFFFFF";
    }
    const rightIcon = document.querySelectorAll(".righIcon");
    for (const iterator of rightIcon) {
      iterator.style.color = "#FFFFFF";
    }
  }
  
  return (
    <div className="header">
      <p className="header__topBar fw-bolder text-white text-center bg-dark">
        Air3 Deluxe HS will be launch on 11/18.
      </p>
      <div
        className="header__navBar d-flex justify-content-between mt-1"
        id="navBar"
        onMouseOver={handleHoverIn}
        onMouseOut={handleHoverOut}
      >
        <div className="navBar__left" onClick={openNav}>
          <div className="hamBurgerIcon">
            <div className="hamburger__Icon"></div>
            <div className="hamburger__Icon"></div>
            <div className="hamburger__Icon"></div>
          </div>
        </div>

        <div className="navBar__center">
          <img
            className="whiteLogo"
            src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/sound-logo_18x.png?v=1626159675"
            alt="SoundPeats"
          />
          <img
            className="blackLogo"
            src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/sound-logo-black_18x.png?v=1626159717"
            alt="SoundPeats"
          />
        </div>
        <div className="navBar__right d-flex align-items-center justify-content-between text-white">
          <div className="dropdown navBar__currency  ps-2 pr-2 px-0">
            <button
              className="btn dropdown-toggle text-white fw-bold px-0 py-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="currency_Btn">USD$</span>
            </button>
            <ul
              className="dropdown-menu w-100 text-center px-6 py-1"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button
                  className="dropdown-item fw-bold border-bottom-0 px-0 py-1"
                  href="#"
                >
                  CNY¥
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item fw-bold border border-bottom-0 px-0 py-1"
                  href="#"
                >
                  EUR€
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item fw-bold border border-bottom-0 px-0 py-1"
                  href="#"
                >
                  MXN$
                </button>
              </li>
            </ul>
          </div>
          <i className="fa-solid fa-magnifying-glass righIcon searchIcon"></i>
          <i className="fa-regular fa-user righIcon"></i>
          <i className="fa-solid fa-cart-shopping righIcon"></i>
          <div className="dropdown navBar__country px-6 px-1">
            <button
              className="btn dropdown-toggle text-white px-2 py-1"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://cdn.weglot.com/flags/circle/us.svg"
                alt="American"
              />
            </button>
            <ul
              className="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <img
                  className=" border border-bottom-0"
                  src="https://cdn.weglot.com/flags/circle/es.svg"
                  alt="American"
                />
              </li>
              <li>
                <img
                  className=" border border-bottom-0"
                  src="https://cdn.weglot.com/flags/circle/de.svg"
                  alt="American"
                />
              </li>
              <li>
                <img
                  className=" border border-bottom-0"
                  src="https://cdn.weglot.com/flags/circle/cn.svg"
                  alt="American"
                />
              </li>
              <li>
                <img
                  className=" border border-bottom-0"
                  src="https://cdn.shopifycdn.net/s/files/1/0508/7461/3942/files/jp_1.svg?v=1635846138"
                  alt="American"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mySidenav" className="sidenav">
          <div className="container px-5">
            <a href="#" className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <a className="AllProducts mt-2" href="#">ALL PRODUCTS</a>
            <a className="NewArrivals mt-2" href="#">NEW ARRIVALS</a>
            <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
              <div className="accordion-item bg-transparent">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    SUPPORT
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <a href="#">Help Center</a>
                    <a href="#">Download</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="Contact mt-2" href="#">Contact</a>
          </div>
        </div>
    </div>
  );
};

export default Header;
