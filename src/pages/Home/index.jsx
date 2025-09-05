import styles from "./style.module.css";
import HomeTopPart from "../../ui/HomeTopPart";
import ShopCollections from "../../ui/ShopCollections";
import backgroundFuture from "../../assets/image/backgroundFuture.jpg";
import Button from "../../components/Button";
import { pandingInfoList } from "./data";

function Home() {
  return (
    <div className={styles.container}>
      <HomeTopPart />
      <ShopCollections />
      <div className={styles.decorativePart}>
        <img src={backgroundFuture} alt="future" width="100%" height="100%" />
        <h4>Bridging the Past, to the Future</h4>
        <Button width="300px" height="60px" text="Learn Our Philosopy" />
      </div>
      <div className={styles.infoContainer}>{ pandingInfoList }</div>
    </div>
  );
}

export default Home;