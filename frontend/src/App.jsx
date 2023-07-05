import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="page">
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
