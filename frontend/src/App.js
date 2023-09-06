import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupLogin from "./components/SignupLogin";
import Chats from "./components/Chats";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupLogin />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </>
  );
}

export default App;
