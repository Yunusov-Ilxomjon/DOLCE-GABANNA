import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">

        <div className="company">
          <h1>Company</h1>
          <p>Find location nearest to you:</p>
          <p>See Our Stores</p>
          <a href="tel:+998991234567">+998 99 123 45 67</a>
          <p>hello@mail.com</p>
        </div>

        <div className="company">
          <h1>Information</h1>
          <p>My account</p>
          <p>Log In</p>
          <p>My Cart</p>
          <p>Wishlist</p>
        </div>

        <div className="company">
          <h1>Services</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
        </div>

        <div className="subscribe">
          <h1>Subscribe</h1>
          <p>
            Enter your e-mail below to be the first
            to know about new collections and product
            launches.
          </p>

          <div className="email-input">
            <span className="icon">✉</span>

            <input type="email" placeholder="Your Email" />

            <button className="arrow-btn">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h12M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="footer-social">
        <h1>© Company 2024</h1>

        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/footer/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/footer/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/footer/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/footer/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
