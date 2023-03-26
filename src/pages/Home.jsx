import React from "react";
import Blog from "../containers/Blog/Blog";
import Features from "../containers/Features/Features";
import Header from "../containers/Header/Header";
import Whatgp3 from "../containers/WhatGp3/WhatGp3";
import Possibility from "../containers/Possibility/Possibility";
import Brand from "../components/Brand/Brand";
import Cta from "../components/Cta/Cta";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgp3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
    </>
  );
}

export default Home;
