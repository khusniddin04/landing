import React, { useEffect, useState } from "react";
import "../styles/service.css";
import { URL } from "../utils/url";
function Service() {
  const [service, setService] = useState(null);

  useEffect(() => {
    getService();
  }, []);

  async function getService() {
    let fetchService = await fetch(
      `${URL}/services`
    );
    let json = await fetchService.json();
    setService(json.data[0]);
  }
  console.log(service);
  return (
    <section className="service">
      <div className="container">
        <h2>{service?.title}</h2>
        <p className="service__text">{service?.description}</p>
        <div className="service__wrapper">
          {service?.content_ref_id?.map((item) => {
            return (
              <div className="service__card" key={item._id}>
                <img src={item?.imageLink} alt="" />
                <div>
                  <h4>{item?.title}</h4>
                  <p>{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="service_btn">
            <button>Все услуги</button>
        </div>
      </div>
    </section>
  );
}

export default Service;
