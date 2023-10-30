import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar-style.module.scss";
import { useEffect, useState } from "react";
import { BiCartAlt, BiSearch, BiMenu } from "react-icons/bi";
import { UnityButton } from "../../../components/Button";
import logo from "../../../assets/imgs/logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { ForShopBacket, Forsearch } from "./parts";

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
            <DropdownButton />
            <div className={styles.kontakt}>
              <Link to={"/contact"}>КОНТАКТЫ</Link>
            </div>
          </div>
          <div className={styles.buttonsgroup}>
            {innerWidth <= 570 ? (
              <button className={styles.phone}>
                <FiPhoneCall />
              </button>
            ) : (
              <UnityButton nameButton="ЗАКАЗАТЬ ЗВОНОК" />
            )}
            <button onClick={forShow} className={styles.icons}>
              <BiSearch size="30px" />
            </button>
            {/* <button className={styles.newicon}>
              <BiCartAlt size="30px" />
            </button>
            <div className={styles.countItems}>{countItem}</div> */}
          </div>

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
      {hide ? (
        <div className={styles.fx}>
          <Forsearch funk={forShow} />
        </div>
      ) : (
        ""
      )}
      {/* {backet ? <ForShopBacket /> : ""} */}
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
      name: "КАМПАНИЯ",
      title: (
        <>
          <Link to={"/about"}>О КОМПАНИИ</Link>
          <Link to={"/about"}>ЛИЦЕНЗИИ</Link>
          <Link to={"/about"}>ПАРТНЕРЫ</Link>
          <Link to={"/about"}>ОТЗЫВЫ КЛИЕНТОВ</Link>
        </>
      ),
      path: "/",
    },
    {
      name: "КАТАЛОГ",
      title: (
        <>
          <Link to={"/product"}>АККУМУЛЯТОР</Link>
          <Link to={"/product"}>АВТОМАСЛО</Link>
          <Link to={"/product"}>АКСЕССУАРЫ</Link>
          <Link to={"/product"}>АВТОХИМИЯ</Link>
        </>
      ),
      path: "/catalog",
    },
    {
      name: "УСЛУГИ",
      title: (
        <>
          <p>ДИАГНОСТИКА АККУМУЛЯТОРА</p>
          <p>ПРИЕМ АККУМУЛЯТОРОВ</p>
        </>
      ),
    },
    {
      name: "ИНФОРМАЦИЯ",
      title: (
        <>
          <Link to={"/news"}>НОВОСТИ</Link>
          <Link to={"/news"}>F.A.Q</Link>
        </>
      ),
      path: "/news",
    },
  ];

  return (
    <>
      {dropdownData.map((item, index) => (
        <div className={styles.dropdown}>
          <div
            onClick={() => toggleDropdown(index)}
            className={styles.dropdownbutton}
          >
            <Link to={item.path}>{item.name}</Link>
            <div className={styles.dropdowncontent2}>{item.title}</div>
          </div>
          {/* {dropdownOpen === index && (
            <div className={styles.dropdowncontent}>{item.title}</div>
          )} */}
        </div>
      ))}
    </>
  );
}

// dropdwon qismi tugashi
