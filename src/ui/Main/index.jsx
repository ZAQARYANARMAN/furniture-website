import { Route, Router, Routes } from "react-router-dom";
import styles from "./style.module.css";
import Home from "../../pages/Home";
import Project from "../../pages/Project";
import Contact from "../../pages/Contact";
import ScrollToTop from "../../components/ScrollToTop";

function Main() {
  return (
    <div className={styles.container}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default Main;
