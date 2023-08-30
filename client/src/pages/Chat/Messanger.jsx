import React, { useContext, useEffect, useState } from "react";
import "./Messanger.css";
import Messages from "../../components/Messages/Messages";
import Rightbar from "../../components/Rightbar/Rightbar";
import { AuthContext } from "../../context/AuthContext";
import Conversations from "../../components/Conversations/Conversations";
import Navbar from "../../components/Navbar/Navbar";

import io from 'socket.io-client';
const socket = io('http://localhost:9000');

export default function Messanger() {
  const { AuthUser } = useContext(AuthContext);
  const [messages, setmessages] = useState("");
  const [currentChat, setcurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);

  const [user, setuser] = useState(AuthUser);
  
  console.log(messages)
  // useEffect(() => {
  //   async function getMessages() {
  //     let requestOptions = {
  //       method: "GET",
  //       redirect: "follow",
  //     };

  //     const res = await fetch(
  //       "http://localhost:5000/message/" + currentChat?._id,
  //       requestOptions
  //     );

  //     const result = await res.json();

  //     if (res) {
  //       setmessages(result);
  //     }
  //   }
  //   getMessages();
  // }, [currentChat]);

  useEffect(()=>{
    socket.on("connection",()=>{
      socket.emit("getMessages",{currentChat})
      
    })

    socket.on("getMessages",(payload)=>{
      setmessages([payload])
    })
  },[])

  useEffect(() => {
    async function getConversations() {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        `http://localhost:5000/conversation/${user._id}`,
        requestOptions
      );
      const result = await res.json();

      if (res) {
        setConversations(result);
      }
    }
    getConversations();
  }, [user]);


  return (
    <div className="Messanger">
      <Navbar />
      <div className="MessangerWrapper">
        <div>
          <input
            type="Search"
            placeholder="Search for friends"
            className="conversatiosInput"
          ></input>
        </div>
        {conversations?.map((c) => {
          return (
            <div
              className="okay"
              key={c._id}
              onClick={(c) => setcurrentChat(c)}
            >
              {console.log(c)}
              <Conversations conversations={c} currentUser={AuthUser} />
            </div>
          );
        })}
        <div className="chatbox">
          {currentChat ? (
            <>
              <div className="messangerTop">
                {messages.map((m) => {
                  return <Messages key={m._id} messages={messages} />;
                })}
              </div>
              <div className="messangerBottom">
                <form >
                  <input type="text"></input>
                  <button>Send</button>
                </form>
              </div>
            </>
          ) : (
            <p>Join conversation </p>
          )}
        </div>
        <Rightbar />
      </div>
    </div>
  );
}
