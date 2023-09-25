import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.module.scss';
import styles from './style-navbar.module.css';
import { useState } from 'react';
import {BiCartAlt, BiSearch} from 'react-icons/bi';
import {IoClose} from 'react-icons/io5'


function DropdownButton(props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.dropdown}>
        <div onClick={toggleDropdown} className={styles.dropdownbutton}>
          {props.name}
        </div>
        {isOpen && (
          <div className={styles.dropdowncontent}>
            {props.title}
          </div>
        )}
      </div>
    );
  }

function Forsearch(){

  const [item, setItem] = useState('')

  const handleSearch = (event) =>{
    setItem(event.target.value);
  }
  

  return(
    <div className={styles.forsearchhide}>    
        <div>
          <input type='text' 
          name='input'
          value={item}
          onChange={handleSearch}
          />
          <button onClick={handleSearch} className={styles.search}> нaйти </button>
          <button onClick={''} className={styles.closeIcon}><IoClose /> </button>  
        </div>
    </div>
  )
}

function ForShopBacket(){
  return(
    <div className={styles.myShop}>
        
    </div>
  )
}

// navbar for demo
export function Navbar(){
  const [hide, setHide] = useState(false);
  const [ backet, setBacket ] = useState(false);
  const [countItem, setCountItem] = useState(0);

  var forShow =() =>{
    setHide(!hide);
  }

  const ShopBacket=() =>{
    setBacket(!backet);
  }

    return(
<>
    <nav>
        <img src="https://cdn.vectorstock.com/i/preview-1x/43/85/auto-service-logo-template-vector-38214385.jpg" className={styles.logo}/>
            <DropdownButton name={<Link>КАМПАНИЯ</Link>} title={
            <> 
                <p>АКБ MAGNUM</p>
                <p>АКБ ЗВЕРЬ</p>
                <p>ТЮМЕНСКИЙ</p>
                <p>АКБ AKOM</p>
            </>
        }/>


            <DropdownButton name={<Link>КАТАЛОГ</Link>} title={
                <>
                <li>
                     АККУМУЛЯТОР
                  <ul>
                      <li>АКБ MAGNUM</li>
                      <li>АКБ ЗВЕРЬ</li>
                      <li>ТЮМЕНСКИЙ АККУМУЛЯТОРНЫЙ ЗАВОД</li>
                      <li>АКБ AKOM</li>
                      <li>АКБ BARS</li>
                      <li>АКБ ТЮМЕНСКИЙ МЕДВЕДЬ</li>
                      <li>АКБ ENRUN</li>
                      <li>АКБ UNIX (WESTA)</li>
                      <li>АКБ EDCON</li>
                      <li>АКБ AFA</li>
                      <li>АКБ BOSCH</li>
                      <li>АКБ MUTLU</li>
                      <li>ОРИГИНАЛЬНЫЕ АКБ</li>
                  </ul>
                </li>
                 <li>
                     АВТОМАСЛО
                 </li>
                 <li>
                     АКСЕССУАРЫ
                 </li>
                 <li>
                     АВТОХИМИЯ
                 </li>
                 </>
            }/>

        <DropdownButton name={<Link>УСЛУГИ</Link>} title={
          <>
            <p>ДИАГНОСТИКА АККУМУЛЯТОРА</p>,
            <p>ПРИЕМ АККУМУЛЯТОРОВ</p>
          </>
        }/>
        <DropdownButton name={<Link>ИНФОРМАЦИЯ</Link>} title={
          <>
            <p>НОВОСТИ</p>
            <p>F.A.Q</p>
          </>
        }/>
        <div className={styles.kontakt}><Link>КОНТАКТЫ</Link></div>
        
        <div className={styles.buttonsgroup}>
            <button className={styles.red}>ЗАКАЗАТЬ ЗВОНОК</button>
            <button onClick={forShow} className={styles.icons}> <BiSearch  size="20px"/> </button> 
            <button onClick={ShopBacket} className={styles.icons}> <BiCartAlt size="20px"/> </button>
            <div className={styles.countItems}>{countItem}</div>
        </div>
        { hide ? <Forsearch/> : ''}
        {backet ? <ForShopBacket /> : ' '}
    </nav>
        </>
    )
}
