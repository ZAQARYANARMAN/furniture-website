import SubTitle from "../../components/SubTitle";
import { pandingCollectionsList } from "./data"
import styles from "./style.module.css";

function ShopCollections() {
    return (
        <div className={styles.container}>
            <SubTitle title="SHOP OUR COLLECTIONS" />
            <p className={styles.text}>The importance of heritage, locality, and sustainability is the grounding vision for Eastern Edition.</p>
            <div className={styles.collectionsList}>{ pandingCollectionsList }</div>
        </div>
    )
}

export default ShopCollections