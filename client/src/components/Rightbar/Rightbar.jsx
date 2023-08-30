import React, { useEffect, useState } from "react";
import Closefriends from "../Navbar/Closefriends";
import "./Rightbar.css";
import rightbarimg from "../../images/rightbarimg.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';

export default function Rightbar() {
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
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="rightbarExtra">
          <CardGiftcardTwoToneIcon className="gift" />
          <article>Mihir Adelkar and 3 others have birthday today.</article>
        </div>
        <img src={rightbarimg} alt="rhtimg" className="rightbarimg" />
        <ul className="onlineFriendlist">
          <h2> Online Users:</h2>
          {Users?.map((user) => {
            return (
              <div className="usersDisplay" key={user._id}>
                <AccountCircleIcon />
                <Closefriends {...user} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
