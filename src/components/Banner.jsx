import React, { useEffect, useState } from "react";
import "../styles/banner.css";
import Number from "./Number";
import { URL } from "../utils/url";
function Banner() {
    const [banner, setBanner] = useState(null)
    useEffect(()=> {
        getBanner()
    }, [])
    async function getBanner() {
        let fetchBanner = await fetch(`${URL}/about-us`)
        let json = await fetchBanner.json()
        setBanner(json.data[0])
    }
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
            <div className="banner__content">
                <h2>{banner?.title}</h2>
                <p>{banner?.description}</p>
                <a href="#!">{banner?.hyperlink}</a>
            </div>
            <div className="banner__img">
                <img width="600px" src={banner?.imageLink} alt="" />
            </div>
        </div>
        <div className="banner_number_wrapper">
        <Number/>  
        </div>
      </div>
    </section>
  );
}

export default Banner;
