import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import myAxios from "../../../../urlAPI";
import { useQuery } from "react-query";
import firewal from '../../../../assets/images/firewal.png'

const fetchData = (v = "wqw") => {
  return myAxios.get(`/api/category?title=${v}`);
};

function SearchResults({ nf }) {
  const { data, isError, isLoading, isFetching } = useQuery("category", () =>
    fetchData(nf)
  );
  if (data) {
    const rs = data.data.data.categories;
    return (
      <>
        {rs.map((r, index) => (
          <div className={styles.cd} key={index}>
            <img src={r.image} />
            <div>
              <p>{r.title}</p>
              <p>ЗАО МПКФ "Алькор" Россия, г. Тюмень</p>
              <button>ПОДРОБНЕЕ</button>
            </div>
          </div>
        ))}
      </>
    );
  }

  // if (isFetching) {
  //   return <div>Fetching...</div>;
  // }

  if (isError) {
    return <div>Not found product</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
}

export function Forsearch() {
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
          <div className={styles.closeIcon}>
            <IoClose />
          </div>
        </div>
      </div>
      <div className={styles.whiteline}>
        <p>ГЛАВНАЯ</p>
        <img src={firewal}/>
        <p className={styles.prg}>ПОИСК</p>
      </div>
      <div className={styles.srttl}>
        <p>ПОиск</p>
        <p>Результаты поиска</p>
      </div>
      <div className={styles.cdpart}><SearchResults nf={item} /></div>
    </>
  );
}

// Karzinka iconi bosilganda chiquvchi qismi
export function ForShopBacket() {
  return <div className={styles.myShop}></div>;
}
// navbar for demo
