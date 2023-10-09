import React from 'react'
import styles from './index.module.scss'

export default function HeadPart(props) {
  return (
    <div className={styles.headpart}>
        <p className={styles.hp}>{props.title}</p>
    </div>
  )
}
