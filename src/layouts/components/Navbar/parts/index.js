import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";

export function Forsearch(props) {
  const [item, setItem] = useState("");

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    // Add your search logic here
  };

  return (
    <>
      <div className={styles.forsearchhide}>
        <div className={styles.container}>
          <div className={styles.navform}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </form>
            <button type="submit" className={styles.search}>
              найти
            </button>
          </div>
          <div className={styles.closeIcon} onClick={props.funk}>
            <IoClose />
          </div>
        </div>
      </div>      
    </>
  );
}

// Karzinka iconi bosilganda chiquvchi qismi
export function ForShopBacket() {
  return <div className={styles.myShop}></div>;
}
// navbar for demo
