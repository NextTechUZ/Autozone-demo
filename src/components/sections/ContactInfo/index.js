import React from "react";
import styles from "./index.module.scss";
import { Catalog } from "../../../pages/Catalogs";
import { Titles } from "../../../layouts/components/Titles";
import Form from "./app";
import { UnityButton } from "../../Button";
function ContactInfo() {
  return (
    <div>
      <div className={styles.contact_info_bg_img}>
        <div className={styles.contact_info_bg_img_opasity}></div>
        <div className={styles.contact_info_bg_img_nav}>
          <div>
            <h1>БУДЬТЕ НА СВЯЗИ С КОМАНДОЙ PRO AUTO</h1>
            <UnityButton nameButton="ПЕРЕЙТИ В КАТАЛОГ" />
          </div>
        </div>
      </div>
      <Catalog />
      <div className={styles.contact_info_bg_img_title}>
        <Titles head="КОНТАКТЫ" prgf="Аккумуляторы и автомасла в Перми" />
      </div>
      <div className={styles.contact_info_bg_img_maps} id={styles.map}>
        <div>
          <div className={styles.contact_info_bg_img_maps_m1}>
            <h2>Как с нами связаться</h2>
            <div className={styles.contact_info_bg_img_maps_m1_d}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.9575 15.4963C19.9009 15.3259 19.541 15.0748 18.8779 14.7436C18.6983 14.6392 18.4424 14.4974 18.1112 14.3174C17.7798 14.1375 17.4789 13.9717 17.2092 13.8201C16.9389 13.6686 16.6857 13.5219 16.4491 13.38C16.4113 13.3516 16.2929 13.2689 16.0941 13.1313C15.895 12.9941 15.7271 12.8922 15.5896 12.8258C15.4523 12.7598 15.3173 12.7265 15.1847 12.7265C14.9953 12.7265 14.7588 12.8616 14.4748 13.1313C14.1908 13.4013 13.9303 13.6947 13.6936 14.0122C13.4569 14.3295 13.2059 14.6229 12.941 14.8928C12.6757 15.1628 12.4578 15.2976 12.2875 15.2976C12.202 15.2976 12.0955 15.2738 11.9677 15.2268C11.8401 15.1795 11.7429 15.1389 11.6763 15.1063C11.6102 15.0729 11.4968 15.0068 11.3357 14.9071C11.1743 14.8076 11.0845 14.7531 11.0656 14.7436C9.76829 14.0238 8.65563 13.1999 7.72746 12.2722C6.79959 11.3439 5.97556 10.2314 5.25586 8.934C5.24641 8.91505 5.19183 8.82505 5.09247 8.66415C4.99296 8.50311 4.92664 8.38962 4.8935 8.32315C4.86036 8.25694 4.82011 8.15982 4.77285 8.03201C4.72558 7.9042 4.70185 7.79773 4.70185 7.71241C4.70185 7.54206 4.83683 7.32415 5.10675 7.05897C5.37662 6.79395 5.67027 6.5429 5.9874 6.30633C6.30478 6.06977 6.59814 5.80927 6.8681 5.52529C7.13797 5.24116 7.27291 5.00454 7.27291 4.81519C7.27291 4.6827 7.23977 4.54762 7.17355 4.41036C7.10727 4.2728 7.00548 4.10494 6.8681 3.90598C6.73068 3.70712 6.64784 3.58886 6.61938 3.5508C6.47748 3.31424 6.33086 3.06095 6.17915 2.79105C6.02745 2.5212 5.86187 2.2204 5.68186 1.88901C5.502 1.55777 5.36005 1.30199 5.25576 1.12209C4.9245 0.459354 4.67358 0.0993535 4.50308 0.0427364C4.43675 0.0143284 4.33724 0 4.2048 0C3.94896 0 3.61521 0.0472638 3.20329 0.14209C2.79122 0.236767 2.46697 0.336071 2.23019 0.440399C1.75668 0.639156 1.25481 1.21677 0.724425 2.17304C0.241458 3.06299 0 3.94384 0 4.81494C0 5.07041 0.0165682 5.31897 0.0497047 5.56066C0.0828412 5.8021 0.142049 6.07439 0.227378 6.37748C0.312557 6.68046 0.381268 6.90554 0.433212 7.05211C0.485205 7.19877 0.582276 7.46151 0.724375 7.84042C0.866275 8.21922 0.951604 8.45112 0.980013 8.53634C1.31143 9.4644 1.70444 10.2929 2.15895 11.0221C2.90675 12.2342 3.92727 13.4867 5.21989 14.7794C6.51256 16.0719 7.76498 17.0923 8.9772 17.8404C9.70635 18.2948 10.5352 18.6878 11.4632 19.0194C11.5485 19.0477 11.7804 19.1328 12.159 19.2752C12.5379 19.4172 12.8007 19.5142 12.9474 19.5663C13.0941 19.6185 13.3193 19.6872 13.622 19.7725C13.9254 19.8579 14.1975 19.9171 14.4389 19.9504C14.6805 19.9831 14.9292 20 15.1847 20C16.0558 20 16.9368 19.7584 17.8269 19.2755C18.7832 18.7454 19.3607 18.2434 19.5595 17.7696C19.6641 17.5331 19.7632 17.2087 19.8578 16.7967C19.9528 16.3849 20 16.0512 20 15.7954C20.0003 15.6624 19.986 15.5632 19.9575 15.4963Z"
                  fill="#C53720"
                />
              </svg>
              <p>+7 (342) 279-36-13</p>
            </div>
            <div className={styles.contact_info_bg_img_maps_m1_d}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5.50944L8.86158 11.6444L10 12.4325L11.1384 11.6444L20 5.50944V16H0V5.50944ZM0 0.644402V0H20V0.644402L10 7.56748L0 0.644402Z"
                  fill="#C53720"
                />
              </svg>
              <p>proauto59@yandex.ru</p>
            </div>
            <div className={styles.contact_info_bg_img_maps_m1_d}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 0H0V16H6.9208L10 20L13.0792 16H20V0Z"
                  fill="#C53720"
                />
              </svg>
              <p>г. Пермь, Леонова 82 Б</p>
            </div>
          </div>
          <div className={styles.contact_info_bg_img_maps_m2}>
            <h2>Режим работы</h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="10" fill="#C53720" />
                <path d="M10 3V11H16" stroke="#1D1D1D" stroke-width="2" />
              </svg>
              <p>Пн. – Вс.: с 9:00 до 18:00</p>
            </div>
          </div>
        </div>
        <div id={styles.map1}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.73125912176!2d68.9675292015027!3d41.282434793576456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1696856126364!5m2!1suz!2s"
            width="100%"
            height="442"
            styles="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.contact_info_bg_img_form}>
        <div className={styles.contact_info_bg_img_i}></div>
        <div className={styles.contact_info_bg_img_form_title}>
          <Titles
            head="ЗАДАТЬ ВОПРОС"
            prgf="Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором нужной продукции."
          />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default ContactInfo;