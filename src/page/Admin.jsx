import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/admin.css";
import { URL } from "../utils/url";
function Admin() {
  let id = useParams();
  const [allUsers, setAllUsers] = useState(null);
  const [ser, setSer] = useState(null);
  useEffect(() => {
    getUserId();
    getService();
  }, []);
  async function getUserId() {
    let fetchUsers = await fetch(
      "https://landing-page-backend-1.onrender.com/users"
    );
    let json = await fetchUsers.json();
    setAllUsers(json.data);
  }
  let user = allUsers?.find((item) => item._id === id.userID);
  // Hero boshlandi
  let hero_title = useRef();
  let hero_description = useRef();
  let hero_img = useRef();

  function heroSubmit(e) {
    e.preventDefault();
    let ready = {
      title: hero_title.current.value,
      description: hero_description.current.value,
      imageLink: hero_img.current.value,
    };
    console.log(ready);
    fetch(
      `${URL}/headers/666fd2a7047f1c41557d23f8`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ready),
      }
    );
  }
  // Hero tugadi
  // service boshlandi
  let ser_title = useRef();
  let ser_text = useRef();
  function handleService(e) {
    e.preventDefault();
    let ready = {
      description: ser_text.current.value,
      title: ser_title.current.value,
    };
    fetch(
      "https://landing-page-backend-1.onrender.com/services/666fdd54e522b23994263bd9",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ready),
      }
    );
  }
  let editform = useRef();
  let create_ser_title = useRef();
  let create_ser_text = useRef();
  let create_ser_img = useRef();
  let update_ser_img = useRef();
  let update_ser_title = useRef();
  let update_ser_text = useRef();
  const [serID, setSerID] = useState(null)
  function openEditForm(e) {
    editform.current.classList.add("open");
    setSerID(e.target.id)
  }
  function createSerCard(e) {
    e.preventDefault();
    let ready = {
      title: create_ser_title.current.value,
      description: create_ser_text.current.value,
      imageLink: create_ser_img.current.value,
    };
    fetch("https://landing-page-backend-1.onrender.com/content-services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ready),
    });
  }

  async function getService() {
    let fetchData = await fetch(
      "https://landing-page-backend-1.onrender.com/content-services"
    );
    let json = await fetchData.json();
    setSer(json.data);
  }
  console.log(ser);

  function delSerCard(e) {
    fetch(`${URL}/content-services/${e.target.id}`, {
      method:"DELETE"
    })
  }
  function editSerCard(e) {
    e.preventDefault()
    let ready = {
      title: update_ser_title.current.value,
      description: update_ser_text.current.value,
      imageLink: update_ser_img.current.value,
    };
    fetch(`${URL}/content-services/${serID}`, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ready),
    })
  }
  // service tugadi
  return (
    <main>
      <section>
        <div className="container">
          <div className="user__info">
            <h2>Welcome {user?.username}</h2>
            <h4>Email: {user?.email}</h4>
            <NavLink to="/users">Users</NavLink>
          </div>
          <form className="hero__form" onSubmit={(e) => heroSubmit(e)}>
            <h2>Headers</h2>
            <input ref={hero_title} type="text" placeholder="title" />
            <input
              ref={hero_description}
              type="text"
              placeholder="description"
            />
            <input ref={hero_img} type="text" placeholder="image" />
            <br />
            <button>Submit</button>
          </form>

          <form
            className="hero__form service_admin"
            onSubmit={(e) => handleService(e)}
          >
            <h2>Service</h2>
            <input ref={ser_title} type="text" placeholder="title" />
            <input ref={ser_text} type="text" placeholder="subtitle" />
            <button>Update</button>
          </form>

          <div className="service__wrapper">
            <form
              onSubmit={(e) => createSerCard(e)}
              className="service_card_create"
            >
              <h2>Service Card Create</h2>
              <input ref={create_ser_title} type="text" placeholder="title" />
              <input ref={create_ser_text} type="text" placeholder="text" />
              <input ref={create_ser_img} type="text" placeholder="image" />
              <button>create</button>
            </form>
            <div>
              <form onSubmit={(e)=>editSerCard(e)} ref={editform} className="service_card_update">
                <h2>Service Card Update</h2>
                <input ref={update_ser_title} type="text" placeholder="title" />
                <input ref={update_ser_text} type="text" placeholder="text" />
                <input ref={update_ser_img} type="text" placeholder="image" />
                <button>Update</button>
              </form>
            </div>
            <div className="get__card">
              {ser?.map((item) => {
                return (
                  <div className="ser_cards" key={item?._id}>
                    <h2>{item?.title}</h2>
                    <button id={item._id} onClick={(e)=>delSerCard(e)}>delete</button>
                    <button  id={item._id} onClick={(e) => openEditForm(e)}>update</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;
