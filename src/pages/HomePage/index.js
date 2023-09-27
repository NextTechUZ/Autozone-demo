import React, { useState } from "react";
import styles from './index.module.scss';
import {BiWallet, BiSupport, BiSolidBookmarks, BiMessageCheck} from 'react-icons/bi'
import { KatalogButton } from "../../components/Button";

function ImageSlider({slides}){

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

    const dotsContainerStyles = {
        display: "flex",
        marginTop:'-180px',
        justifyContent: "center",
      };
      
      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
        color:'white',
      };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return(
        <div className={styles.sliderStyle}>
            <div style={slideStylesWidthBackground}></div>
            <div className={styles.dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
                <div className={styles.dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    ●
                </div>
                ))}
            </div>
            <Paragraf /> 
        </div>
    )
}

function Paragraf(){

    return(
        <div className={styles.draft}>
            <p>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</p>
            <KatalogButton />
        </div>
    )
}

function Showbottom(){
    return(
        <>
            <div className={styles.headbottom}>
                <div className={styles.container}> 
                <div className={styles.first}>
                    <BiWallet />
                    <p>Наличный и безналичный расчет</p> 
                </div>
                <div>
                    <BiSupport />
                    <p>Техническая поддержка и консультации</p> 
                </div> 
                <div>
                    <BiSolidBookmarks />
                    <p>Только качественная и проверенная продукция</p> 
                </div> 
                <div>
                    <BiMessageCheck />
                    <p>Мы всегда на связи с 9:00 до 18:00.</p> 
                </div> 
                </div>   
            </div> 
        </>
    )
}

function HomePage(){

    const slides = [
        {
            url:`https://3dnews.ru/assets/external/illustrations/2017/09/21/958848/1.jpg`,
        },
        {
            url:`https://cdn5.vedomosti.ru/crop/image/2023/76/31dwt/original-3xs.jpg?height=549&width=977`,
        },
        {
            url: `https://gr8auto.kg/wp-content/uploads/2020/02/bg-bmw-mobile.jpg`,
        },
        {
            url:`https://static.mvideo.ru/media/Promotions/Promo_Page/2022/March/obzor-luchshie-prilozheniya-dlya-diagnostiki-avto/obzor-luchshie-prilozheniya-dlya-diagnostiki-avto-top1-m.png`,
        }
    ]

    return(
        <>
        <div className={styles.containerStyle} >
            <ImageSlider slides={slides}/>
        </div>
        <Showbottom/>
        </>
    )
}

export default HomePage;