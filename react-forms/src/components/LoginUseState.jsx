import { useState } from "react";

export default function Login() {

  const [emailEntered,setEmailEntered] = useState('');
  const [passwordEntered,setPasswordEntered] = useState('');

  const emailIsInvalid =  emailEntered !== '' && !emailEntered.includes('@');
  function handleEmailChange(event){    
    setEmailEntered(event.target.value);
  }

  function handlePassword(event){
    setPasswordEntered(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("Submitted!!!");
    console.log('Email:'+emailEntered);
    console.log('Password:'+passwordEntered);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmailChange} value={emailEntered}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter valid email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handlePassword} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
