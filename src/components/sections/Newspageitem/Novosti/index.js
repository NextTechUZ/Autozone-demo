import React from "react";
import styles from "./index.module.scss";
import firewal from "../../../../assets/images/firewal.png";
import aktiv from "../../../../assets/images/aktiv.svg";
import passiv from "../../../../assets/images/passiv.svg";
import { newsArray } from "../../../../db/newsevent/index";
import { useState } from "react";
import { UnityButton } from "../../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import myAxios from "../../../../urlAPI";
import { useQuery } from "react-query";

export default function Novosti() {
  const [tog, setTog] = useState(false);

  const { data, isLoading } = useQuery("news", async () => {
    const resp = await myAxios.get("/api/news");
    return resp.data.data.news;
  });

  console.log(data);
  return (
    <>
      <div className={styles.white}>
        <div>
          <p>ГЛАВНАЯ</p>
          <img src={firewal} />
          <p>ИНФОРМАЦИЯ</p>
        </div>
      </div>
      {/*  */}
      <div className={styles.mainN}>
        <div className={styles.nttl}>
          <p className={styles.tl}>НОВОСТИ</p>
          <p className={styles.pr}>
            Следите за новостями
            <small>
              <i> Pro auto </i>
            </small>
          </p>
        </div>
      </div>
      {/*  */}
      {tog ? (
        <Functionality ar={data} />
      ) : (
        <>
          <div className={styles.gr}>
            <div className={styles.gridContainer}>
              {}
              {data?.slice(0, 4).map((r) => (
                <div key={r._id}>
                  <img src={`${process.env.REACT_APP_API_URL}/images/${r.image}`} alt={r.title} />
                  <div className={styles.prga}>
                    <p className={styles.data}>{r.created.slice(0, 10)}</p>
                    <p className={styles.ttl}>{r.title}</p>
                    {r._id === "653e385471ea23b1969c5799" && (
                      <p className={styles.text}>{r.description}</p>
                    )}
                    {r._id === "653e385471ea23b1969c5799" ? (
                      <UnityButton
                        functionName={() => {
                          setTog(!tog);
                        }}
                        nameButton="ЧИТАТЬ ПОДРОБНЕЕ"
                      />
                    ) : (
                      <p
                        onClick={() => {
                          setTog(!tog);
                        }}
                      >
                        <FaArrowRightLong />
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.btn}>
            <UnityButton nameButton="ЕЩЕ БОЛЬШЕ НОВОСТЕЙ " />
          </div>
        </>
      )}
    </>
  );
}

function Functionality(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.items}>
      <div className={styles.infr}>
        <img src={`${process.env.REACT_APP_API_URL}/images/${props.ar[count].image}`} className={styles.infrimg} />
        <p className={styles.infrdata}>{props.ar[count].created.slice(0, 10)}</p>
        <p className={styles.infrtext}>{props.ar[count].description}</p>
      </div>
      <div className={styles.btnsgroup}>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 1);
          }}
          disabled={count === 0}
        >
          <img
            src={count === 0 ? passiv : aktiv}
            className={count !== 0 && styles.akt}
          />
          <p>ПРЕДЫДУЩИЕ</p>
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
          disabled={count === props.ar.length - 1}
        >
          <p>СЛЕДУЮЩИЕ</p>
          <img
            src={count === props.ar.length - 1 ? passiv : aktiv}
            className={count === props.ar.length - 1 && styles.akt}
          />
        </button>
      </div>
    </div>
  );
}
