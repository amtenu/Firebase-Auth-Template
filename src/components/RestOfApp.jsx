
import "../App.css";
import React, { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";
import LoginForm from "./LoginForm";

function RestOfApp() {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  return (
    <div className="App">{user ? "You are logged in!" : "not logged in "}
    <LoginForm/>
    </div>
  );
}

export default RestOfApp;
