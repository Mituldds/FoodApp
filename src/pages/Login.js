import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Login.css";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";

  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("./home");
    } else {
      toast.error("Invalid Email or PassWord");
    }
  };

  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h2>Welcome to My Resturant</h2>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/signup">Signup !</Link>
            </p>
          </div>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
