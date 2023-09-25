import React  from "react";
import styles from './footer-style.module.css'
import { Link } from "react-router-dom";
import {BsTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"

export function Footer(){


    return(
        <footer>
            <div className={styles.container}>
                <div className={styles.firstPart}>
                    <img src="https://cdn.vectorstock.com/i/preview-1x/43/85/auto-service-logo-template-vector-38214385.jpg" className={styles.logo} />
                    <p>© 2019 PRO Auto.</p> 
                    <p>Все права защищены.</p>
                </div>
                <div className={styles.secondPart}>
                    <p className={styles.foothead}>КОМПАНИЯ</p>
                    <Link className={styles.foot}>О КОМПАНИИ</Link>
                    <Link className={styles.foot}>ЛИЦЕНЗИИ</Link>
                    <Link className={styles.foot}>ПАРТНЕРЫ</Link>
                    <Link className={styles.foot}>ОТЗЫВЫ КЛИЕНТОВ</Link>
                    <Link className={styles.foot}>РЕКВИЗИТЫ</Link>
                    <Link className={styles.foot}>ВАКАНСИИ</Link>
                </div>
                <div className={styles.thirdPart}>
                    <p className={styles.foothead}>КАТАЛОГ</p>
                    <Link className={styles.foot}>АККУМУЛЯТОРЫ</Link>
                    <Link className={styles.foot}>АВТОМАСЛА</Link>
                    <Link className={styles.foot}>АКСЕССУАРЫ</Link>
                    <Link className={styles.foot}>АВТОХИМИЯ</Link>
                </div>
                <div className={styles.fourthPart}>
                    <p className={styles.foothead}>УСЛУГИ</p>
                    <Link className={styles.foot}>ДИАГНОСТИКА АККУМУЛЯТОРА</Link>
                    <Link className={styles.foot}>ПРИЕМ АККУМУЛЯТОРОВ</Link>
                </div>
                <div className={styles.fivePart}>
                    <p className={styles.foothead}>ИНФОРМАЦИЯ</p>
                    <Link className={styles.foot}>АКЦИИ</Link>
                    <Link className={styles.foot}>НОВОСТИ</Link>
                    <Link className={styles.foot}>СТАТЬИ</Link>
                    <Link className={styles.foot}>ВОПРОС - ОТВЕТ</Link>
                </div>
                <div className={styles.sixPart}>
                    <div> <BsTelephoneFill /> <p> +7 (342) 279-36-13</p></div>
                    <div> <GrMail /> <p> proauto59@yandex.ru </p></div>
                    <button className={styles.red}>ЗАКАЗАТЬ ЗВОНОК</button>
                </div>
            </div>
        </footer>
    )
}