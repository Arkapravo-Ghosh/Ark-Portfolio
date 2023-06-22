import React from "react";
import "./styles/App.css";
// import ReactGA from "react-ga4";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter/AppRouter";

// const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
// ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};
