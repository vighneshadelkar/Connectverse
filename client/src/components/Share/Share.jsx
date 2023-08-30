import React, { useContext, useState } from "react";
import "./Share.css";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {
  const {AuthUser} = useContext(AuthContext);
  const [user, setuser] = useState(AuthUser)
  const [Post, setPost] = useState({
    text:""
  });

  

  function handleInput(event) {
    let userId,firstname;
    setPost((prev) => {
      return {
        ...prev,
        [userId]: user._id,
        [firstname]:AuthUser.firstname,
        [event.target.name]: event.target.value,
      };
    });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/post/${AuthUser._id}`, {
      method: "POST",
      body: JSON.stringify(Post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setPost({
      text:""
    })
  };


  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <form onSubmit={handleSubmit}>
            <input
              name="text"
              className="postTextInput"
              placeholder="Share your thoughts...."
              value={Post.text}
              onChange={handleInput}
              required
            />
            <button className="uploadButton">Upload</button>
          </form>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
