import React, { useRef } from "react";
import "../styles/register.css";
import { URL } from "../utils/url";
function Register() {
  let name_input = useRef();
  let phone_input = useRef();
  let email_input = useRef();
  let password_input = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let ready = {
      username: name_input.current.value,
      phone_number: phone_input.current.value,
      email: email_input.current.value,
      password: password_input.current.value,
      imageLink: "https://picsum.photos/100/100",
    };
    fetch(`${URL}/users/`, {
      method:"POST",
      headers:{
        "Content-type":"Application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  return (
    <main>
      <section className="register">
        <div className="container">
          <h2>Register</h2>
          <div className="form__wrapper">
            <form id="form" onSubmit={(e) => handleSubmit(e)}>
              <input ref={name_input} id="name" type="text" placeholder="Username" />
              <br />
              <input ref={phone_input} id="phone" type="number" placeholder="Phone" />
              <br />
              <input ref={email_input} id="email" type="email" placeholder="Email" />
              <br />
              <input
                id="password"
                ref={password_input}
                type="text"
                placeholder="Password"
              />
              <br />
              <button className="button" type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
