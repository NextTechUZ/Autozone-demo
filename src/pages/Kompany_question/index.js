import React, { useState } from "react";
import style from "./index.module.scss";
import cal from "../../assets/imgs/call.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../../components/sections/slider/min.scss";

function Kompany_question() {
  const x = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M2 2L14 14" stroke="white" strokeWidth="4" />
      <path d="M14 2L2 14" stroke="white" strokeWidth="4" />
    </svg>
  );
  // ma'lumotlarni olish uchun statelar

  const [user, setUser] = useState("");
  const [call, setCall] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  // form yani sabmit bulgan holati
  const handleSubmit = (e) => {
    e.preventDefault(); //entir bosilganda sayit ereflish bulib ketmasilgi uchun
    const botToken = "6318657820:AAGtlRblWTxeurojpjwhBJ08K6dkDLt_ok0"; // bot tokini
    const chatId = 1121426146; // botning adminini idisi
    // malumot yuborilish tartibi
    const messageText = `Name: ${user}\nCall: ${call}\nEmail: ${email}\nOffer: ${offer}\nMessage: ${message}`;
    // post qilib yuborish
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    };

    // fetch orqali botga  xabar yuborish
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xabar yuborishda xatolik");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Xabar yuborildi:", data);
        reset(); // Xabar yuborildi, reset ishlasin
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  };

  //xabar yuborilsa inputlarning valuesi '' teng bulib qoladi
  const reset = () => {
    setEmail("");
    setCall("");
    setMessage("");
    setOffer("");
    setUser("");
  };

  return (
    <div className={style.kompany_question}>
      <div className={style.kompany_question_nav}>
        <div className={style.kompany_question_nav1}>
          <img src={cal} alt="" className={style.kompany_question_nav1_call} />
        </div>
        <div className={style.kompany_question_nav2}>
          <h1>Задать вопрос</h1>
          <p>
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором продукции.
          </p>
        </div>
        <div className={style.kompany_question_nav3}>{x}</div>
      </div>

      <div className={style.kompany_question_form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ваше имя:*</label>
          <input
            required
            type="text"
            id="name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="call">Телефон:*</label>
          <PhoneInput required value={call} onChange={setCall}  />
          <label htmlFor="email">E-mail</label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="tovar">Интересующий товар / услуга:</label>
          <input
            required
            type="text"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
          />
          <label htmlFor="xabar">Сообщение:*</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">ОТПРАВИТЬ</button>
        </form>
        <div className={style.kompany_question_robot}>
          <div className={style.kompany_question_robot_galich}>
            <div data-netlify-recaptcha="true"></div>
          </div>
          <h1>
            Я согласен на <span>обработку персональных данных</span>
          </h1>
        </div>
        <div className={style.kompany_question_form_ob}>
          <h1>* Обязательное поле</h1>
        </div>
      </div>
    </div>
  );
}

export default Kompany_question;
