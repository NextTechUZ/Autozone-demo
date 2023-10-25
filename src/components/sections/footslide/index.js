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
  const [arrayLength, setArrayLength] = useState(imgArray.length)
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOne(prevOne => (prevOne < 5 ? prevOne + 1 : 1));
      setTwo(prevTwo => (prevTwo < 5 ? prevTwo + 1 : 1));
      setThree(prevThree => (prevThree < 5 ? prevThree + 1 : 1));
      setFour(prevFour => (prevFour < 5 ? prevFour + 1 : 1));
      setFive(prevFive => (prevFive < 5 ? prevFive + 1 : 1));
  }, 4000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className={styles.slide}>
        <div className={styles.footcontainer}>
            <button onClick={previous}><img src={currentIndex===0?aktiv:passiv} style={currentIndex===0?{transform:'rotate(180deg)'}:{}}/></button>
            <button className={styles.btn}><img src={imgArray[currentIndex-one]}/></button>
            <button className={styles.btn}><img src={imgArray[currentIndex-two]}/></button>
            <button className={styles.btn}><img src={imgArray[currentIndex-three]}/></button>
            <button className={styles.btn}><img src={imgArray[currentIndex-four]}/></button>
            <button className={styles.btn}><img src={imgArray[currentIndex-five]}/></button>
            <button onClick={next}><img src={currentIndex!==arrayLength?aktiv:passiv} style={{transform:'rotate(180deg)'}}/></button>
        </div>
    </div>
  )
}
