import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  const login = () => {
    let n = document.getElementById('lemail').value
    let e = document.getElementById('lpass').value

    if (!n || !e) {
      alert('You must fill all detail in the form')
    }
    else {
      navigate('/dashboard')
    }
  }

  return (
    <React.Fragment>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <div>
            <label>Email</label><br />
            <input type="email" placeholder="Enter your email" id="lemail" />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" placeholder="Password" id="lpass" />
          </div>
          <center>
            <a className='fpass' href='/fpass'>Forgotpassword?</a>
          </center>
          <center>
            <button type="button" onClick={login}>Sign In</button>
          </center>
          <div>
            <p>Don't have an account ? <a href='/'>Sign Up</a></p>
          </div>
        </form>
      </div>

    </React.Fragment>
  )
}

export default Login