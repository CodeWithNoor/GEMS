import React from 'react';
import "../Css/Slider.css";
const Slider = () => {
    return (
        <div className="slider">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button className="active circleIndicators" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button className='circleIndicators' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/26_1600x.jpg?v=1666601139" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/623_1600x.jpg?v=1655978826" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/mini_pro__banner_1600x.jpg?v=1644466887" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/1_853ac8a3-aa00-4874-b017-27c91dde5e27_1600x.jpg?v=1666232825" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/7_6023e811-bde3-465c-b776-f14ba14d8511_1600x.jpg?v=1634012428" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/1_c4b6270c-ca5b-4b7c-a3a7-d63d6aef2cec_1600x.jpg?v=1637318366" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/Air3_deluxe_HS_1920_1600x.jpg?v=1666870483" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/bf52bde9cfd024eab96e7ba0cf744a30_1600x.jpg?v=1665300664" className="d-block w-100" alt="earbuds" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;