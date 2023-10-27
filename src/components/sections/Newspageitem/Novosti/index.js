import React from "react";
import styles from "./index.module.scss";
import firewal from "../../../../assets/images/firewal.png";
import aktiv from "../../../../assets/images/aktiv.svg";
import passiv from "../../../../assets/images/passiv.svg";
import { newsArray } from "../../../../db/newsevent/index";
import { useState } from "react";
import { UnityButton } from "../../../Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Novosti() {
  const [tog, setTog] = useState(false);

  return (
    <>
      <div className={styles.white}>
        <div>
          <p>ГЛАВНАЯ</p>
          <img src={firewal} />
          <p>ИНФОРМАЦИЯ</p>
        </div>
      </div>
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
      {tog ? (
        <Functionality />
      ) : (
        <>
          <div className={styles.gr}>
            <div className={styles.gridContainer}>
              {newsArray.slice(0, 4).map((r) => (
                <div key={r.id}>
                  <img src={r.img} alt={r.title} />
                  <div className={styles.prga}>
                    <p className={styles.data}>{r.data}</p>
                    <p className={styles.ttl}>{r.title}</p>
                    {r.id === 1 && <p className={styles.text}>{r.text}</p>}
                    {r.id === 1 ? (
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

function Functionality() {

  const [count, setCount] = useState(0);

  return (
    <div className={styles.items}>
      <div className={styles.infr}>
        <img src={newsArray[count].img} className={styles.infrimg}/>
        <p className={styles.infrdata}>{newsArray[count].data}</p>
        <p className={styles.infrtext}>{newsArray[count].text}</p>
      </div>
      <div className={styles.btnsgroup}>
        <button onClick={()=>{setCount((prevCount) => prevCount - 1)}} disabled={count===0}>
          <img src={count === 0 ? passiv : aktiv} className={count !== 0&&styles.akt}/>
          <p>ПРЕДЫДУЩИЕ</p>
        </button>
        <button onClick={()=>{setCount((prevCount) => prevCount + 1)}} disabled={count===newsArray.length-1}>
          <p>СЛЕДУЮЩИЕ</p>
          <img src={count === newsArray.length - 1 ? passiv : aktiv} className={count===newsArray.length-1&&styles.akt}/>
        </button>
      </div>
    </div>
  );
}
