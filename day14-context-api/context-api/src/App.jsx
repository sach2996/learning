import React, { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { Dashboard } from "./components/Dashboard";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import './App.css'
//Lazy loading
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="loading...">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="loading...">
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  //this hook expects ocde inside browserrouter
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
