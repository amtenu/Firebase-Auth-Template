
import "../App.css";
import React, { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";
import LoginForm from "./LoginForm";
import HeroesList from "./HeroesList";
import AddHero from "./AddHero";

function RestOfApp() {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  return (
    <div className="App">{user ? "You are logged in!" : "not logged in "}
    <LoginForm/>
    <br/>
    <br/>
    <HeroesList/>
    <br/>
    <br/>
<AddHero/>
    </div>
  );
}

export default RestOfApp;
