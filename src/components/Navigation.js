import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div>
           <NavLink to="/" activeClassName="selected" exact >Home</NavLink>
           <NavLink to="/history" activeClassName="selected">History</NavLink>
  
        </div>
   );
}

export default Navigation;