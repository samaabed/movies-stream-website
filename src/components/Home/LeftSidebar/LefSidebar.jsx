import styles from "./LeftSidebar.module.css";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

const LeftSidebar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={ styles.profileImage}>
      </div>
      <div className={styles.navigationIconsWraper}>
        <i className={"fa-solid fa-grip fa-2xl" + ' ' + theme}></i>
        <i className="fa-regular fa-compass fa-2xl" id={styles.compass}></i>
        <i className={"fa-regular fa-bookmark fa-2xl" + ' ' + theme}></i>
        <i className={"fa-regular fa-bell fa-2xl" + ' ' + theme}></i>
        <i className={"fa-regular fa-circle-play fa-2xl" + ' ' + theme}></i>
        <i className={"fa-solid fa-gear fa-2xl" + ' ' + theme}></i>
      </div>
      <div className={styles.friendsIconsWraper}>
        <div className={styles.friendIcon}></div>
        <div className={styles.friendIcon }></div>
        <div className={styles.friendIcon}></div>
        <div className={styles.addFriendButton}>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
      <div className={styles.logoutWraper}>
        <label className={styles.switch}>
          <input type="checkbox" onChange={toggleTheme} />
          <span className={styles.slider + ' ' + styles.round}></span>
        </label>

        <i
          className="fa-solid fa-arrow-right-from-bracket fa-lg"
          id={styles.logoutIcon}
        ></i>

      </div>
    </div>
  );
};

export default LeftSidebar;
