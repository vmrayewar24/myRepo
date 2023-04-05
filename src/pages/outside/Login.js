import { useSearchParams} from "react-router-dom";
import { Auth } from 'aws-amplify';
import React, {Fragment, useState} from "react";

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  async function loginHandeler (){
    try {
        const user = await Auth.signIn(username, password);
        console.log('Userrrrrr', JSON.stringify(user));
        user.getSession((err,session) => {
          console.log('session.getIdToken()', session);
          // setToken(session.getIdToken().getJwtToken());
          setToken(session);
        });
        if(user.username){
          // history('/user-details');
          // window.location.reload();
          window.location.replace("/dashboard");
        }
        
    } catch (error) {
        console.log('error signing in', error);
    }

  }

  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return (
    <>
      <p></p>

      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          <h2 className="mt-3">Sign In</h2>
          <form className="mt-2">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setUserName(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={loginHandeler}
            >
              Sign In
            </button>
           
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </>
  );
};

export default Login;
