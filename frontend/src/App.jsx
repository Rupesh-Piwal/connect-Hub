import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import Notifications from "./pages/notification/Notifications.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Sidebar from "./components/common/Sidebar.jsx";
import RightPanel from "./components/common/RightPanel.jsx";
import Toaster from "react-hot-toast";

const App = () => {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Notifications />} path="/notifications" />
        <Route element={<Profile />} path="/profile/:username" />
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  );
};

export default App;
