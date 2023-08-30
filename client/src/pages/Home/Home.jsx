import React from "react";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <hr></hr>
        <Rightbar />
      </div>
    </>
  );
}
