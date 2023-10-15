import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";

// Qidiruv iconi bosilganda ko`rinuvhci qismi
export function Forsearch(props) {
  // bu o`zgaruvchi qidiruvga berilgan qiymatni oladi
  const [item, setItem] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    alert(item);
  };

  return (
    <div className={styles.forsearchhide}>
      <div className={styles.container}>
        <div className={styles.navform}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
            <button type="submit" onSubmit={()=>{handleSearch()}}  className={styles.search}>
              нaйти
            </button>
        </div>
        <div className={styles.closeIcon} onClick={props.funk}>
          <IoClose />
        </div>
      </div>
    </div>
  );
}

// qidiruv tizimi tugashi

// Karzinka iconi bosilganda chiquvchi qismi

export function ForShopBacket() {
  return <div className={styles.myShop}></div>;
}

// navbar for demo
