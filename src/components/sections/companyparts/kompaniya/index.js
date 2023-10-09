import React from "react";
import styles from "./index.module.scss";
import Group32 from "../../../../assets/images/Group32.png";
import Group33 from "../../../../assets/images/Group33.png";
import Rectangle53 from "../../../../assets/images/Rectangle53.png";

export default function Kamp() {
  return (
    <div className={styles.kamp}>
      <div className={styles.wel}>
        <div className={styles.container}>
          <div className={styles.titl}>
            <h2>о компании</h2>
          </div>
          {/* axborot qismi */}
          <div className={styles.ichki}>
            <div className={styles.parag}>
              <img src={Rectangle53} className={styles.rec} />
              <div>
                <p>Мы рады приветствовать вас на нашем сайте.</p>
                <p>
                  Компания «PROавто» - это надежные, качественные аккумуляторы в
                  широком ассортименте, разнообразные в по форме и
                  характеристикам, а также качественные масла и автохимия
                  именитых брендов
                </p>
                <p>
                  Сеть магазинов «PROавто» более 20-и лет занимается продажей
                  автомобильных аккумуляторов, масел, расходных материалов,
                  химией и аксессуаров. Мы зарекомендовали себя как надежная
                  компания, специалисты которой всегда готовы проконсультировать
                  по любому вопросу: от подбора автощёток, до рекомендаций по
                  подбору аккумулятора для Вашего автомобиля. Мы дорожим своей
                  репутацией и даём гарантию на весь ассортимент продукции,
                  представленной на нашем сайте!
                </p>
                <p>Убедитесь в этом сами!</p>
              </div>
            </div>
            {/* axborot qismini tugashi */}
            {/* xabarlar qismi */}
            <div className={styles.msg}>
              <div>
                <img src={Group32} className={styles.msgimg} />
                <p>Реквизиты</p>
              </div>
              <div>
                <img src={Group33} className={styles.msgimg} />
                <p>Задать вопрос</p>
              </div>
            </div>
            {/* Xabarlar qismini tugashi */}
          </div>
        </div>
      </div>
    </div>
  );
}
