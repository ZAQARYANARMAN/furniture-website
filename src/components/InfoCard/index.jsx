import Button from "../Button";
import styles from "./style.module.css";
import { motion } from "framer-motion";

function InfoCard({ picture, title, text }) {
  return (
    <div className={styles.container}>
      <motion.img
        src={picture}
        alt="picture"
        initial={{ y: 0, opacity: 0, scale: "0.9400" }}
        whileInView={{ y: 0, opacity: 1, scale: "1" }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 2 }}
        width="100%"
        height="380px"
      />
      <motion.div
        src={picture}
        alt="picture"
        initial={{ y: 0, opacity: 0, scale: "0.7" }}
        whileInView={{ y: 0, opacity: 1, scale: "1" }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 2 }}
        className={styles.mainInfo}
      >
          <h3>{title}</h3>
          <p>{text}</p>
          <Button width="200px" height="50px" text="Learn more" />
      </motion.div>
    </div>
  );
}

export default InfoCard;
