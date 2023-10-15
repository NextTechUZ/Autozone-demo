import React, { useEffect,useState } from 'react'
import styles from './index.module.scss'
import binom from '../../../assets/images/binom.png'
import favorit from '../../../assets/images/favorit.png'
import maslon from '../../../assets/images/maslon.png'
import mir from '../../../assets/images/mir.png'
import yuniks from '../../../assets/images/yuniks.png'
import passiv from '../../../assets/images/passiv.svg'
import aktiv from '../../../assets/images/aktiv.svg'

export default function FootSlide() {
  const imgArray = [
    binom,favorit,maslon,mir, yuniks
  ]
  const [currentIndex, setCurrentIndex] = useState(5);
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(2);
  const [three, setThree] = useState(3);
  const [four, setFour] = useState(4);
  const [five, setFive] = useState(5);

  const previous = () => {
    const isFirstSlide = currentIndex === 5 ;
    const newIndex = isFirstSlide ? imgArray.length : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const next = () => {
    const isLastSlide = currentIndex === imgArray.length;
    const newIndex = isLastSlide ? imgArray.length : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const thro = currentIndex !== 0 ? currentIndex : imgArray.length ;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOne(prevOne => (prevOne < 5 ? prevOne + 1 : 1));
      setTwo(prevTwo => (prevTwo < 5 ? prevTwo + 1 : 1));
      setThree(prevThree => (prevThree < 5 ? prevThree + 1 : 1));
      setFour(prevFour => (prevFour < 5 ? prevFour + 1 : 1));
      setFive(prevFive => (prevFive < 5 ? prevFive + 1 : 1));
    console.log('startting')
  }, 4000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className={styles.slide}>
        <div className={styles.footcontainer}>
            <button onClick={previous}><img src={passiv}/></button>
            <button><img src={imgArray[5-one]}/></button>
            <button><img src={imgArray[5-two]}/></button>
            <button><img src={imgArray[5-three]}/></button>
            <button><img src={imgArray[5-four]}/></button>
            <button><img src={imgArray[5-five]}/></button>
            <button onClick={next}><img src={aktiv}/></button>
        </div>
    </div>
  )
}
