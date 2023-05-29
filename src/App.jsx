import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './styles/App.css';
// import ReactGA from 'react-ga4';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

// const TRACKING_ID = "G-X56MMZ2G83";
// ReactGA.initialize(TRACKING_ID);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Ark-Portfolio" element={<NavBar />}>
      <Route path="/Ark-Portfolio" element={<Home />} />
      <Route path="/Ark-Portfolio/about" element={<About />} />
      <Route path="/Ark-Portfolio/portfolio" element={<Portfolio />} />
      <Route path="/Ark-Portfolio/contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <RouterProvider router={router} />
        <Footer />
      </React.Fragment>
    </div>
  );
}
