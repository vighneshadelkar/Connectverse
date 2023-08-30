import React from "react";

export default function Closefriends(props) {

  return (
    <div className="closefriends">
      {/* <span>{props.firstname} {props.lastname}</span> */}
      <span>{props?props.firstname:"Unknown User"}</span>
    </div>
  );
}
