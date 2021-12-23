import React from "react";
import UserList from "./components/UserList";
import BestFriendsList from "./components/BestFriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <h3>Список потенциальных друзей</h3>
          <UserList />
        </div>
        <div className="best_friends">
          <h3>Список лучших друзей</h3>
          <BestFriendsList />
        </div>
      </div>
    );
  }
}
export default App;
