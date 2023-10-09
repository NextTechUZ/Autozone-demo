import React from "react";
import styles from "./footer-style.module.scss";
import { Link } from "react-router-dom";
import { UnityButton } from "../../../components/Button";
import logo from '../../../assets/images/logo.png'
import emailSubtract from '../../../assets/images/emailSubtract.png'
import Vector from '../../../assets/images/Vector.png'

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.firstPart}>
          <img
            src={logo}
            className={styles.logo}
          />
          <p>© 2019 PRO Auto.</p>
          <p>Все права защищены.</p>
        </div>
        <div className={styles.linkpart}>
          <p className={styles.foothead}>КОМПАНИЯ</p>
          <Link className={styles.foot}>О КОМПАНИИ</Link>
          <Link className={styles.foot}>ЛИЦЕНЗИИ</Link>
          <Link className={styles.foot}>ПАРТНЕРЫ</Link>
          <Link className={styles.foot}>ОТЗЫВЫ КЛИЕНТОВ</Link>
          <Link className={styles.foot}>РЕКВИЗИТЫ</Link>
          <Link className={styles.foot}>ВАКАНСИИ</Link>
        </div>
        <div className={styles.linkpart}>
          <p className={styles.foothead}>КАТАЛОГ</p>
          <Link className={styles.foot}>АККУМУЛЯТОРЫ</Link>
          <Link className={styles.foot}>АВТОМАСЛА</Link>
          <Link className={styles.foot}>АКСЕССУАРЫ</Link>
          <Link className={styles.foot}>АВТОХИМИЯ</Link>
        </div>
        <div className={styles.linkpart}>
          <p className={styles.foothead}>УСЛУГИ</p>
          <Link className={styles.foot}>ДИАГНОСТИКА АККУМУЛЯТОРА</Link>
          <Link className={styles.foot}>ПРИЕМ АККУМУЛЯТОРОВ</Link>
        </div>
        <div className={styles.linkpart}>
          <p className={styles.foothead}>ИНФОРМАЦИЯ</p>
          <Link className={styles.foot}>АКЦИИ</Link>
          <Link className={styles.foot}>НОВОСТИ</Link>
          <Link className={styles.foot}>СТАТЬИ</Link>
          <Link className={styles.foot}>ВОПРОС - ОТВЕТ</Link>
        </div>
        <div className={styles.forcontact}>
          <div>
            <img src={Vector}/> <p> +7 (342) 279-36-13</p>
          </div>
          <div>
           <img src={emailSubtract}/> <p> proauto59@yandex.ru </p>
          </div>
          <UnityButton nameButton="ЗАКАЗАТЬ ЗВОНОК"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
