import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import placeholder from "../../constants/placeholder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          let’s build something amazing with GPT-3 openAI
        </h1>
        <p>
          yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="enter your email" />
          <button type="button">
            <Link>get started</Link>
          </button>
        </div>
        <div className="gpt3__header-content__people">
          <LazyLoadImage
            src={images.people}
            effect="blur"
            alt="people"
            id="img"
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <LazyLoadImage
          src={images.ai}
          effect="blur"
          alt="ai"
          id="img"
          placeholder={placeholder.ai}
        />
      </div>
    </div>
  );
}

export default Header;
