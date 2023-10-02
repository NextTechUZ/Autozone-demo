import React from 'react'
import styles from './index.module.scss'
import {RiCustomerService2Fill} from 'react-icons/ri'
import '../../../styles/globals.scss'
import { SavolBerish } from '../../../components/Button'
import faceimgg from '../../../assets/images/faceimgg.png'
import smile from '../../../assets/images/smile.png'
import { Titles } from '../../../layouts/components/Titles'

export default function Services() {
  return (
    <>
    <div className={styles.services}>
        <div className={styles.title}> 
            {<Titles head='услуги' prgf='Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.'/>}
        </div>
        <div className={styles.container}>
            <div className={styles.servisecTool}>
                    <div className={styles.active}>
                        <div className={styles.img}><RiCustomerService2Fill/></div>
                        <div className={styles.titles}>
                        <p><i>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</i></p>
                        <p>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </p>
                        </div>
                    </div>
                    <div className={styles.forhover}>
                        <div className={styles.img}><RiCustomerService2Fill/></div>
                        <div className={styles.titles}>
                        <p><i>ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</i></p>
                        <p>Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!</p>
                        </div>
                    </div>
                    <div className={styles.forhover}>
                        <div className={styles.img}><RiCustomerService2Fill/></div>
                        <div className={styles.titles}>
                        <p><i>БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</i></p>
                        <p>Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!</p>
                        </div>
                    </div>
            </div>
            <div className={styles.crushImg}>
                <img src={faceimgg}/>
            </div>
        </div>
        <div className={styles.question}>{<SavolBerish/>}</div>
    </div>
    </>
  )
}


export function Kampaniya(){
    
    return(
        <div>
            <div className={styles.kampaniya}>
                <div className={styles.opacity}>
                    <Titles head='о компании'/>
                    <div className={styles.info}>
                        <img src={smile} className={styles.smile}/>
                        <div className={styles.parag}>
                            <p>
                                Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в 
                               «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор 
                               именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается 
                               продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров.
                            </p>
                            <button>УЗНАТЬ БОЛЬШЕ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}