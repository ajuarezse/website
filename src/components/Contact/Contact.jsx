import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__header">Where to now?</h1>
      <h2 className="contact__sub-header">Get in Touch</h2>
      <p className="contact__text">
        I'm eager to connect with talented individuals/teams and explore
        exciting new projects. Let's collaborate and create something amazing!
        Feel free to reach out – I'm always open to new opportunities.
      </p>
      <a href="mailto:ajuarez.se@gmail.com" className="contact__button">
        Say Hi!
      </a>
    </section>
  );
}

export default Contact;
