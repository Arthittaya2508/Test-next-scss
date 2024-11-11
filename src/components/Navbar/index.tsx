import React from "react";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>MyLogo</div>
      <div className={styles.navItems}>
        <div className={styles.navItem}>Home</div>
        <div className={styles.navItem}>About</div>
        <div className={styles.navItem}>Contact</div>
      </div>
    </nav>
  );
}

export default Navbar;
