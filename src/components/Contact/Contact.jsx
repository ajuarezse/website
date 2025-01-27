import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [showFallback, setShowFallback] = useState(false);
  const email = "ajuarez.se@gmail.com";

  const handleEmailClick = (e) => {
    e.preventDefault();

    window.location.href = `mailto:${email}`;

    setTimeout(() => {
      setShowFallback(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard: " + email);
      })
      .catch(() => {
        alert("Unable to copy email. Please manually copy: " + email);
      });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact__header">Where to now?</h1>
      <h2 className="contact__sub-header">Get in Touch</h2>
      <p className="contact__text">
        I'm eager to connect with talented individuals/teams and explore
        exciting new projects. Let's collaborate and create something amazing!
        Feel free to reach out – I'm always open to new opportunities.
      </p>
      <a
        href="mailto:ajuarez.se@gmail.com"
        className="contact__button"
        onClick={handleEmailClick}
      >
        Say Hi!
      </a>
      {showFallback && (
        <p className="contact__fallback">
          Couldn't open your email client?{" "}
          <button onClick={handleCopyEmail}>Copy email address</button>
        </p>
      )}
    </section>
  );
}

export default Contact;
