import styles from "./style.module.css";
import Title from "../../components/Title";
import { pandingCardList } from "./data";

function Project() {
  return (
    <div className={styles.container}>
      <Title title="PROJECTS" />
      <div className={styles.projectContainer}>
        <h5>VIEW</h5>
        <div className={styles.projectList}>{ pandingCardList }</div>
      </div>
    </div>
  );
}

export default Project;