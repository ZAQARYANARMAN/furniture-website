import styles from "./style.module.css";
import menuIcon from "../../assets/icons/menuIcon.png"
import { useState } from "react";
import { pandingPageLinkList } from "./data";
import SubTitle from "../../components/SubTitle";
import closeIcon from "../../assets/icons/closeIcon.png";

function Header() {
    const [openOrNoMenu, setOpenOrNoMenu] = useState(false);

    const handlerOpenMenu = () => setOpenOrNoMenu(prev => !prev);
    const handlerCloseMenu = () => setOpenOrNoMenu(prev => !prev);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>COMPANY NAME</h1>
            <div className={styles.linkList}>{ pandingPageLinkList }</div>
            <div className={styles.rightPart}>
                <img src={menuIcon} alt="menu" width="27px" height="27px" className={styles.menuIcon} onClick={handlerOpenMenu} />
            </div>
            <div className={openOrNoMenu ? styles.openMenuForTelephone : styles.closeMenuForTelephone}>
                <div className={styles.menuBlock}>
                    <SubTitle title="Menu" />
                    <img src={closeIcon} alt="close" width="27px" height="27px" onClick={handlerCloseMenu} className={styles.closeIcon} />
                </div>
                <div className={styles.menuForTelephoneLinkList} onClick={handlerCloseMenu}>{ pandingPageLinkList }</div>
            </div>
        </div>
    )
}

export default Header