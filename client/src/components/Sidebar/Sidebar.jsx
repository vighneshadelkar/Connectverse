import React, { useState, useEffect } from "react";
import Closefriends from "../Navbar/Closefriends";
import "./Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  RssFeed,
  Chat,
  Event,
  PlayCircle,
  Groups,
  Bookmark,
  Work,
} from "@mui/icons-material";

export default function Sidebar() {
  const [Users, setUsers] = useState();

  async function getData() {
    const res = await fetch("http://localhost:5000/users", {
      method: "GET",
    });

    const result = await res.json();

    setUsers(result);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className="sidebarIcon" />
            <span className="siderbarListitemText">Feed</span>
          </li>
          <li className="sidebarListitem">
            <Chat className="sidebarIcon" />
            <span className="siderbarListitemText">Chats</span>
          </li>
          <li className="sidebarListitem">
            <Event className="sidebarIcon" />
            <span className="siderbarListitemText">Events</span>
          </li>
          <li className="sidebarListitem">
            <PlayCircle className="sidebarIcon" />
            <span className="siderbarListitemText">Videos</span>
          </li>
          <li className="sidebarListitem">
            <Groups className="sidebarIcon" />
            <span className="siderbarListitemText">Groups</span>
          </li>
          <li className="sidebarListitem">
            <Bookmark className="sidebarIcon" />
            <span className="siderbarListitemText">Bookmark</span>
          </li>
          <li className="sidebarListitem">
            <Work className="sidebarIcon" />
            <span className="siderbarListitemText">Jobs</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr></hr>
        <ul className="closefriendsList">
          <h2>Close friends:</h2>
          {Users?.map((user) => {
            return (
              <div className="usersDisplay" key={user._id}>
                <AccountCircleIcon />
                <Closefriends className="friendList" {...user} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
