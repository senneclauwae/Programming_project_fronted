import Dashboard from "./pages/admin/dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import AdminSideBar from "./components/AdminSideBar";
import NavBar from "./components/NavBar";
import Inventaris from "./pages/admin/inventaris";
import Gebruikers from "./pages/admin/gebruikers";
import "./App.css";
import Home from "./pages/user/home";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex">
      {!isAdminRoute && <NavBar />}
      {isAdminRoute && <AdminSideBar />}
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/inventaris" element={<Inventaris />} />
      <Route path="/gebruikers" element={<Gebruikers />} />
    </Routes>
  );
};

export default App;
