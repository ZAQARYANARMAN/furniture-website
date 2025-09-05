import styles from "./style.module.css";

function SubTitle({ title }) {
    return (
        <h2 className={styles.title}>{ title }</h2>
    )
}

export default SubTitle