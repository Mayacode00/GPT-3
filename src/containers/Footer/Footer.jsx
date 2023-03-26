import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <Link to="/requests" id="request">
          request early access
        </Link>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>links</h4>
          <p>overons</p>
          <p>social media</p>
          <p>counters</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>company</h4>
          <p>terms & conditions</p>
          <p>privacy policy</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>social media</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
