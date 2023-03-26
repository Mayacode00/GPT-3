import React from "react";
import "./Brand.css";
import images from "../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Brand() {
  return (
    <div className="gpt3__brand section__padding" id="brand">
      <div>
        <LazyLoadImage
          src={images.google}
          alt="google"
          effect="blur"
          id="img"
        />
      </div>
      <div>
        <LazyLoadImage src={images.slack} alt="slack" effect="blur" id="img" />
      </div>
      <div>
        <LazyLoadImage
          src={images.atlassian}
          alt="gatlassian"
          effect="blur"
          id="img"
        />
      </div>
      <div>
        <LazyLoadImage
          src={images.dropbox}
          alt="dropbox"
          effect="blur"
          id="img"
        />
      </div>
      <div>
        <LazyLoadImage
          src={images.shopify}
          alt="shopify"
          effect="blur"
          id="img"
        />
      </div>
    </div>
  );
}

export default Brand;
