import React from "react";
import "./Blog.css";
import images from "../../constants/images";
import placeholder from "../../constants/placeholder";
import Article from "../../components/Article/Article";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          a lot is happening, we are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={images.blog01}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={images.blog02}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={images.blog03}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={images.blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={images.blog05}
            date="sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
