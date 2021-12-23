import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function registered() {
    if (localStorage.getItem("registered")) {
      return true;
    } else return false;
  }
  function logOut() {
    localStorage.removeItem("registered");
    window.location.reload();
  }
  return (
    <div className="header">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/sign-in">Авторизация</NavLink>
      <NavLink to="/profile">Профиль</NavLink>
      {registered() ? <button className="btn btn-dark" onClick={() => logOut()}>ВЫХОД</button> : null}
    </div>
  );
};

export default Header;
