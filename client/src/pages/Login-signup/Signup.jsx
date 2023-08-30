import React, { useContext, useState } from "react";
import signupLogo from "../../images/Signup.png";
import "../Login-signup/Signup.css";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

export default function Signup() {
  const navigate = useNavigate();

  const [registerData, setregisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setregisterData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const { setAuthUser, isLoggedIn, setisLoggedIn } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!res.ok) {
      console.error();
    } else {
      setisLoggedIn(true);
      setAuthUser(result);
      setregisterData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  setTimeout(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, 100);

  return (
    <div className="signup">
      <Navbar/>
      <div className="signupWrapper">
        <div className="signupImgDiv">
          <img src={signupLogo} alt="img" className="signupImg"></img>
        </div>
        <div className="signupForm">
          <div className="formWrapper">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="signupFirstname">Firstname</label>
              <input
                type="text"
                className="signupItem"
                id="signupFirstname"
                name="firstname"
                value={registerData.firstname}
                onChange={handleInput}
                required
              />

              <label htmlFor="signupLastname">Lastname</label>
              <input
                type="text"
                className="signupItem"
                id="signupLastname"
                name="lastname"
                value={registerData.lastname}
                onChange={handleInput}
              />

              <label htmlFor="signupEmail">Email</label>
              <input
                type="email"
                className="signupItem"
                id="signupEmail"
                name="email"
                value={registerData.email}
                onChange={handleInput}
                required
              />

              <label htmlFor="signupPass">Password</label>
              <input
                type="password"
                className="signupItem"
                id="signupPass"
                name="password"
                value={registerData.password}
                onChange={handleInput}
                required
              />
              <button className="signupSubmit">Register</button>
            </form>
            <article>
              Already have a account?
              <Link to="/login">Log In</Link>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
