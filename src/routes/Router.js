import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import Category from "../pages/Category";
import AddCategory from "../pages/AddCategory";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/category" element={<Category />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
