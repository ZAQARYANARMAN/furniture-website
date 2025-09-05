import styles from "./style.module.css";
import { motion } from "framer-motion"

function Card({ picture, date, name, index }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, transform: index % 2 === 0 ? `translateY(20%)` : `translateY(40%)` }}
      whileInView={{ y: 0, transform: "translateY(0)", opacity: 1 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.7 }}
      className={styles.container}
    >
        <img src={picture} alt={name} width="100%" height="330px" />
        <p>{date}</p>
        <h6>{name}</h6>
    </motion.div>
  );
}

export default Card