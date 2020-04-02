import React from "react";
import { Link } from "react-router-dom";
import wizBot from '../../images/wizBot.png';
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <Link className="navbar-brand" to="/">
        <img src={wizBot} alt="wizbot logo"/>
        Buzzer.io
        </Link>
    </nav>
  );
}

export default Nav;
