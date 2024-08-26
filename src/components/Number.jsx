import React, { useEffect, useState } from "react";
import { URL } from "../utils/url";

function Number() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    getNumber();
  }, []);

  async function getNumber() {
    let fetchNumber = await fetch(
      `${URL}/about-us_number`
    );
    let json = await fetchNumber.json();
    setNumber(json.data);
  }
  return (
    <div className="numbers">
      {number?.map((item) => {
        return (
          <div className="number__card" key={item?._id}>
            <div>
              <img width={100} src={item?.imageLink} alt="" />
              <h4>{item?.numbers}</h4>
            </div>
            <span>{item?.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Number;
