import React from 'react'
import styles from './index.module.scss'
import '../../../styles/globals.scss'
import { UnityButton } from '../../../components/Button'
import smile from '../../../assets/images/smile.png'
import { Titles } from '../../../layouts/components/Titles'
import original2 from '../../../assets/images/original2.png'
import Subtract from '../../../assets/images/Subtract.png'
import hira1 from '../../../assets/images/hira1.png'
import hira2 from '../../../assets/images/hira2.png'
import hira3 from '../../../assets/images/hira3.png'
import Polygon6 from '../../../assets/images/Polygon6.png'
import Polygon3 from '../../../assets/images/Polygon3.png'
import Rectangle41 from '../../../assets/images/Rectangle41.png'
import Rectangle42 from '../../../assets/images/Rectangle42.png'
import Rectangle43 from '../../../assets/images/Rectangle43.png'
import Rectangle44 from '../../../assets/images/Rectangle44.png'
import Rectangle45 from '../../../assets/images/Rectangle45.png'
import Rectangle46 from '../../../assets/images/Rectangle46.png'

export  function Services() {
  return (
    <>
    <div className={styles.services}>
        <div className={styles.title}> 
            {<Titles head='услуги' prgf='Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.'/>}
        </div>
        <div className={styles.container}>
            <div className={styles.servisecTool}>
                    <div className={styles.active}>
                        <div className={styles.img}>
                            <svg className={styles.ico} xmlns="http://www.w3.org/2000/svg" width="85" height="94" viewBox="0 0 85 94" fill="none">
                                <path d="M21 40V44C21 46.7614 23.2386 49 26 49H38" stroke="white" stroke-width="4"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2123 54.6695L56.0658 52.5918L57.443 55.0116L61.7382 62.5585L58.2618 64.537L55.3438 59.41L47.7191 67.9572L47.743 67.9822L47.6858 68.044L54.3228 75.6898L51.3022 78.3119L44.952 70.9965L38.1342 78.3597L35.1991 75.6421L42.257 68.0196L33.9346 59.2733L30.7096 64.5856L27.2904 62.5099L31.8719 54.963L33.2285 52.7285L35.0304 54.6222L44.9525 65.0497L54.2123 54.6695Z" fill="white" fill-opacity="0.5"/>
                                <path d="M11.6565 72.7907C6.01374 78 3.42748 87.5504 3 92H45L29.6107 64C25.8702 64.5426 17.2992 67.5814 11.6565 72.7907Z" stroke="white" stroke-width="4"/>
                                <path d="M60.3893 64C64.1298 64.5426 72.7008 67.5814 78.3435 72.7907C79.5275 73.8837 80.5769 75.1678 81.5 76.5559L66.5 92H45L60.3893 64Z" stroke="white" stroke-width="4"/>
                                <path d="M27.8922 25.8906C27.4559 16.142 35.2417 8 45 8C54.7583 8 62.5441 16.142 62.1078 25.8906L61.3246 43.3897C60.9338 52.1217 53.7407 59 45 59C36.2593 59 29.0662 52.1217 28.6754 43.3897L27.8922 25.8906Z" stroke="white" stroke-width="4"/>
                                <path d="M27.5 25C27.5 25 31.7884 19.5199 36.8448 18.3243C44.4712 16.5209 44.181 22.6617 55.3448 26.3317C58.078 27.2302 62 27 62 27" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.9206 34.1516C73.0182 31.7329 72.2945 29.4714 70.9978 27.6363C70.8176 12.4893 59.3921 0 45 0C30.9108 0 19.6647 11.9691 19.0284 26.6835C17.2618 28.658 16.2315 31.2952 16.3468 34.1516L16.3684 34.688C16.6036 40.5167 21.5193 45.0512 27.3481 44.816L27.1868 40.8193C23.5654 40.9654 20.5113 38.1481 20.3652 34.5268L20.3435 33.9903C20.1974 30.369 23.0147 27.3148 26.6361 27.1687L26.4748 23.1719C25.3751 23.2163 24.3215 23.4273 23.3372 23.7796C25.1745 12.4349 34.2888 4 45 4C55.8103 4 64.9941 12.5918 66.7119 24.0954C65.5117 23.5534 64.1893 23.2283 62.7926 23.1719L62.6314 27.1687C66.2528 27.3148 69.07 30.369 68.9239 33.9903L68.9023 34.5268C68.7561 38.1481 65.702 40.9654 62.0806 40.8193L61.9194 44.816C67.7481 45.0512 72.6638 40.5167 72.899 34.688L72.9206 34.1516Z" fill="white"/>
                                <rect x="38.0026" y="45.8909" width="10.6774" height="6.24404" rx="3.12202" transform="rotate(0.400125 38.0026 45.8909)" stroke="white" stroke-width="4"/>
                            </svg>
                        </div>
                        <div className={styles.titles}>
                            <p><i>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</i></p>
                            <p>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </p>
                        </div>
                    </div>
                    <div className={styles.active}>
                        <div className={styles.img}>
                            <div className={styles.tosvg}>
                            <svg  className={styles.kml1} xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32926 12L39.9993 12V8L7.32901 8L12.241 2.72627L9.31401 0L1.26965 8.63673L7.62939e-06 9.99987L1.26965 11.363L9.31401 19.9997L12.241 17.2735L7.32926 12Z" fill="white"/>
                            </svg>
                            <svg className={styles.akml} xmlns="http://www.w3.org/2000/svg" width="76" height="48" viewBox="0 0 76 48" fill="none">
                                <rect x="2" y="10" width="72" height="36" stroke="white" stroke-width="4"/>
                                <rect x="20" y="2" width="36" height="8" stroke="white" stroke-width="4"/>
                                <rect opacity="0.5" x="6" y="4" width="6" height="6" stroke="white" stroke-width="4"/>
                                <rect opacity="0.5" x="64" y="4" width="6" height="6" stroke="white" stroke-width="4"/>
                            </svg>
                            <svg className={styles.kml2} xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6701 12L0 12V8L32.6703 8L27.7583 2.72627L30.6853 0L38.7297 8.63673L39.9993 9.99987L38.7297 11.363L30.6853 19.9997L27.7583 17.2735L32.6701 12Z" fill="white"/>
                            </svg>
                            </div>
                        </div>
                        <div className={styles.titles}>
                            <p><i>ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</i></p>
                            <p>Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!</p>
                        </div>
                    </div>
                    <div className={styles.active}>
                        <div className={styles.img}>
                            <div className={styles.inside}>
                                <img src={Rectangle42}/>
                                <img src={Rectangle43}/>
                                <img src={Rectangle44}/>
                                <img src={Rectangle45}/>
                                <img src={Rectangle46}/>
                            </div>
                            <img src={Rectangle41}/>
                        </div>
                        <div className={styles.titles}>
                            <p><i>БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</i></p>
                            <p>Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!</p>
                        </div>
                    </div>
            </div>
            <div className={styles.crushImg}>
                <img src={original2} className={styles.curt}/>
                <img src={hira1} className={styles.hira1}/>
                <img src={Subtract} className={styles.subtract}/>
                <img src={hira2} className={styles.hira2} />
                <img src={hira3} className={styles.hira3} />
                <img src={Polygon3} className={styles.Polygon3} />
                <img src={Polygon6} className={styles.Polygon6} />
            </div>
        </div>
        <div className={styles.question}><UnityButton nameButton="ЗАДАТЬ ВОПРОС"/></div>
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
                            <UnityButton nameButton="УЗНАТЬ БОЛЬШЕ"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Showbottom(){
    return(
        <>
            <div className={styles.headbottom}>
                <div className={styles.container}> 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="132" height="81" viewBox="0 0 132 81" fill="none">
                        <rect x="2" y="32.7266" width="85.6552" height="46.2727" stroke="white" stroke-width="4"/>
                        <path d="M93.2414 59.4545H120C125.523 59.4545 130 54.9774 130 49.4546V12C130 6.47715 125.523 2 120 2H50.3448C44.822 2 40.3448 6.47716 40.3448 12V27.1364" stroke="white" stroke-width="4"/>
                        <path d="M59.8621 55.8635C59.8621 64.1816 53.1284 70.9203 44.8276 70.9203C36.5268 70.9203 29.7931 64.1816 29.7931 55.8635C29.7931 47.5453 36.5268 40.8066 44.8276 40.8066C53.1284 40.8066 59.8621 47.5453 59.8621 55.8635Z" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path d="M42.3448 48.8867H46.6136C48.4839 48.8867 50 50.4028 50 52.2731C50 54.1433 48.4839 55.6594 46.6136 55.6594H42.3448V48.8867Z" stroke="white" stroke-width="4"/>
                        <rect x="36.7586" y="54.0684" width="7.17241" height="3.59091" fill="white"/>
                        <rect x="36.7586" y="59.4551" width="15.2414" height="3.59091" fill="white"/>
                        <rect x="40.3448" y="46.8867" width="3.58621" height="18.8523" fill="white"/>
                        <path d="M69.0345 39.7051H80.6897V54.0687" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path d="M20.6207 72.0234H8.96552V57.6598" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path d="M8.96551 54.0685V46.8867" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M110.276 50.4414C108.946 51.5833 107.219 52.2731 105.331 52.2731C101.13 52.2731 97.7241 48.8567 97.7241 44.6424C97.7241 40.4281 101.13 37.0117 105.331 37.0117C107.219 37.0117 108.946 37.7015 110.276 38.8434C111.606 37.7015 113.333 37.0117 115.22 37.0117C119.422 37.0117 122.828 40.4281 122.828 44.6424C122.828 48.8567 119.422 52.2731 115.22 52.2731C113.333 52.2731 111.606 51.5833 110.276 50.4414Z" fill="white"/>
                        <rect x="42.1379" y="11.875" width="86.069" height="4.48864" fill="white" fill-opacity="0.5"/>
                        <rect x="42.1379" y="19.9551" width="86.069" height="4.48864" fill="white" fill-opacity="0.5"/>
                    </svg>
                    <p>Наличный и безналичный расчет</p> 
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="94" viewBox="0 0 90 94" fill="none">
                        <path d="M21 40V44C21 46.7614 23.2386 49 26 49H38" stroke="white" stroke-width="4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2123 54.6695L56.0658 52.5918L57.443 55.0116L61.7382 62.5585L58.2618 64.537L55.3438 59.41L47.7191 67.9572L47.743 67.9822L47.6858 68.044L54.3228 75.6898L51.3022 78.3119L44.952 70.9965L38.1342 78.3597L35.1991 75.6421L42.257 68.0196L33.9346 59.2733L30.7096 64.5856L27.2904 62.5099L31.8719 54.963L33.2285 52.7285L35.0304 54.6222L44.9525 65.0497L54.2123 54.6695Z" fill="white" fill-opacity="0.5"/>
                        <path d="M11.6565 72.7907C6.01374 78 3.42748 87.5504 3 92H45L29.6107 64C25.8702 64.5426 17.2992 67.5814 11.6565 72.7907Z" stroke="white" stroke-width="4"/>
                        <path d="M78.3435 72.7907C83.9863 78 86.5725 87.5504 87 92H45L60.3893 64C64.1298 64.5426 72.7008 67.5814 78.3435 72.7907Z" stroke="white" stroke-width="4"/>
                        <path d="M27.8922 25.8906C27.4559 16.142 35.2417 8 45 8C54.7583 8 62.5441 16.142 62.1078 25.8906L61.3246 43.3897C60.9338 52.1217 53.7407 59 45 59C36.2593 59 29.0662 52.1217 28.6754 43.3897L27.8922 25.8906Z" stroke="white" stroke-width="4"/>
                        <path d="M27.5 25C27.5 25 31.7884 19.5199 36.8448 18.3243C44.4712 16.5209 44.181 22.6617 55.3448 26.3317C58.078 27.2302 62 27 62 27" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.9206 34.1516C73.0182 31.7329 72.2945 29.4714 70.9978 27.6363C70.8176 12.4893 59.3921 0 45 0C30.9108 0 19.6647 11.9691 19.0284 26.6835C17.2618 28.658 16.2315 31.2952 16.3468 34.1516L16.3684 34.688C16.6036 40.5167 21.5193 45.0512 27.3481 44.816L27.1868 40.8193C23.5654 40.9654 20.5113 38.1481 20.3652 34.5268L20.3435 33.9903C20.1974 30.369 23.0147 27.3148 26.6361 27.1687L26.4748 23.1719C25.3751 23.2163 24.3215 23.4273 23.3372 23.7796C25.1745 12.4349 34.2888 4 45 4C55.8103 4 64.9941 12.5918 66.7119 24.0954C65.5117 23.5534 64.1893 23.2283 62.7926 23.1719L62.6314 27.1687C66.2528 27.3148 69.07 30.369 68.9239 33.9903L68.9023 34.5268C68.7561 38.1481 65.702 40.9654 62.0806 40.8193L61.9194 44.816C67.7481 45.0512 72.6638 40.5167 72.899 34.688L72.9206 34.1516Z" fill="white"/>
                        <rect x="38.0026" y="45.8909" width="10.6774" height="6.24404" rx="3.12202" transform="rotate(0.400125 38.0026 45.8909)" stroke="white" stroke-width="4"/>
                        <path d="M67 75C69.0513 75.6875 73.9231 78.85 77 86" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                    </svg>
                    <p>Техническая поддержка и консультации</p> 
                </div> 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="96" viewBox="0 0 80 96" fill="none">
                        <circle cx="39.5" cy="37.5" r="16.5" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path d="M46.6651 9.33033L47.4706 10.1195L48.5627 9.83879L57.6 7.51589L60.107 16.5039L60.4099 17.5901L61.4961 17.893L70.4841 20.4L68.1612 29.4373L67.8805 30.5294L68.6697 31.3349L75.2 38L68.6697 44.6651L67.8805 45.4706L68.1612 46.5627L70.4841 55.6L61.4961 58.107L60.4099 58.4099L60.107 59.4961L57.6 68.4841L48.5627 66.1612L47.4706 65.8805L46.6651 66.6697L40 73.2L33.3349 66.6697L32.5294 65.8805L31.4373 66.1612L22.4 68.4841L19.893 59.4961L19.5901 58.4099L18.5039 58.107L9.51589 55.6L11.8388 46.5627L12.1195 45.4706L11.3303 44.6651L4.79998 38L11.3303 31.3349L12.1195 30.5294L11.8388 29.4373L9.51589 20.4L18.5039 17.893L19.5901 17.5901L19.893 16.5039L22.4 7.51589L31.4373 9.83879L32.5294 10.1195L33.3349 9.33033L40 2.79998L46.6651 9.33033Z" stroke="white" stroke-width="4"/>
                        <path d="M15.0042 58L4.00618 82.1799L17.1208 81.5075L25.2273 91.8386L30.4508 80.3303" stroke="white" stroke-width="4"/>
                        <path d="M44.5571 68.8211L55.0041 91.8377L63.1106 81.5065L76.2252 82.1789L70.7262 70.089" stroke="white" stroke-width="4"/>
                    </svg>
                    <p>Только качественная и проверенная продукция</p> 
                </div> 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="108" height="90" viewBox="0 0 108 90" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 8H98H2H0V10V74V76H2H18V72H4V12H96V72H63H62.1716L61.5858 72.5858L50.5 83.6716L39.4142 72.5858L36.5858 75.4142L49.0858 87.9142L50.5 89.3284L51.9142 87.9142L63.8284 76H98H100V74V10V8Z" fill="white"/>
                        <path d="M11 2H106V69" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <circle cx="51.5" cy="42.5" r="20.5" stroke="white" stroke-opacity="0.5" stroke-width="4"/>
                        <path d="M41 41.3333L49.4 50L62 37" stroke="white" stroke-width="4"/>
                    </svg>
                    <p>Мы всегда на связи с 9:00 до 18:00.</p> 
                </div> 
                </div>   
            </div> 
        </>
    )
}