import React from 'react'
import styles from './index.module.scss'
import binom from '../../../assets/images/binom.png'
import favorit from '../../../assets/images/favorit.png'
import maslon from '../../../assets/images/maslon.png'
import mir from '../../../assets/images/mir.png'
import yuniks from '../../../assets/images/yuniks.png'
import passiv from '../../../assets/images/passiv.svg'
import aktiv from '../../../assets/images/aktiv.svg'

export default function FootSlide() {
  return (
    <div className={styles.slide}>
        <div className={styles.footcontainer}>
            <button><img src={passiv}/></button>
            <button><img src={binom}/></button>
            <button><img src={favorit}/></button>
            <button><img src={maslon}/></button>
            <button><img src={mir}/></button>
            <button><img src={yuniks}/></button>
            <button><img src={aktiv}/></button>
        </div>
    </div>
  )
}
