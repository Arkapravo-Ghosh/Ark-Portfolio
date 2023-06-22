import React from "react";
import { Routes, Route } from "react-router-dom";
import NavLinks from "../NavBar/NavLinks";

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(NavLinks).map((link) => (
        <Route key={link.to} path={link.to} element={link.element} />
      ))}
    </Routes>
  );
};
