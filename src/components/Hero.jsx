import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { URL } from "../utils/url";

function Hero() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getInfo();
  }, []);
  async function getInfo() {
    let fetchHero = await fetch(
      `${URL}/headers`
    );
    let json = await fetchHero.json();
    setData(json.data[0]);
  }
  console.log(data);
  return (
    <section className="hero" style={{backgroundImage:`url(${data?.imageLink})`}}>
      <div className="container">
        <div className="hero__title">
          <h4>{data?.title}</h4>
          <h1>{data?.description}</h1>
          <button>Our projects</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
