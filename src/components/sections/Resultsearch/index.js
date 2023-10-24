import React from 'react'
import styles from './index.module.scss'


export default function ResultofSearch(props) {
  return (
    <div className={styles.result}>
        <div className={styles.sttl}>
            <p>ПОиск</p>
            <p>Результаты поиска</p>
        </div>
    </div>
  )
}