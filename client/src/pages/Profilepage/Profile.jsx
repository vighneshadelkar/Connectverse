import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import coverImg from "../../images/background.jpg";
import profilePic from "../../images/profilepic.jpg";
import Pfrightbar from "../../components/Pfrightbar/Pfrightbar";
import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { AuthUser,isLoggedIn } = useContext(AuthContext);
  // const [user, setuser] = useState({
  //   firstname:"Log In",
  //   lastname:""
  // });

  // if(isLoggedIn)
  // {
  //   setuser(AuthUser)
  // }

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <img src={coverImg} alt="coverimg" className="profileCoverImg" />
            <img src={profilePic} alt="profile" className="profilePic"></img>
            <span className="profileInfo">
              <h2 className="username">{AuthUser.firstname + " " +AuthUser.lastname}</h2>
              <span className="userInfo">Hello everyone!!</span>
            </span>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <hr></hr>
            <Pfrightbar />
          </div>
        </div>
      </div>
    </>
  );
}
