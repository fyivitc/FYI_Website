import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <footer className={`p-5 text-center relative`} id="footer">
      <h2 className={styles.footerHeadline}>Contact Us</h2>

      <hr className="border-0 h-0.5 bg-black my-5 relative" />

      <div
        className={`flex justify-around items-start pt-5 ${styles.responsive}`}
      >
        <form
          onSubmit={handleSubmit}
          className={`${styles.formContainer} ${styles.formTopMargin}`}
        >
          <div className="flex-1 space-y-1">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              className={styles.inputField}
            />
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              required
              className={styles.inputField}
            />
          </div>

          <div className="flex-1 space-y-1">
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              required
              className={styles.messageBox}
            ></textarea>
          </div>
        </form>

        <div className={`text-left ml-10 ${styles.customResponsiveness}`}>
          <h3 className={styles.followUs}>FOLLOW US OUT THERE</h3>
          <div className="flex space-x-4 items-center justify-start text-2xl">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>Copyright © FYI Club 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
