import React from "react";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";

function index() {
  return (
    <div className={styles.main}>
      {" "}
      {/* แก้ไขจาก div ซ้อน div เป็น main wrapper */}
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
          <p className={styles.subtitle}>Building amazing web experiences</p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>View Projects</button>
            <button className={styles.secondaryBtn}>Contact Me</button>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <h2>Tech Stack</h2>
        <div className={styles.skillGrid}>
          {["React", "Next.js", "TypeScript", "SCSS"].map((skill) => (
            <div key={skill} className={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
