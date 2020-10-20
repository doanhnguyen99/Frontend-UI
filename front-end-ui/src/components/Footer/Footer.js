import React from 'react';
import './Footer.css';


const Footer = () => {

    return (
        <div class="container-fluid footer-main">

        <div class="footer-email container-fluid">
        <div class="row">
            <div>
            Sign up to Newsletter
            </div>
            <div class="footer-input-address">
            <input type="text" placeholder="Enter your email address"/>
            <button>Subcribe</button>
            </div>
        </div>
        </div>

        <div class="row">
        
        <div class="col-lg-2 col-md-4 col-sm-6">
            <h3 class="footer-title">Information</h3>
            <div class="footer-content">
                <ul class="footer-list">
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="contact.html">Terms & Conditions</a></li>
                <li><a href="login.html">FAQs</a></li>
                <li><a href="login.html">Return Policy</a></li>
                </ul>
            </div>
        </div>
        
        <div class="col-lg-2 col-md-4 col-sm-6">
            <h3 class="footer-title">Customer Service</h3>
            <div class="footer-content">
                <ul class="footer-list">
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="wishlist.html">Wish List</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Gift Certificates</a></li>
                </ul>
            </div>
        </div>
        
        <div class="col-lg-2 col-md-4 col-sm-6">
            <h3 class="footer-title">Extras</h3>
            <div class="footer-content">
                <ul class="footer-list">
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Gift Certificates</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">Specials</a></li>
                    <li><a href="#">Site Map</a></li>      
                </ul>
            </div>
        </div>
        
        <div class="col-lg-2 col-md-4 col-sm-6">
            <h3 class="footer-title">My Account</h3>
            <div class="footer-content">
                <ul class="footer-list">
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="wishlist.html">Wish List</a></li>
                    <li><a href="#">Newsletter</a></li>
                </ul>
            </div>
        </div>
        
        <div class="col-lg-4 col-md-8 col-sm-12">
            <image class="footer-logo" src="image/footer_logo.png"/>
            <div class="footer-contact">
            <image src="image/footer_hear.png"/>
            <div>
                Got questions? Call us 24/7!<br/>
                <b>(800) 8001-8588, (0600) 874 548</b>
            </div>
            </div>
            <div>
            <div><b>Contact info</b></div>
            <div>17 Princess Road, London, Greater London NW1 8JR, UK</div>
            </div>
            
            <ul class="social-footer">
            <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
        
        <div class="footer-end">
            © 2020 Copy right by Lorem
        </div>
        </div>
  </div>
    )
} 

export default Footer;