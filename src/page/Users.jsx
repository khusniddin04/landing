import React, { useEffect, useReducer, useState } from "react";
import "../styles/users.css";
import { NavLink } from "react-router-dom";
import { URL } from "../utils/url";

function Users() {
  const [users, setUsers] = useState(null);
    const [forseUpdate, setForseUptade] = useReducer(x=>x+1)
  useEffect(() => {
    getUsers();
  }, [forseUpdate]);
  async function getUsers() {
    let fetchData = await fetch(
      `${URL}/users`
    );
    let json = await fetchData.json();
    setUsers(json.data);
  }

    async  function deleteUser(e) {
    await fetch(`${URL}/users/${e.target.id}`, {
        method:"DELETE" 
    })
    setForseUptade()
  }

  return (
    <div className="users__wrapper">
        <NavLink to="/">Home</NavLink>
      {users?.map((item) => {
        return (
          <div className="user__card">
            <div>
              <h4>{item?.username}</h4>
              <span>{item?.email}</span>
            </div>
            <div className="user_card_btn">
              <button id={item._id} onClick={(e)=>deleteUser(e)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
