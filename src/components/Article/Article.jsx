import React from "react";
import "./Article.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Article(props) {
  return (
    <div className="gpt3__article-container">
      <div className="gpt3__article-image">
        <LazyLoadImage src={props.imgUrl} alt="blog-image" effect="blur" id="img"/>
      </div>
      <div className="gpt3__article-container_content">
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
        <p>read full article</p>
      </div>
    </div>
  );
}

export default Article;
