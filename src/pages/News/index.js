import React from 'react'
import styles from './index.module.scss'
function News() {
  return (
    <div className={styles.news}>
        <div className={styles.smiledgirl}>
            <div className={styles.blur}>
                <div>
                    <h1>ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ</h1>
                    <button>ПЕРЕЙТИ В КАТАЛОГ</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News