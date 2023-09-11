import React, { useState, useContext } from "react";
import signupLogo from "../../images/Signup.png";
import "../Login-signup/Signup.css";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const { AuthUser, setAuthUser, isLoggedIn, setisLoggedIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleInput(event) {
    const { name, value } = event.target;
    setloginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!res.ok) {
      setisLoggedIn(false);
      console.error();

    } else {
      setAuthUser(result);
      setisLoggedIn(true);
      setloginData({
        email: "",
        password: "",
      });
    }
  };

  console.log(AuthUser);

  setTimeout(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, 100);

  return (
    <div className="signup">
      <Navbar />
      <div className="signupWrapper">
        <div className="signupImgDiv">
          <img src={signupLogo} alt="img" className="signupImg"></img>
        </div>
        <div className="signupForm">
          <div className="formWrapper">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="signupEmail">Email</label>
              <input
                type="email"
                className="signupItem"
                id="signupEmail"
                name="email"
                value={loginData.email}
                onChange={handleInput}
                required
              />

              <label htmlFor="signupPass">Password</label>
              <input
                type="password"
                className="signupItem"
                id="signupPass"
                name="password"
                value={loginData.password}
                onChange={handleInput}
                required
              />
              <button className="signupSubmit">Register</button>
            </form>
            <article>
              Dont have a account?
              <Link to="/register">Register</Link>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
