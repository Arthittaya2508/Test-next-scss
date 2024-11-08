import React from "react";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";

function index() {
  return (
    <div>
      <div className="{styles.container}">
        <Navbar />
        <h1>Dev ตัวจ๊อยสู้ๆ</h1>
        <button className={styles.button}>Click me!!</button>
      </div>
    </div>
  );
}

export default index;
