import React, { useState, useEffect} from "react";
import { Person, ThumbUp } from "@mui/icons-material";
import "./Post.css";

export default function Post(props) {
  const [like, setlike] = useState(props.likes);
  const [isLiked, setisLiked] = useState(false);
  const [User, setUser] = useState({
    firstname:"Unknown User"
  });


  function handleLike() {
    setisLiked(!isLiked);
    setlike(isLiked ? like - 1 : like + 1);
  }

  async function getUsers(){
    let res = await fetch("http://localhost:5000/users",{
      method:"GET"
    });

    const result=await res.json();

    if(!res)
    {
      console.log("error");
    }
    else
    {
      setUser(result)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postUser">
            <Person />
            <span className="postName" >
              {(props.userId===User._id)?User.firstname:"Unknown User"}
            </span>
          </div>
          <span className="postTime">"mins ago"</span>
        </div>
        <hr></hr>
        <div className="postContent">
          <article className="postText">{props.text}</article>
        </div>
        <div className="postBottom">
          <div className="postBottomleft">
            <ThumbUp
              className={isLiked ? "postLiked" : "postNotLiked"}
              onClick={handleLike}
            />
            <span className="postLikecounter">{like} people liked</span>
          </div>
          <div className="postBottomright">
            <span className="postComments">{props.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
