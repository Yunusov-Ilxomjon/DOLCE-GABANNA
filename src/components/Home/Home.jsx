
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './home.css';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,        // 🔥 HAR SAFAR scroll bo‘lganda ishlaydi
      mirror: false,       // 🔁 yuqoriga scroll qilganda ham ishlaydi
    });
  }, []);


  return (
    <div className="collection-container">

      <div data-aos="zoom-out" className="denim-collection">
        <img data-aos="zoom-in" className='collection' src="./images/app/collection.jpg" alt="" />
        <div className="collection-card">
          <h1>Denim <br /> Collection</h1>
          <p>An enigmatic and contemporary collection
            that exalts nautical style through
            meticulous fabrics, prints, <br />
            and precise forms.</p>
          <div className="btn-groups">
            <button className='view-btn'>View Collection</button>
            <button className='buy-btn'>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="collection-images">

        <div className="tranding">
          <h1>Tranding</h1>
          <div data-aos="fade-left" className="tranding-cards">
            <div className="tranding-card">
              <img className='tranding-photo' src="./images/app/tranding1.png" alt="" />
              <p>New from Jordan</p>
            </div>
            <div data-aos="zoom-in" className="tranding-card">
              <img className='tranding-photo' src="./images/app/tranding2.png" alt="" />
              <p>New from Jordan</p>
            </div>
            <div data-aos="fade-right" className="tranding-card">
              <img className='tranding-photo' src="./images/app/tranding3.png" alt="" />
              <p>New from Jordan</p>
            </div>
          </div>
        </div>

        <div className="shop-card">
          <img data-aos="fade-up" className='shop-photo' src="./images/app/shop1.png" alt="" />
          <img data-aos="fade-down" className='shop-photo' src="./images/app/shop2.png" alt="" />
        </div>

        <div className="popular-container">
          <h1>Popular right now</h1>
          <div className="popular-cards">
            <div data-aos="fade-up" className="popular-card">
              <img className='popular-photo' src="./images/app/popular1.png" alt="" />
              <div className="small-photos">
                <img className='popular-photo-small' src="./images/app/popular1.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular2.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular3.png" alt="" />
                <p>+12</p>
              </div>
              <p>Just In</p>
              <h3>Nike Tech Fleece Windrunner</h3>
              <h2>$145</h2>
            </div>
            <div data-aos="fade-down" className="popular-card">
              <img className='popular-photo' src="./images/app/popular2.png" alt="" />
              <div className="small-photos">
                <img className='popular-photo-small' src="./images/app/popular1.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular2.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular3.png" alt="" />
                <p>+12</p>
              </div>
              <p>Just In</p>
              <h3>Nike Tech Fleece Windrunner</h3>
              <h2>$145</h2>
            </div>
            <div data-aos="fade-up" className="popular-card">
              <img className='popular-photo' src="./images/app/popular3.png" alt="" />
              <div className="small-photos">
                <img className='popular-photo-small' src="./images/app/popular1.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular2.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular3.png" alt="" />
                <p>+12</p>
              </div>
              <p>Just In</p>
              <h3>Nike Tech Fleece Windrunner</h3>
              <h2>$145</h2>
            </div>
            <div data-aos="fade-down" className="popular-card">
              <img className='popular-photo' src="./images/app/popular4.png" alt="" />
              <div className="small-photos">
                <img className='popular-photo-small' src="./images/app/popular1.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular2.png" alt="" />
                <img className='popular-photo-small' src="./images/app/popular3.png" alt="" />
                <p>+12</p>
              </div>
              <p>Just In</p>
              <h3>Nike Tech Fleece Windrunner</h3>
              <h2>$145</h2>
            </div>
          </div>
        </div>

        {/* ---Dresses collection--- */}

        <div data-aos="flip-right" className="dresses-collection">
          <div data-aos="fade-right" className="collection-title">
            <h1>Dresses you’ll turn to again and again.</h1>
            <p>Here is your chance to upgrade your wardrobe
              with a variation of styles and fits
              that are both.</p>
            <div className="btn-groups">
              <button className='view-btn'>View Collection</button>
              <button className='buy-btn'>Buy Now</button>
            </div>
          </div>
          <img data-aos="zoom-in" className='collection-photo' src="./images/app/dresses.png" alt="" />
        </div>

        {/* ---Category-dress--- */}

        <div className="category-dress">
          <div className="featured">
            <h1>Featured</h1>
            <ul>
              <li><a href="#">Sneakers Model 1</a></li>
              <li><a href="#">Cotton Mix Coat</a></li>
              <li><a href="#">Black Crew Master</a></li>
              <li><a href="#">Reversible Jacket</a></li>
              <li><a href="#">Pegasus</a></li>
              <li><a href="#">Blazer</a></li>
            </ul>
          </div>
          <div className="shoes">
            <h1>Shoes</h1>
            <ul>
              <li><a href="#">All Shoes</a></li>
              <li><a href="#">Brutal Max</a></li>
              <li><a href="#">Running Shoes</a></li>
              <li><a href="#">Basketball Shoes</a></li>
              <li><a href="#">Custom Shoes</a></li>
              <li><a href="#">Sale Shoes</a></li>
            </ul>
          </div>
          <div className="clothing">
            <h1>Clothing</h1>
            <ul>
              <li><a href="#">All Clothing</a></li>
              <li><a href="#">Tops & T-Shirts</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Hoodies & Pullovers</a></li>
              <li><a href="#">Joggers & Sweatpants</a></li>
              <li><a href="#">Sports Bras</a></li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
