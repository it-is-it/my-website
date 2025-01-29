import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tel1he2",
        "template_cq2h1wl",
        form.current,
        "r0yJg7mHl2oc4iI3T"
      )
      .then(
        (result) => {
          toast.success("Email sent Successfully");
        },
        (error) => {
          toast.error("Error sending email");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact space">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="left">
          <a
            href="mailto:ishwortimalsina39@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact_option"
          >
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5 className="email-text">ishwortimalsina39@gmail.com</h5>
            <p>Send a Mail</p>
          </a>

          <a
            href="https://m.me/it.ishwortimalsina"
            target="_blank"
            rel="noreferrer"
            className="contact_option"
          >
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Ishwor Timalsina</h5>
            <p>Send a Message</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ishwortimalsina/"
            target="_blank"
            rel="noreferrer"
            className="contact_option"
          >
            <FaLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Ishwor Timalsina</h5>
            <p>Connect on LinkedIn</p>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
