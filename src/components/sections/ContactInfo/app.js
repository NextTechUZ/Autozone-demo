import React from "react";
import styles from "./index.module.scss";
import { useState } from "react";
import Loading from "../Loader/app";
function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const inputPhoneNumber = e.target.value;

    // Raqamni  uzunligini tekshirish
    const isPhoneNumberValid = /^\d+$/.test(inputPhoneNumber);

    if (isPhoneNumberValid) {
      // Raqam to'g'ri kiritilgan bo'lsa, uning formatini o'zgartirish
      let formattedNumber = inputPhoneNumber;
      if (inputPhoneNumber.length === 9) {
        formattedNumber = `+998 (${inputPhoneNumber.substr(
          0,
          2
        )})-${inputPhoneNumber.substr(2, 3)}-${inputPhoneNumber.substr(
          5,
          2
        )}-${inputPhoneNumber.substr(7, 2)}`;
      }

      setFormattedPhoneNumber(formattedNumber);
    } else {
      setFormattedPhoneNumber(inputPhoneNumber); // Yaroqsiz raqamni o'zgardi formatlashmasdan ko'rsatish
    }

    setPhoneNumber(inputPhoneNumber);
    setIsValid(isPhoneNumberValid);
  };
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
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // form yani sabmit bulgan holati
  const handleSubmit = (e) => {
    e.preventDefault(); //entir bosilganda sayit ereflish bulib ketmasilgi uchun
    setIsLoading(true);
    const botToken = "6318657820:AAGtlRblWTxeurojpjwhBJ08K6dkDLt_ok0"; // bot tokini
    const chatId = 1121426146; // botning adminini idisi
    // malumot yuborilish tartibi
    const messageText = `Name: ${user}\nCall: ${formattedPhoneNumber}\nEmail: ${email}\nOffer: ${offer}\nMessage: ${message}`;
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  };

  //xabar yuborilsa inputlarning valuesi '' teng bulib qoladi
  const reset = () => {
    setEmail("");
    setMessage("");
    setOffer("");
    setUser("");
    setFormattedPhoneNumber("");
  };

  return (
    <div className={styles.form}>
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
        <div>
          <input
            required
            type="tel"
            value={formattedPhoneNumber}
            onChange={handleInputChange}
          />
        </div>
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
        <div className={styles.contact_question_robot}>
          <div className={styles.contact_question_robot_galich}>
            <div data-netlify-recaptcha="true"></div>
          </div>
          <h1>
            Я согласен на <span>обработку персональных данных</span>
          </h1>
        </div>
        <div className={styles.contact_question_form_ob}>
          <h1>* Обязательное поле</h1>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Loading /> : "ОТПРАВИТЬ"}
        </button>
      </form>
    </div>
  );
}

export default Form;
