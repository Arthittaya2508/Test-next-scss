import React, { useState } from "react";
import dayjs from "dayjs";
import pluralize from "pluralize";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";

function Index() {
  const [count, setCount] = useState(1);
  const today = dayjs().format("DD MMMM YYYY");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.h1}>Dev ตัวจ๊อยสู้ๆ</h1>

      <div className={styles.dateSection}>
        <p>วันนี้วันที่: {today}</p>
      </div>

      <div className={styles.counterSection}>
        <p>
          คุณมี {count} {pluralize("click", count)}
        </p>
        <button className={styles.button} onClick={handleClick}>
          Click me!! pls
        </button>
      </div>
    </div>
  );
}

export default Index;
