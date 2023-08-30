import React from "react";
import "./Pfrightbar.css";

export default function Pfrightbar() {
  return (
    <div className="profileRightbar">
      <div className="profileRightbarWrapper">
        <ul className="pfList">
          <h2>User Information:</h2>
          <li className="pfListItem">City: Mumbai</li>
          <li className="pfListItem">Age: 19 years</li>
          <li className="pfListItem">College: Tsec</li>
          <li className="pfListItem">DOB: 28/11/2003</li>
        </ul>
      </div>
    </div>
  );
}
