import Login from "./pages/Login-signup/Login";
import Signup from "./pages/Login-signup/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profilepage/Profile"
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React, { useMemo, useState } from "react";
import { AuthContext } from './context/AuthContext';
import Messanger from "./pages/Chat/Messanger"


function App() {

  const [AuthUser, setAuthUser] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const userMemo=useMemo(() => ({ AuthUser, setAuthUser, isLoggedIn, setisLoggedIn }), [ AuthUser, setAuthUser, isLoggedIn, setisLoggedIn ])

  return (
    <div className="App">
      <AuthContext.Provider value={userMemo}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={AuthUser?<Home/>:<Signup/>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/chat" element={<Messanger/>}></Route>
            <Route exact path="/register" element={<Signup />}></Route>
            <Route exact path="/profile/" element={<Profile />}></Route>
            <Route exact path="/home/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
