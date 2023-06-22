import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./styles/App.scss";

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
