import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import propTypes from "prop-types";
import NavLinks from "../NavBar/NavLinks";

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location}>
        {
          Object.values(NavLinks).map((link, index) => (
            <Route
              key={`route_${index}`}
              path={link.to}
              element={<MotionRouteWrapper element={link.element} />}
            />
          ))
        }
      </Routes>
    </AnimatePresence>
  );
};

function MotionRouteWrapper({ element }) {
  MotionRouteWrapper.propTypes = {
    element: propTypes.element.isRequired,
  };
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {element}
    </motion.div>
  );
};
