import React from 'react'
import { YELLOW_LOGO } from '../Utils/constants';
import { PAYMENT_URL } from '../Utils/constants';
import { android_img } from '../Utils/constants';
import { ios_img } from '../Utils/constants';

const Footer = () => {
  return (
    <footer className='onlyWeb'>
        <div className='main-container'>
            <div className='footer-primary'>
                <div className='footer-col'>
                    <p className='foot-list-text'>About Bewkoof</p>
                    <ul className='foot-menu-list'>
                        <li><a>Who we are</a></li>
                        <li><a>We're hiring</a></li>
                        <li><a>Terms & Condition</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <p className='foot-list-text'>Customer Service</p>
                    <ul className='foot-menu-list'>
                        <li><a>Contact us</a></li>
                        <li><a>Track Order</a></li>
                        <li><a>Return order</a></li>
                        <li><a>Cancel order</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <p className='foot-list-text'>Quick Links</p>
                    <ul className='foot-menu-list'>
                        <li><a>Offers</a></li>
                        <li><a>Sitemap</a></li>
                        <li><a>Brand Stores</a></li>
                        <li><a>Fanbook</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <p className='foot-list-text'>Get updates on your inbox</p>
                    <div className='subscribe-btn'>
                        <input type='text' placeholder='Enter your email address' />
                        <button className='commonYellowBtn'>Subscribe</button>
                    </div>
                    <div className='social-links'>
                        <ul>
                            <li><i class="fi fi-brands-facebook"></i><span>4.7M People Like this</span></li>
                            <li><i class="fi fi-brands-instagram"></i><span>1M Followers</span></li>
                            <li>
                                <ul className='flex-class'>
                                    <li><i class="fi fi-brands-twitter"></i></li>
                                    <li><i class="fi fi-brands-pinterest"></i></li>
                                    <li><i class="fi fi-brands-snapchat"></i></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-secondary'>
                <div className='left-panel'>
                    <div className='footer-logo'>
                        <img src={YELLOW_LOGO} alt='footer logo' />
                    </div>
                    <div>
                        <p className='copyright'><span><i class="fi fi-rs-truck-side"></i><a>15 days return policy*</a></span> |    <span><i class="fi fi-rr-money-bill-wave"></i></span><a>Cash On Delivery*</a></p>
                        <p className='copyright'>© 2023 Bewakoof Private Limited.All Right Reserved</p>
                    </div>
                </div>
                <div className='right-panel'>
                        <div className='paymentSection'><p className='copyright'>100% secure payment</p> <img src={PAYMENT_URL} /></div>
                        <div className='paymentSection'><p className='copyright'>Download the app </p>
                            <div className='downloadAppIcon'>
                                <a><img src={android_img} /></a>
                                <a><img src={ios_img} /></a>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer