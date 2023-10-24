import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import myAxios from "../../../../urlAPI";

// Qidiruv iconi bosilganda ko`rinuvhci qismi
export function Forsearch(props) {
  // bu o`zgaruvchi qidiruvga berilgan qiymatni oladi
  const [item, setItem] = useState("");

  const handleSearch = () => {
    alert(item);
    myAxios
      .get("/api/category")
      .then((res) => console.log(res.data.data))
      .catch(console.error());
  };

  return (
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
          <button
            type="submit"
            onClick={() => handleSearch()}
            className={styles.search}
          >
            <Link to={"/search"}>нaйти</Link>
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
