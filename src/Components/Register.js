import React from 'react'

function Register() {
  return (
   <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ali P</title>
  <link rel="stylesheet" href="/css/styles.css" />
  <div className="login-page">
    <div className="form">
      <form className="register-form" method="POST">
        <h2>Register</h2>
        
        <a className="btn" href="#">
          <span />
          <span />
          <span />
          <span />
          Create
        </a>
        <p className="message">Already registered? <a href="#">Sign In</a></p>
      </form>
      <form className="login-form" method="post">
        <h2> Register </h2>
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="E-mail" required />
        <input type=" Number" placeholder="Phone NO " required />
        <input type="text" placeholder="Address" required />
        <input type="password" placeholder="Password" required />
        <a className="btn" href="#">
          <span />
          <span />
          <span />
          <span />
          Submit
        </a>
      
      </form>
    </div>
  </div>
</div>

  )
}

export default Register
