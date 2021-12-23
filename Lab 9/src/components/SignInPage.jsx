import React from "react";

class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("registered", true);
  }

  render() {
    return (
      <div className="mainform">
        <div className="form">
          <form action="">
            <div class="mb-3">
            <input placeholder="login" className="form-control" type="text" name="" id="login" />
            </div>
            <div class="mb-3"></div>
            <input placeholder="password" className="form-control" type="text" name="" id="password" />
            <div class="mb-3">
            <button className="btn btn-dark" onClick={() => this.register()}>OK</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInPage;
