import "./App.css";
import { Routes, Route } from "react-router-dom";

import SignupLogin from "./components/SignupLogin";
import Chats from "./components/Chats";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <>
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<SignupLogin />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </>
  );
}

export default App;
