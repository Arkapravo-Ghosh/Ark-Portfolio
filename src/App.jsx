import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './styles/App.css';
// import AnimatedCursor from 'react-animated-cursor';
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
  /*
  const outerAlpha = 0.3;
  const innerSize = 13.5;
  const outerSize = 13.5;
  const outerScale = 6;
  const innerScale = 0.8;
  const trailingSpeed = 8;
  const innerStyle = { backgroundColor: 'var(--inner-cursor-color)' };
  const outerStyle = { backgroundColor: 'var(--outer-cursor-color)' };
  const clickables = ['.Home-Button', '.social-icon'];
  */

  return (
    <div className="App">
      {/* <AnimatedCursor
        outerAlpha={outerAlpha}
        innerSize={innerSize}
        outerSize={outerSize}
        outerScale={outerScale}
        innerScale={innerScale}
        trailingSpeed={trailingSpeed}
        innerStyle={innerStyle}
        outerStyle={outerStyle}
        clickables={clickables}
      /> */}
      <React.Fragment>
        <RouterProvider router={router} />
        <Footer />
      </React.Fragment>
    </div>
  );
}
