import { useRef } from "react";
import Button from "../../components/Button";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { contactInfo, inputsList } from "./data";
import styles from "./style.module.css";
import { motion, useAnimation, useInView } from "framer-motion";

function Contact() {
  return (
    <div className={styles.container}>
      <Title title="CONTACT" />
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d84205.23900188181!2d44.5218816!3d40.1833984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sam!4v1756997988601!5m2!1sen!2sam"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0, transform: "translateY(0)" }}
        whileInView={{ y: 0, transform: "translateY(-10%)", opacity: 1 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.7 }}
        className={styles.contactContainer}
      >
        <div className={styles.leftSide}>
          <SubTitle title="Keep in touch" />
          <p>
            Please contact us over the phone or by email on the details below.
            Alternatively, fill out our contact form and we will come back to
            you as soon as possible.
          </p>
          <div className={styles.leftSideInfo}>
            {contactInfo.map((info, index) => (
              <div className={styles.leftSideInfoBlock} key={index}>
                <div>
                  <img src={info.icon} alt="icon" width="20px" height="20px" />
                </div>
                <h6>{info.info}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightSide}>
          {inputsList.map((element, index) => (
            <div className={styles.rightSideInpBlock} key={index}>
              <label htmlFor={`#inp${index}`}>{element.label}</label>
              <input
                type="text"
                style={{ height: element.height }}
                id={`$inp${index}`}
              />
            </div>
          ))}
          <Button width="99%" height="50px" text="SEND" />
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
