import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
              <div className="footer-name">
                <img src={assets.logo}  alt=""/>
                <h3>CraveCart</h3>
              </div>
                
                <p> CraveCart – Your Favorite Food, Delivered Fast!
CraveCart connects you with the best restaurants in town to bring your cravings to your doorstep. Whether you're in the mood for comfort food, local favorites, or something new, we've got you covered. Safe, quick, and delicious – every time.</p>
                <div className="footer-socialicons">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Courses</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="footer-right">
              <h2>Get In Touch</h2>
              <ul>
                <li>+91 98765432110</li>
                <li>enquiry@Cart.in</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p id="copy">Copyright 2025 ©  CraveCart. All rights reserved.</p>
    </div>
  )
}

export default Footer 