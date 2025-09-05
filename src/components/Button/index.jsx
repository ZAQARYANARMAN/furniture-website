import styles from "./styles.module.css";

function Button({ width, height, text }) {
    return (
        <button style={{width: width, height: height}} className={styles.button}>{text}</button>
    )
}

export default Button