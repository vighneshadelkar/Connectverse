import React, { useEffect, useState } from "react";
import "./Conversation.css";

export default function Conversations({ conversations, currentUser }) {
  const [user, setUser] = useState({
    firstname: "",
  });

  useEffect(() => {
    const friendId = conversations.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      const res = await fetch("http://localhost:5000/users/" + friendId);
      const result = await res.json();

      if (!res) {
        console.log("error");
      }

      if (res) {
        setUser(result);
      }
    };
    getUser();
  }, [currentUser,conversations]);

  return (
    <div className="conversations">
      <div className="conversationsWrapper">
        <span>{user.firstname}</span>
      </div>
    </div>
  );
}
