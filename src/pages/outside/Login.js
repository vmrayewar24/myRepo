import { useSearchParams} from "react-router-dom";

const Login = () => {
  
  const loginHandeler = ()=>{
    alert("hiiii");

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
