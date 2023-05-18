import React, { useState } from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <div className="progress">
        <p>
          Development Still on Progress
        </p>
      </div>
      <div className="Contact-Header">
        <h1>Contact Me</h1>
      </div>
      <div className="Contact-Body">
        <div className="Contact-Body-Left">
          <h2>Contact</h2>
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:arkapravoghosh99@gmail.com" target="_blank">arkapravoghosh99@gmail.com</a>
          </p>
          <p>
            <b>Phone:</b>{" "}
            <a href="tel:+917003768803" target="_blank">+91 70037 68803</a>
          </p>
          <p>
            <b>WhatsApp:</b>{" "}
            <a href="https://wa.me/917003768803" target="_blank">+91 70037 68803</a>
          </p>
        </div>
        <div className="Contact-Body-Right">
          <h2>Get in Touch</h2>
        </div>
      </div>
    </div>
  );
};
