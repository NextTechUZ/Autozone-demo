import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar-style.module.scss";
import { useEffect, useState } from "react";
import { BiCartAlt, BiSearch, BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { UnityButton } from "../../../components/Button";
import logo from "../../../assets/imgs/logo.png";
import { FiPhoneCall } from 'react-icons/fi'

function Navbar() {
  const [hide, setHide] = useState(false);
  const [backet, setBacket] = useState(false);
  const [countItem, setCountItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  var forShow = () => {
    setHide(!hide);
  };

  const ShopBacket = () => {
    setBacket(!backet);
  };

  return (
    <>
      <nav className={isOpen ? styles.open : { justifyContent: "center" }}>
        <div className={styles.container}>
          <Link to="/" className={styles.a}>
            <img src={logo} className={styles.logo} />
          </Link>
          <div className={styles.navbarMenu}>
            {/* navbardagi dropdownlar */}
            <DropdownButton/>
            {/* dropdownlarni tugashi */}
            <div className={styles.kontakt}>
              <Link>КОНТАКТЫ</Link>
            </div>
          </div>
          <div className={styles.buttonsgroup}>
            {innerWidth <= 570 ? (<button className={styles.phone}>
              <FiPhoneCall />
            </button>) : 
            (<UnityButton nameButton="ЗАКАЗАТЬ ЗВОНОК"/>)}
            <button onClick={forShow} className={styles.icons}>
              <BiSearch size="30px" />
            </button>
            <button className={styles.newicon}>
              <BiCartAlt size="30px" />
            </button>
            <div className={styles.countItems}>{countItem}</div>
          </div>
          {hide ? <Forsearch /> : ""}
          {backet ? <ForShopBacket /> : ""}

          <button
            className={styles.navbarBurger}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BiMenu />
          </button>
          <div
            className={styles.navbarOverlay}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// dropdown button qismi

function DropdownButton() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      // Clicked on the currently open dropdown, so close it
      setDropdownOpen(null);
    } else {
      // Clicked on a different dropdown, so open it
      setDropdownOpen(index);
    }
  };

  const dropdownData = [
    {
      name:'КАМПАНИЯ', 
      title: <>
              <p>АКБ MAGNUM</p>
              <p>АКБ ЗВЕРЬ</p>
              <p>ТЮМЕНСКИЙ</p>
              <p>АКБ AKOM</p>
            </>
    },
    {
      name:'КАТАЛОГ',
      title:<>
              <li>
                АККУМУЛЯТОР
                {/* <ul>
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
              </ul> */}
              </li>
              <li>АВТОМАСЛО</li>
              <li>АКСЕССУАРЫ</li>
              <li>АВТОХИМИЯ</li>
            </>,
    },
    {
      name:'УСЛУГИ',
      title:<>
              <p>ДИАГНОСТИКА АККУМУЛЯТОРА</p>
              <p>ПРИЕМ АККУМУЛЯТОРОВ</p>
            </>,
    },
    {
      name:'ИНФОРМАЦИЯ',
      title:<>
        <p>НОВОСТИ</p>
        <p>F.A.Q</p>
      </>,
    }
  ]



  return (
    <>
      {dropdownData.map((item,index)=>(
        <div className={styles.dropdown}>
        <div onClick={()=>toggleDropdown(index)} className={styles.dropdownbutton}>
          {item.name}
        </div>
        {dropdownOpen === index && <div className={styles.dropdowncontent}>{item.title}</div>}
      </div>
      ))}
    </>
  );
}

// dropdwon qismi tugashi 


// Qidiruv iconi bosilganda ko`rinuvhci qismi
function Forsearch() {
  const [item, setItem] = useState("");

  const handleSearch = (event) => {
    setItem(event.target.value);
  };

  return (
    <div className={styles.forsearchhide}>
      <div>
        <input type="text" name="input" value={item} onChange={handleSearch} />
        <button onClick={handleSearch} className={styles.search}>
          нaйти
        </button>
        <button onClick={""} className={styles.closeIcon}>
          <IoClose />
        </button>
      </div>
    </div>
  );
}

// qidiruv tizimi tugashi


// Karzinka iconi bosilganda chiquvchi qismi

function ForShopBacket() {
  return <div className={styles.myShop}></div>;
}

// navbar for demo
