import React, { useContext} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Face6Icon from "@mui/icons-material/Face6";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar(props) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <span className="navbarTitle">Connectverse</span>
        </div>
        <div className="navCenter">
          <div>
            <input
              placeholder="Search for friend, posts or videos"
              className="searchInput"
            ></input>
          </div>
          <SearchIcon />
        </div>
        <div className="navRight">
          <div className="navLinks">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
            <Link
                className={isLoggedIn ? "faceIconDont":"faceIconDisplay"}
                to={"/login"}
              >
                Login
              </Link>
            </span>
            <Link
                className={isLoggedIn ? "faceIconDisplay" : "faceIconDont"}
                to={"/chat"}
              >
                Chats
              </Link>
            <span>Timeline</span>

            <span>
              <Link
                className={isLoggedIn ? "faceIconDisplay" : "faceIconDont"}
                to={"/profile/"}
              >
                <Face6Icon />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
