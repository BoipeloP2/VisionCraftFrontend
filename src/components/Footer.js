import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsFacebook,BsGoogle,BsTwitter } from "react-icons/bs";
import newsletter from "../images/newsletter.png"
import Contaier from "./Container";


const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder=" Your Email Address"
                  aria-label=" Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className="text-white fs-6">Hno: 528 Garrit Maritz Street,<br/> Pretoria North,<br/> 0182</address>
                <a href="tel:27 72 451 2457" className="text-white mt-3 d-block mb-2">Call: +27 72 451 2457</a>
                <a href="mailto:visiocraft@lab.io" className="text-white d-block mb-2 mt-3">visiocraft@lab.io</a>
                <div className="social_icons d-flex align-items-center gap-15">

                  <a href="https://www.facebook.com/visiocraft" target="_blank"><BsFacebook className="text-white fs-5"/></a>
                  <a href="https://www.google.com" target="_blank"><BsGoogle className="text-white fs-5"/></a>
                  <a href="https://www.twitter.com" target="_blank"><BsTwitter className="text-white fs-5"/></a>

                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1" to="refundpolicy">Refund Policy</Link>
                <Link className="text-white py-2 mb-1" to="shippingpolicy">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1" to="termsandconditions">Terms of Serivce</Link>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1" to="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Phones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Developed by OT Technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
