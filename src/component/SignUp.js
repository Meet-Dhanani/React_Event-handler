import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()

  const register = () => {
    let n = document.getElementById('name').value
    let e = document.getElementById('email').value
    let p = document.getElementById('pass').value
    let cp = document.getElementById('cpass').value

    if (!n || !e || !p || !cp) {
      alert('You must fill all detail in the form')
    }
    else {
      navigate('/login')
    }
  }

  return (
    <React.Fragment>

      <div className="container">
        <form>
          <h1>Sign Up</h1>
          <div>
            <label>Name</label><br />
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div>
            <label>Email</label><br />
            <input type="email" placeholder="Enter your email" id="email" />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" placeholder="Password" id="pass" />
          </div>
          <div>
            <label>Confirm Password</label><br />
            <input type="password" placeholder="Confirm password" id="cpass" />
          </div>
          <center>
            <button type="button" onClick={register}>Sign Up</button>
          </center>
          <div>
            <p>Already have an account ? <a href="/login">Sign In</a></p>
          </div>
        </form>
      </div >

    </React.Fragment >
  )
}

export default SignUp