import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Banner from "../components/Banner";
import AllServices from "../components/AllServices";
import Projects from "../components/Projects";
import Video from "../components/Video";


function HomePage() {
  return (
    <main>
      <Hero/>
      <Service/>
      <Banner/>
      <AllServices/>
      <Projects/>
      <Video/>
    </main>
  );
}

export default HomePage;
