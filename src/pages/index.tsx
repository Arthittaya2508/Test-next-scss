import React from "react";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function index() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
          <p className={styles.subtitle}>Building amazing web experiences</p>
          <div className={styles.buttonGroup}>
            <Link href="/test">
              {" "}
              {/* เพิ่ม Link และระบุ path ที่ต้องการ */}
              <button className={styles.primaryBtn}>View Projects</button>
            </Link>
            <Link href="/contact">
              <button className={styles.secondaryBtn}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
