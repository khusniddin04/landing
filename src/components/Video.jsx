import React, { useEffect, useState } from "react";
import "../styles/video.css";
import { URL } from "../utils/url";
function Video() {
    const [videos, setVideos] = useState(null)
    useEffect(()=> {
        getVideos()
    }, [])
    async function getVideos() {
        let fetchData = await fetch(`${URL}/videos`)
        let json = await fetchData.json()
        setVideos(json.data[0])
    }
  return (
    <section className="video" style={{backgroundImage:`url(${videos?.imageLink})`}}>
      <div className="container">
        <h2>{videos?.title}</h2>
        <p>{videos?.description}</p>
        <div className="video__img">
        <iframe width="970" height="430" src={videos?.video} title="YouTube video player" FrameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ReferrerPolicy="strict-origin-when-cross-origin" AllowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
