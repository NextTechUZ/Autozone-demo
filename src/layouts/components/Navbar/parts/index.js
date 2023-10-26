import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import myAxios from '../../../../urlAPI'
import { useQuery } from "react-query";

export const rsArray = [];
const fetchData = ()=>{
  return myAxios.get(`/api/category?title=wqw`)
}

// Qidiruv iconi bosilganda ko`rinuvhci qismi
export function Forsearch(props) {
  // bu o`zgaruvchi qidiruvga berilgan qiymatni oladi
  const [item, setItem] = useState("");
  const {isloading, data, isError, error } = useQuery('category', fetchData)
  const p = data.data.data.categories;
  console.log(data.data.data.categories);
  rsArray.push(p)
  console.log(rsArray);

  const handleSearch = () => {};

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
            <button
              type="submit"
              onClick={() => handleSearch()}
              className={styles.search}
            >
              <Link to={`/search`} onClick={props.funk}>
                нaйти
              </Link>
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

// qidiruv tizimi tugashi

// Karzinka iconi bosilganda chiquvchi qismi
export function ForShopBacket() {
  return <div className={styles.myShop}></div>;
}
// navbar for demo
