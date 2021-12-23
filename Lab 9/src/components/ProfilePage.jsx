import React from "react";
import { Redirect } from "react-router-dom";

const ProfilePage = () => {
  function registered() {
    if (localStorage.getItem("registered")) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="profile">
      {registered() ? <Redirect to="/" /> : null}
      <p className="lead">Логин: {localStorage.getItem("login")}</p>
      <p className="lead">Пароль: {localStorage.getItem("password")}</p>
    </div>
  );
};

export default ProfilePage;
