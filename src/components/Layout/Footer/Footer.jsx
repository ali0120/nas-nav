import React from 'react'
import logo from './../../../images/footer/logo.svg'
import arrow from './../../../images/footer/arrow.svg'
import facebook from './../../../images/footer/socialMedia/facebook.svg'
import linkedIn from './../../../images/footer/socialMedia/linked-in.svg'
import instagram from './../../../images/footer/socialMedia/instagram.svg'
import twitter from './../../../images/footer/socialMedia/twitter.svg'
import cash from './../../../images/footer/payment/cash.png'
import visa from './../../../images/footer/payment/visa.png'
import masterCard from './../../../images/footer/payment/master-card.png'
import ourLogo from './../../../images/footer/nasnav-logo.svg'

import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_container">
          <div className="info">
            <img src={logo} alt='logo' />
            <div className="paragraph_container">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p>
              <p> m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>
            </div>
          </div>
          <div className="contact-us">
            <h4>
              Subscribe to our newsletter
            </h4>
            <form>
              <input type="search" placeholder="Enter Your Mail" />
              <button type="submit">
                Subscribe
                <img src={arrow} alt="arrow icon" />
              </button>
            </form>
            <div className="links_container">
              <ul className="website_links">
                <li>
                  <Link to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Sell With Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Shipping And Returns
                  </Link>
                </li>
              </ul>
              <ul className="social_links">
                <li>
                  <Link to='/'>
                    <div>
                      <img src={facebook} alt="facebook" />
                      <p>/YESHTERY</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div>
                      <img src={linkedIn} alt="facebook" />
                      <p>/YESHTERY</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div>
                      <img src={instagram} alt="facebook" />
                      <p>/YESHTERY</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div>
                      <img src={twitter} alt="facebook" />
                      <p>/YESHTERY</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cobyright">
          <p> &copy; {new Date().getFullYear()} yeshtery, all rights reserved.</p>
          <div className="payments">
            <img src={cash} alt="cash payment" />
            <img src={visa} alt="visa payment" />
            <img src={masterCard} alt="master Card payment" />
          </div>
          <div className="Powered">
            <p>Powered By</p>
            <img src={ourLogo} alt="nas nav logo" />
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer