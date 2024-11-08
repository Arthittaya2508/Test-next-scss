import React from "react";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <div className={styles.nav}>
      <nav>
        <div className={styles.logo}>MyLogo</div>
        <div className={styles["nav-item"]}>Home</div>
        <div className={styles["nav-item"]}>About</div>
        <div className={styles["nav-item"]}>Contact</div>
      </nav>
    </div>
  );
}

export default Navbar;
