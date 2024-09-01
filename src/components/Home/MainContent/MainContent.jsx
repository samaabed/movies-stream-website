import styles from "./MainContent.module.css";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.upperRow}>
        <div className={styles.leftImage}>
          <div className={styles.imageTrend}>
            <p>#1 in series</p>
            <i className="fa-solid fa-fire fa-sm"></i>
          </div>
          <div className={styles.imageText}>
            <p>squid game</p>
            <p>2021</p>
          </div>
        </div>

        <div className={styles.rightImage}>
          <div className={styles.imageRating}>
            <i className="fa-solid fa-star fa-xs"></i>
            <p>4.2</p>
          </div>
          <div className={styles.imageText}>
            <p>catching killers</p>
            <p>2021</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.continueWatching}>
          <div className={styles.continueWatchingTitle}>
            <p className={theme}>
              coninue watching <span>(3 movies remaining)</span>
            </p>
            <button className={theme}>see more</button>
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
          </div>
        </div>

        <div className={styles.sideImage}></div>
      </div>
    </>
  );
};

export default MainContent;
