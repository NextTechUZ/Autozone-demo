import React, { useState } from "react";
import styles from "./index.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Faq() {
  const [sv, setSv] = useState(true);
  const [nf, setNf] = useState(false);

  return (
    <div className={styles.faq}>
      <div className={styles.opacity}>
        <div className={styles.faqttl}>
          <p className={styles.tl}>F. A. Q</p>
          <p className={styles.tlp}>
            В данном разделе приведены ответа на часто задаваемые вопросы наших
            клиентов.
          </p>
        </div>
        <div className={styles.toggleGroup}>
          <button
            onClick={() => {
              !sv && setSv(!sv);
              nf && setNf(!nf);
            }}
            className={sv && styles.tg}
          >
            Общие вопросы
          </button>
          <button
            onClick={() => {
              sv && setSv(!sv);
              !nf && setNf(!nf);
            }}
            className={nf && styles.tg}
          >
            Эксплуатация и уход
          </button>
        </div>
        {sv && <Savollar />}
        {nf && <Info />}
        <div className={styles.lastbtn}>
          <Link to={"/question"}><button>ЗАДАТЬ ВОПРОС</button></Link>
        </div>
      </div>
    </div>
  );
}

function Savollar() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  return (
    <div className={styles.savol}>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>
            Как часто нужно менять щётки стеклоочистителя?
          </p>
          <button
            className={one && styles.rt}
            onClick={() => {
              five === true && setFive(!five);
              four === true && setFour(!four);
              three === true && setThree(!three);
              two === true && setTwo(!two);
              setOne(!one);
            }}
          >
            <AiOutlinePlusCircle />
          </button>
        </div>
        {one && (
          <p className={one && styles.krqism}>
            Мы привыкли эксплуатировать автомобиль, пока что-либо не сломается.
            Так и со щётками - не заменим, пока совсем не потеряем возможность
            видеть перед собой из-за грязного лобового стекла. Следите за своими
            щётками и меняйте их каждый сезон, ведь безопасность на дороге
            превыше всего!
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>
            Как часто нужно менять щётки стеклоочистителя?
          </p>
          <button
            className={two && styles.rt}
            onClick={() => {
              five === true && setFive(!five);
              four === true && setFour(!four);
              three === true && setThree(!three);
              one === true && setOne(!one);
              setTwo(!two);
            }}
          >
            <AiOutlinePlusCircle />
          </button>
        </div>
        {two && (
          <p className={two && styles.krqism}>
            Мы привыкли эксплуатировать автомобиль, пока что-либо не сломается.
            Так и со щётками - не заменим, пока совсем не потеряем возможность
            видеть перед собой из-за грязного лобового стекла. Следите за своими
            щётками и меняйте их каждый сезон, ведь безопасность на дороге
            превыше всего!
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>
            Как часто нужно менять щётки стеклоочистителя?
          </p>
          <button className={three && styles.rt}
            onClick={() => {
              five === true && setFive(!five);
              four === true && setFour(!four);
              two === true && setTwo(!two);
              one === true && setOne(!one);
              setThree(!three);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {three && (
          <p className={three && styles.krqism}>
            Мы привыкли эксплуатировать автомобиль, пока что-либо не сломается.
            Так и со щётками - не заменим, пока совсем не потеряем возможность
            видеть перед собой из-за грязного лобового стекла. Следите за своими
            щётками и меняйте их каждый сезон, ведь безопасность на дороге
            превыше всего!
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>
            Как часто нужно менять щётки стеклоочистителя?
          </p>
          <button className={four && styles.rt}
            onClick={() => {
              five === true && setFive(!five);
              two === true && setTwo(!two);
              three === true && setThree(!three);
              one === true && setOne(!one);
              setFour(!four);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {four && (
          <p className={four && styles.krqism}>
            Мы привыкли эксплуатировать автомобиль, пока что-либо не сломается.
            Так и со щётками - не заменим, пока совсем не потеряем возможность
            видеть перед собой из-за грязного лобового стекла. Следите за своими
            щётками и меняйте их каждый сезон, ведь безопасность на дороге
            превыше всего!
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>
            Как часто нужно менять щётки стеклоочистителя?
          </p>
          <button className={five && styles.rt}
            onClick={() => {
              two === true && setTwo(!two);
              four === true && setFour(!four);
              three === true && setThree(!three);
              one === true && setOne(!one);
              setFive(!five);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {five && (
          <p className={five && styles.krqism}>
            Мы привыкли эксплуатировать автомобиль, пока что-либо не сломается.
            Так и со щётками - не заменим, пока совсем не потеряем возможность
            видеть перед собой из-за грязного лобового стекла. Следите за своими
            щётками и меняйте их каждый сезон, ведь безопасность на дороге
            превыше всего!
          </p>
        )}
      </div>
    </div>
  );
}

function Info() {
  const [oneI, setOneI] = useState(false);
  const [twoI, setTwoI] = useState(false);
  const [threeI, setThreeI] = useState(false);
  const [fourI, setFourI] = useState(false);
  const [fiveI, setFiveI] = useState(false);

  return (
    <div className={styles.savol}>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>Как продлить срок службы аккумулятора?</p>
          <button className={oneI && styles.rt}
            onClick={() => {
              twoI === true && setTwoI(!twoI);
              fourI === true && setFourI(!fourI);
              threeI === true && setThreeI(!threeI);
              fiveI === true && setFiveI(!fiveI);
              setOneI(!oneI);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {oneI && (
          <p className={oneI&&styles.krqism}>
            Вам достаточно придерживаться нескольких основных правил: Заглушив
            мотор, нужно проверить, выключены ли все электроприборы. При
            отключении АКБ от блока питания надо сразу выключать провод со
            знаком минус. Избегайте саморазряда батареи. Постоянно контролируйте
            места соединения клемм с аккумулятором. Если вы не пользуетесь
            батареей, не слив при этом с нее электролит, надо постоянно заряжать
            ее и проверять плотность и уровень жидкости. Необходимо периодически
            измерять плотность и уровень электролита каждые 3000 км пробега.
            Если все показатели в норме, батарею все равно надо заряжать: зимой
            — каждый месяц, летом — каждые 6 месяцев. Для зарядки использовать
            ток, равный 1/10 емкости АКБ. Помните, что зимой при морозе возможно
            повреждение корпуса, которое происходит из-за замерзания жидкости в
            разряженном аккумуляторе, поэтому проверяйте аккумулятор на
            целостность.
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>Как продлить срок службы аккумулятора?</p>
          <button className={twoI && styles.rt}
            onClick={() => {
              oneI === true && setOneI(!oneI);
              fourI === true && setFourI(!fourI);
              threeI === true && setThreeI(!threeI);
              fiveI === true && setFiveI(!fiveI);
              setTwoI(!twoI);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {twoI && (
          <p className={twoI&&styles.krqism}>
            Вам достаточно придерживаться нескольких основных правил: Заглушив
            мотор, нужно проверить, выключены ли все электроприборы. При
            отключении АКБ от блока питания надо сразу выключать провод со
            знаком минус. Избегайте саморазряда батареи. Постоянно контролируйте
            места соединения клемм с аккумулятором. Если вы не пользуетесь
            батареей, не слив при этом с нее электролит, надо постоянно заряжать
            ее и проверять плотность и уровень жидкости. Необходимо периодически
            измерять плотность и уровень электролита каждые 3000 км пробега.
            Если все показатели в норме, батарею все равно надо заряжать: зимой
            — каждый месяц, летом — каждые 6 месяцев. Для зарядки использовать
            ток, равный 1/10 емкости АКБ. Помните, что зимой при морозе возможно
            повреждение корпуса, которое происходит из-за замерзания жидкости в
            разряженном аккумуляторе, поэтому проверяйте аккумулятор на
            целостность.
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>Как продлить срок службы аккумулятора?</p>
          <button className={threeI && styles.rt}
            onClick={() => {
              twoI === true && setTwoI(!twoI);
              fourI === true && setFourI(!fourI);
              oneI === true && setOneI(!oneI);
              fiveI === true && setFiveI(!fiveI);
              setThreeI(!threeI);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {threeI && (
          <p className={threeI&&styles.krqism}>
            Вам достаточно придерживаться нескольких основных правил: Заглушив
            мотор, нужно проверить, выключены ли все электроприборы. При
            отключении АКБ от блока питания надо сразу выключать провод со
            знаком минус. Избегайте саморазряда батареи. Постоянно контролируйте
            места соединения клемм с аккумулятором. Если вы не пользуетесь
            батареей, не слив при этом с нее электролит, надо постоянно заряжать
            ее и проверять плотность и уровень жидкости. Необходимо периодически
            измерять плотность и уровень электролита каждые 3000 км пробега.
            Если все показатели в норме, батарею все равно надо заряжать: зимой
            — каждый месяц, летом — каждые 6 месяцев. Для зарядки использовать
            ток, равный 1/10 емкости АКБ. Помните, что зимой при морозе возможно
            повреждение корпуса, которое происходит из-за замерзания жидкости в
            разряженном аккумуляторе, поэтому проверяйте аккумулятор на
            целостность.
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>Как продлить срок службы аккумулятора?</p>
          <button className={fourI && styles.rt}
            onClick={() => {
              twoI === true && setTwoI(!twoI);
              oneI === true && setOneI(!oneI);
              threeI === true && setThreeI(!threeI);
              fiveI === true && setFiveI(!fiveI);
              setFourI(!fourI);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {fourI && (
          <p className={fourI&&styles.krqism}>
            Вам достаточно придерживаться нескольких основных правил: Заглушив
            мотор, нужно проверить, выключены ли все электроприборы. При
            отключении АКБ от блока питания надо сразу выключать провод со
            знаком минус. Избегайте саморазряда батареи. Постоянно контролируйте
            места соединения клемм с аккумулятором. Если вы не пользуетесь
            батареей, не слив при этом с нее электролит, надо постоянно заряжать
            ее и проверять плотность и уровень жидкости. Необходимо периодически
            измерять плотность и уровень электролита каждые 3000 км пробега.
            Если все показатели в норме, батарею все равно надо заряжать: зимой
            — каждый месяц, летом — каждые 6 месяцев. Для зарядки использовать
            ток, равный 1/10 емкости АКБ. Помните, что зимой при морозе возможно
            повреждение корпуса, которое происходит из-за замерзания жидкости в
            разряженном аккумуляторе, поэтому проверяйте аккумулятор на
            целостность.
          </p>
        )}
      </div>
      <div className={styles.qism}>
        <div className={styles.svlqismi}>
          <p className={styles.prg}>Как продлить срок службы аккумулятора?</p>
          <button className={fiveI && styles.rt}
            onClick={() => {
              twoI === true && setTwoI(!twoI);
              fourI === true && setFourI(!fourI);
              threeI === true && setThreeI(!threeI);
              oneI === true && setOneI(!oneI);
              setFiveI(!fiveI);
            }}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        {fiveI && (
          <p className={fiveI&&styles.krqism}>
            Вам достаточно придерживаться нескольких основных правил: Заглушив
            мотор, нужно проверить, выключены ли все электроприборы. При
            отключении АКБ от блока питания надо сразу выключать провод со
            знаком минус. Избегайте саморазряда батареи. Постоянно контролируйте
            места соединения клемм с аккумулятором. Если вы не пользуетесь
            батареей, не слив при этом с нее электролит, надо постоянно заряжать
            ее и проверять плотность и уровень жидкости. Необходимо периодически
            измерять плотность и уровень электролита каждые 3000 км пробега.
            Если все показатели в норме, батарею все равно надо заряжать: зимой
            — каждый месяц, летом — каждые 6 месяцев. Для зарядки использовать
            ток, равный 1/10 емкости АКБ. Помните, что зимой при морозе возможно
            повреждение корпуса, которое происходит из-за замерзания жидкости в
            разряженном аккумуляторе, поэтому проверяйте аккумулятор на
            целостность.
          </p>
        )}
      </div>
    </div>
  );
}
