import React from "react";
import styles from "./titles.module.scss";

// bu titlega props sarlavhaga head statega ma`lumot kiritish kerak
export function Titles(props) {
  return (
    <>
      <h2 className={styles.h2}>{props.head}</h2>
      <hr className={styles.hr} />
      <p className={styles.p}>{props.prgf}</p>
    </>
  );
}
