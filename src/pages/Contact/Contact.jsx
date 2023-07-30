import React /* , { useState } */ from "react";
import "./Contact.css";

export default function Contact() {
  function form_submit(event) {
    event.preventDefault()
    const mail = "arkapravoghosh99@gmail.com"
    const form = document.getElementById("contact-form")
    const user_name = form.elements["user_name"].value
    const user_email = form.elements["user_email"].value
    const message = form.elements["message"].value
    window.open(`mailto:${mail}?subject=Message from ${user_name} (${user_email})&body=${message}`)
    form.reset();
  };
  return (
    <>
      <div className="bg" />
      <div className="Contact">
        <div className="Contact-Header">
          <h1>Contact Me</h1>
        </div>
        <div className="Contact-Body">
          <div className="Contact-Body-Left">
            <h2>Contact</h2>
            <p>
              <b>Email:</b>{" "}
              <a href="mailto:arkapravoghosh99@gmail.com" target="_blank" rel="noreferrer noopener">arkapravoghosh99@gmail.com</a>
            </p>
            <p>
              <b>Phone:</b>{" "}
              <a href="tel:+917003768803" target="_blank" rel="noreferrer noopener">+91 70037 68803</a>
            </p>
            <p>
              <b>WhatsApp:</b>{" "}
              <a href="https://wa.me/917003768803" target="_blank" rel="noreferrer noopener">+91 70037 68803</a>
            </p>
          </div>
          <div className="Contact-Body-Right">
            <h2>Get in Touch</h2>
            <form id="contact-form disable-select" onSubmit={form_submit}>
              <input type="hidden" name="contact_number" />
              <input type="text" placeholder="Name" name="user_name" />
              <input type="email" placeholder="Email" name="user_email" />
              <textarea placeholder="Message" name="message" />
              <input className="button" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
