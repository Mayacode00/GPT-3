import React from "react";
import "./Possibility.css";
import images from "../../constants/images";
import placeholder from "../../constants/placeholder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <LazyLoadImage
          src={images.possibility}
          effect="blur"
          alt="possibility"
          id="img"
        />
      </div>
      <div className="gpt3__possibility-content">
        <h4>requst early access to get started</h4>
        <h1 className="gradient__text">
          the possibilities are beyond our imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>request early access to get started</h4>
      </div>
    </div>
  );
}

export default Possibility;
