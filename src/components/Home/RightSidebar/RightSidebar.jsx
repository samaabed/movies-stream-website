import styles from "./RightSidebar.module.css";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";


const RightSidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.mediaServicesSction}>
        <h2 className={styles.sidebarTitle + ' ' + theme}>media services</h2>
        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName + ' ' + theme}>apple tv</p>
        </div>
        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName + ' ' + theme}>disney tv</p>
        </div>

        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName + ' ' + theme}>hbo max tv</p>
        </div>

        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName + ' ' + theme}>hulu</p>
        </div>

        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName + ' ' + theme}>prime</p>
        </div>
      </div>
      <div className={styles.genreSection}>
        <h2 className={styles.sidebarTitle + ' ' + theme}>genre</h2>
         <p className={styles.genreName + ' ' + theme}>action</p>
         <p className={styles.genreName + ' ' + theme}>comedy</p>
         <div className={styles.genreContainer}>
            <p className={styles.genreName}>drama</p>
         </div>
         <p className={styles.genreName + ' ' + theme}>horror</p>

      </div>
    </div>
  );
};

export default RightSidebar;
