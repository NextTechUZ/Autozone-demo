import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  BiWallet,
  BiSupport,
  BiSolidBookmarks,
  BiMessageCheck,
} from "react-icons/bi";
import { KatalogButton } from "../../components/Button";
 import Services, { Kampaniya } from '../../components/sections/servicesPart';
import {News} from '../../components/sections/newsPart'

// Import Swiper styles

// import "./min.scss";
import Cards from "../../components/sections/Cards";
import { Title } from "../../components/sections/Title/index";
import { ImageSliderdata } from "../../components/sections/Slider/indexData";
import FootSlide from "../../components/sections/footslide";
<ImageSliderdata/>

function Showbottom(){
    return(
        <>
            <div className={styles.headbottom}>
                <div className={styles.container}> 
                <div>
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

    return(
        <>
        <div className={styles.containerStyle}>
        <ImageSliderdata  />
      </div>
        <Showbottom/>
        <Title/>
        <Cards/>
        <Services/>
        <Kampaniya/>
        <News/>
        <FootSlide/>
        </>
    )
}

export default HomePage;
