import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Routeguard from "../components/Routeguard";
import Create from "../pages/Create";
import Edit from "../pages/Edit";

const Path = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Routeguard>
              <Dashboard />
            </Routeguard>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </>
  );
};

export default Path;
