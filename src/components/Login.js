import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((pv) => {
      return { ...pv, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email: login.email,
        password: login.password,
      })
      .then((res) => {
        res.data();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <header className="card-header">
              <a
                href="./Signup"
                className="float-right btn btn-outline-primary mt-1"
              >
                Sign Up
              </a>
              <h4 className="card-title mt-2">Login</h4>
            </header>
            <article className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={login.email}
                    onChange={handleChange}
                  />
                  <small className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group">
                  <label>Create password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
                <small className="text-muted">
                  By clicking the 'Sign Up' button, you confirm that you accept
                  our <br /> Terms of use and Privacy Policy.
                </small>
              </form>
            </article>
            <div className="border-top card-body text-center">
              Have an account? <a href="./Signup">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
