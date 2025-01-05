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
        "service_6z8m6we",
        // "service_dm3vq2o", //(prashant20600310@gmail.com)
        "template_ljanetf",
        // "template_218yy5n",
        form.current,
        "tWtKYEDPBvF_bxa0G"
        // form.current,
        // "1GAhb9nuvEBc-gMfR"
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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5 style={{ textWrap: "wrap" }}>ishwortimalsina39@gmail.com</h5>
            <a
              href="mailto:ishwortimalsina39@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Ishwor Timalsina</h5>
            <a
              href="https://m.me/it.ishwortimalsina"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <FaLinkedin className="contact_option-icon" /> 
            <h4>LinkedIn</h4>
            <h5>Ishwor Timalsina</h5>
            <a
              href="https://www.linkedin.com/in/ishwortimalsina/" 
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
</article>

        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
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
