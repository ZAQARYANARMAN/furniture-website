import styles from "./style.module.css";
import { motion } from "framer-motion";

function Collection({ image, text, index }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, transform: `translateY(${index + 2}0%)` }}
      whileInView={{ y: 0, transform: "translateY(0)", opacity: 1 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 1.3 }}
      className={styles.collectionContainer}
    >
      <div className={styles.collectionContainer}>
        <img src={image} alt={text} width="100%" height="100%" />
        <h5>{text}</h5>
      </div>
    </motion.div>
  );
}

export default Collection;