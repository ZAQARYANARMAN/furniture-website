import styles from "./style.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "./data";

function HomeTopPart() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000)
    return () => clearTimeout(timer);
  }, [index]);

  return (
      <div 
        className={styles.container} 
        style={{ position: "relative", overflow: "hidden" }}
      >
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="furniture"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
  );
}

export default HomeTopPart