import React, { useEffect, useRef, useState } from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom'
import { URL } from '../utils/url'
function LoginPage() {
  let email_input = useRef()
  let password_input = useRef()
  let navigate = useNavigate()
  const [allUsers, setAllUsers] = useState(null)
  const [message, setMessage] = useState(false)
  useEffect(()=> {
    getUsers()
  }, [])
  async function getUsers() {
    let fetchUsers = await fetch(`${URL}/users`)
    let json = await fetchUsers.json()
    setAllUsers(json.data)
  }
  console.log(allUsers);
  function handleSubmit(e) {
    e.preventDefault()

    let user = allUsers.find((item)=> item.email === email_input.current.value)

    if(user?.password === password_input.current.value) {
      navigate(`/admin/${user._id}`)
    }else {
      navigate('/login')
      setMessage(true)
    }
  }
  return (
    <main>
      <section className='login'>
        <div className="container">
          <h1>Login</h1>
          <div className='form__wrapper'>
            <form onSubmit={(e)=>handleSubmit(e)} className='form' id='form'>
              <input ref={email_input} type="email" placeholder='email' />
              <input ref={password_input} type="text" placeholder='password' />
              <br />
              {message && <h4>Login yoki parol xato!!!</h4>}
              <button className='button' type='submit'>Login</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage