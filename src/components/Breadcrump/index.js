import React from 'react'
import styles from './breadcrump-style.module.scss'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Breadcrump({data}) {
    const data = [
        { link:"",
            text: "ГЛАВНАЯ"
        },
        {
            text: "ГЛАВНАЯ"
        },
        {
            text: "ГЛАВНАЯ"
        },
        {
            text: "ГЛАВНАЯ"
        },
        {
            text: "ГЛАВНАЯ"
        },
        {
            text: "ГЛАВНАЯ"
        }
    ]
  return (
        <div className={styles.main}>
            {
                data && data.map((item, index) => {
                    return(
                        <div key={index} className={styles.son}>
                            <Link to='/' className={styles.text}>{item.text}</Link>
                            {
                                index!==data.length-1 && <BiChevronRight className={styles.icon}/>
                            }
                        </div>
                    )
                })
            }
        </div>
    
  )
}

export default Breadcrump