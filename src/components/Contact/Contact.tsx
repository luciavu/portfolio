import { FaEnvelope, FaGithub } from 'react-icons/fa';
import './Contact.scss';
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="heading">
        <h1 className="id">04</h1>
        <h1 className="name">Contact</h1>
      </div>

      <p>Feel free to contact me via:</p>
      <div className="options">
        <div className="option">
          <FaEnvelope className="icon" />
          <a href="mailto:luciavu6@outlook.com" className="link">
            luciavu6@outlook.com
          </a>
        </div>
        <div className="option">
          <FaGithub className="icon" />
          <a href="https://github.com/luciavu/" className="link" target="_blank">
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
