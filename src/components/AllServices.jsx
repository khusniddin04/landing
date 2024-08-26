  import React, { useEffect, useState } from "react";
import "../styles/allservices.css";
import { URL } from "../utils/url";
function AllServices() {

  const [allservice, setAllService] = useState()

  useEffect(()=> {
    getAllService()
  }, [])

  async function getAllService() {
    let fetchData = await fetch(`${URL}/all-services`)
    let json = await fetchData.json()
    setAllService(json.data[0])
  }

  return (
    <section className="allServices">
      <div className="container">
        <div className="allServices__content">
            <h2>{allservice?.title}</h2>
            <button className="button">Все услуги</button>
        </div>
        <div className="allServices__wrapper">
            {allservice?.card_ref_id.map((item)=> {
              return (
                <div className="allServices__card" key={item._id}>
                  <img width={300} src={item?.imageLink} alt="" />
                  <h4>{item?.title}</h4>
                  <p>{item?.description}</p>
                  <a  href="#!">{item?.referal}</a>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  );
}

export default AllServices;
