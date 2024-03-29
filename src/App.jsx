import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import "macro-css";
import Slider from "./Components/Slider/Slider";
import { useState } from "react";
import Modal from "./Components/Modal/Modal";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState("Тип");

  const main = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "0% 50%",
    },
  });

  const values = gsap.timeline({
    scrollTrigger: {
      trigger: ".values",
      start: "10% 50%",
    },
  });
  const advantages = gsap.timeline({
    scrollTrigger: {
      trigger: ".advantages",
      start: "17% 50%",
    },
  });
  const reviews = gsap.timeline({
    scrollTrigger: {
      trigger: ".reviews",
      start: "30% 50%",
    },
  });

  const how = gsap.timeline({
    scrollTrigger: {
      trigger: ".how",

      start: "40% 50%",
    },
  });

  const secondmain = gsap.timeline({
    scrollTrigger: {
      trigger: ".second__main",

      start: "50% 50%",
    },
  });

  const cost = gsap.timeline({
    scrollTrigger: {
      trigger: ".cost",
      start: "60% 70%",
    },
  });

  const guarantees = gsap.timeline({
    scrollTrigger: {
      trigger: ".guarantees",

      start: "75% 80%",
    },
  });

  const appRef = useRef(null);
  const appValues = useRef(null);
  const appAdvantages = useRef(null);
  const appReviews = useRef(null);
  const appHow = useRef(null);
  const appSecondMain = useRef(null);
  const appCost = useRef(null);
  const appGuarantees = useRef(null);

  useLayoutEffect(() => {
    gsap.context(() => {
      gsap.from(".left__main-block-anim", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        x: -300,
      });
      gsap.from(".right__img", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        x: 300,
      });
      gsap.from(".input__block", {
        opacity: 0,
        duration: 1,
        delay: 1,
        y: 40,
      });
    });
  }, appRef);

  useLayoutEffect(() => {
    gsap.context(() => {
      values
        .from(
          ".values__pos-a-2",
          {
            opacity: 0,
            duration: 0.8,
            y: -40,
            x: 40,
          },
          0.4
        )
        .from(
          ".values__pos-a-5",
          {
            opacity: 0,
            duration: 0.8,
            x: 40,
          },
          0.6
        )
        .from(
          ".values__pos-a-6",
          {
            opacity: 0,
            duration: 0.8,
            y: 20,
            x: 10,
          },
          0.8
        )
        .from(
          ".values__pos-a-4",
          {
            opacity: 0,
            duration: 0.4,
            y: 10,
            x: -20,
          },
          1
        )
        .from(
          ".values__pos-a-3",
          {
            opacity: 0,
            duration: 0.4,
            x: -20,
          },
          1.2
        )
        .from(
          ".values__pos-a-1",
          {
            opacity: 0,
            duration: 0.4,
            y: -20,
            x: -40,
          },
          1.4
        )
        .from(
          ".values__right-title",
          {
            opacity: 0,
            duration: 0.4,

            x: -20,
          },
          0.4
        )

        .from(
          ".values__right-subtitle",
          {
            opacity: 0,
            duration: 0.4,

            x: -20,
          },
          0.6
        )

        .from(
          ".values-img",
          {
            opacity: 0,
            duration: 0.4,
            x: -20,
            stagger: 0.6,
          },
          0.8
        )
        .from(
          ".value__right-textblock",
          {
            opacity: 0,
            duration: 0.4,
            x: -10,
            stagger: 0.6,
          },
          1.2
        )
        .from(".our__value-text", {
          opacity: 0,
          duration: 0.4,
          x: -20,
          stagger: 0.6,
        });
    });
  }, appValues);

  useLayoutEffect(() => {
    gsap.context(() => {
      advantages
        .from(".advantages__highblock", {
          opacity: 0,
          duration: 0.2,
          delay: 0.5,
        })
        .from(".grid-subtitle", {
          opacity: 0,
          duration: 0.2,
          delay: 0.5,
        })
        .from(
          ".grid-card",
          {
            opacity: 0,
            duration: 0.2,
            delay: 0.7,
            y: 50,
            stagger: 0.4,
          },
          0.2
        );
    });
  }, appAdvantages);

  useLayoutEffect(() => {
    gsap.context(() => {
      reviews
        .from(".reviews-highblock", {
          opacity: 0,
          duration: 0.2,
          delay: 0.7,
          y: -50,
        })
        .from(".slider-anim", {
          opacity: 0,
          duration: 0.2,
          delay: 0.4,
          x: -50,
        });
    });
  }, appReviews);

  useLayoutEffect(() => {
    gsap.context(() => {
      how
        .from(".how__highblock", {
          opacity: 0,
          duration: 0.2,
          delay: 0.4,
          y: -50,
        })
        .from(".how__card", {
          opacity: 0,
          duration: 0.2,
          delay: 0.4,
          x: -50,
        })
        .from(
          ".how-1",
          {
            opacity: 0,
            duration: 0.2,
            delay: 0.4,
            x: -50,
          },
          0.8
        )
        .from(".how-arrow-1", {
          opacity: 0,
          duration: 0.2,
          delay: 0.4,
          x: -50,
        })
        .from(
          ".how-2",
          {
            opacity: 0,
            duration: 0.2,
            delay: 0.6,
            x: -50,
          },
          1.6
        )

        .from(".how-arrow-2", {
          opacity: 0,
          duration: 0.3,
          delay: 0.4,
          x: -50,
        })
        .from(
          ".how-3",
          {
            opacity: 0,
            duration: 0.2,
            delay: 0.8,
            x: -50,
          },
          2.6
        )
        .from(".how-arrow-3", {
          opacity: 0,
          duration: 0.3,
          delay: 0.4,
          x: -50,
        })
        .from(
          ".how-4",
          {
            opacity: 0,
            duration: 0.2,
            delay: 1,
            x: -50,
          },
          3.5
        )
        .from(".how-arrow-4", {
          opacity: 0,
          duration: 0.3,
          delay: 0.4,
          x: -50,
        })
        .from(
          ".how-5",
          {
            opacity: 0,
            duration: 0.2,
            delay: 1.2,
            x: -50,
          },
          4.5
        );
    });
  }, appHow);

  useLayoutEffect(() => {
    gsap.context(() => {
      secondmain
        .from(".left-mainsecond", {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
          x: -300,
        })
        .from(".right-mainsecond-block", {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
          x: 300,
        });
    });
  }, appSecondMain);

  useLayoutEffect(() => {
    gsap.context(() => {
      cost
        .from(".cost__highblock", {
          opacity: 0,
          duration: 0.2,
          delay: 0.5,
        })
        .from(".grid-subtitle", {
          opacity: 0,
          duration: 0.2,
          delay: 0.5,
        })
        .from(
          ".cost-grid-card",
          {
            opacity: 0,
            duration: 0.2,
            delay: 0.7,
            y: 50,
            stagger: 0.4,
          },
          0.2
        );
    });
  }, appCost);

  useLayoutEffect(() => {
    gsap.context(() => {
      guarantees
        .from(
          ".guarantees-title",
          {
            opacity: 0,
            duration: 0.4,
            x: -20,
          },
          0.4
        )
        .from(
          ".guarantees-subtitle",
          {
            opacity: 0,
            duration: 0.4,

            x: -20,
          },
          0.6
        );
    });
  }, appGuarantees);

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="container">
        <nav className="d-flex justify-between align-center">
          <div className="d-flex align-center n-l">
            <img src="./public/img/logo.svg" alt="" />
            <p>Ed-Help</p>
          </div>
          <div>
            <ul className="d-flex align-center n-r-ul ">
              <li>О нас</li>
              <li>Отзывы</li>
              <li>Услуги</li>
              <button className="nav__button">Связаться</button>
            </ul>
          </div>
        </nav>
        <section className="main" ref={appRef}>
          <div className="d-flex justify-between left__main-block">
            <div className="left__main-block-anim">
              <h1>Помогаем всем студентами</h1>
              <p className="left__main-block-p">
                Димпломные, курсовые работы и .т.п
              </p>
              <p>
                Ты сможешь успешно сдать и защитить курсовую или <br></br>
                другую работу без пересдачь, вместе с хорошо написанной работой
              </p>
            </div>
            <div className="pos-r right__img-block">
              <img
                className="pos-a right__img"
                src="./img/main-img.png"
                alt=""
              />
              <img className="pos-a right__bg" src="./img/main-bg.png" alt="" />
            </div>
          </div>
          <div className="input__block">
            <input
              onClick={() => setIsActive(!isActive)}
              className="first-input"
              value={select}
            />
            <div className={isActive === true ? "active" : "dropdown"}>
              <p onClick={() => setSelect("1")}>1</p>
              <p>2</p>
            </div>
            <img className="input__arrow" src="./img/arrow.svg" alt="" />
            <input className="second-input" placeholder="Твой email" />
            <button onClick={() => setModalActive(true)}>Подать заявку</button>
          </div>
        </section>
        <section className="values" ref={appValues}>
          <img className="bg-img-1" src="./img/Background/1.png" alt="" />
          <div className="d-flex justify-between">
            <div className="values__left-block">
              <img
                className="pos-a values__pos-a-1"
                src="./img/Value/1.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-2"
                src="./img/Value/2.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-3"
                src="./img/Value/3.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-4"
                src="./img/Value/4.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-5"
                src="./img/Value/5.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-6"
                src="./img/Value/6.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="values__right-title">Наши ценности</h3>
              <p className="values__right-subtitle">
                Жизнь слишком коротка, чтобы тратить её на выполнение<br></br>
                бессмысленных заданий, поэтому лучше довериться профессионалам,
                которые могут oсвободить ваше время на исполнение желаний.
              </p>
              <div className="values__right-block">
                <div className="d-flex align-center">
                  <div>
                    <img
                      className="values-img"
                      src="./img/Value/r-1.svg"
                      alt=""
                    />
                  </div>
                  <div className="value__right-textblock">
                    <h3>Мы всегдо открыты</h3>
                    <p>Открытость миру - залог успеха; </p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img
                      className="values-img"
                      src="./img/Value/r-2.svg"
                      alt=""
                    />
                  </div>
                  <div className="value__right-textblock">
                    <h3>Задача-Решение</h3>
                    <p>Ваши задачи - наше решения; </p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img
                      className="values-img"
                      src="./img/Value/r-3.svg"
                      alt=""
                    />
                  </div>
                  <div className="value__right-textblock">
                    <h3>Жить сейчас</h3>
                    <p>
                      Не смотреть в прошлое, наслаждаться настоящим, быть
                      готовым к будущему
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="our__value-text">
                  Наши ценности реализуются в наших преимуществах.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="advantages" ref={appAdvantages}>
          <img className="bg-img-2" src="./img/Background/2.png" alt="" />
          <img className="bg-img-3" src="./img/Background/3.png" alt="" />
          <div className="advantages__highblock">
            <h3>Приемущества</h3>
            <p>То, что нас значительно отличает от других</p>
          </div>
          <div className="advantages__grid-card">
            <div className="card-1 grid-card">
              <img src="./img/GridCard/1.svg" alt="" />
              <h3>Контроль</h3>
              <p>Ежедневный контроль за процессом выполнения вашей работы</p>
            </div>
            <div className="grid-card card-2">
              <img src="./img/GridCard/2.svg" alt="" />
              <h3>Честность</h3>
              <p>Честное отношение к потребностям клиентов</p>
            </div>
            <div className="grid-card card-3">
              <img src="./img/GridCard/3.svg" alt="" />
              <h3>Понимание</h3>
              <p>Устойчивое понимание ваших истинных желаний и намерений</p>
            </div>
            <div className="grid-card card-4">
              <img src="./img/GridCard/4.svg" alt="" />
              <h3>Система расчёта</h3>
              <p>Комфортная система оплаты и расчета стоимости работ</p>
            </div>
            <div className="grid-card card-5">
              <img src="./img/GridCard/5.svg" alt="" />
              <h3>Лояльность</h3>
              <p>Накопительная карта лояльности для постоянных клиентов</p>
            </div>
            <div className="grid-card card-6">
              <img src="./img/GridCard/6.svg" alt="" />
              <h3>Скидки</h3>
              <p>Ежемесячные акции, бонусы и скидки</p>
            </div>
          </div>
          <div className="grid-subtitle">
            <p> Наши преимущества подтверждаются отношениями с клиентами </p>
          </div>
        </section>
        <section className="reviews" ref={appReviews}>
          <div className="reviews-highblock">
            <h3>Отзывы студентов</h3>
            <p>
              Мы стараемся получать только положительные отзывы о своей работе
            </p>
          </div>
          <Slider />
          <div className="r-block">
            <img className="bg-img-4" src="./img/Background/4.png" alt="" />
            <p className="reviews__subtitle">
              Если Вы хотите получить положительный результат от работы с нами,
              вам следует ознакомиться с порядком работы
            </p>
          </div>
        </section>
      </div>
      <section className="how">
        <img className="how-ellipse-1" src="./img/How/ellipse-1.png" alt="" />
        <div className="how__highblock">
          <h3>Как мы работаем</h3>
          <p>
            Процесс, в результате которого вы<br></br> получаете
            профессиональный результат
          </p>
        </div>
        <div className="how__block">
          <div className="how__card">
            <div>
              <img className="how-arrow-1" src="./img/How/arrow.png" alt="" />
              <img
                className="pos-a how-1 how-anim"
                src="./img/How/1.png"
                alt=""
              />
            </div>
            <h3>Материалы</h3>
            <p>Предоставление материала для оказания услуги </p>
          </div>
          <div className="how__card">
            <div>
              <img className="how-arrow-2" src="./img/How/arrow.png" alt="" />
              <img className="pos-a how-2" src="./img/How/2.png" alt="" />
            </div>
            <h3>Оценка</h3>
            <p>Оценка стоимости услуги</p>
          </div>
          <div className="how__card">
            <div>
              <img className="how-arrow-3" src="./img/How/arrow.png" alt="" />
              <img
                className="pos-a how-3  how-anim"
                src="./img/How/3.png"
                alt=""
              />
            </div>
            <h3>Предоплата</h3>
            <p>Внесение предоплаты 30%</p>
          </div>
          <div className="how__card">
            <div>
              <img className="how-arrow-4" src="./img/How/arrow.png" alt="" />
              <img
                className="pos-a how-4  how-anim"
                src="./img/How/4.png"
                alt=""
              />
            </div>
            <h3>Исполнение</h3>
            <p>Исполнение указанной услуги</p>
          </div>
          <div className="how__card">
            <div>
              <img
                className="pos-a how-5  how-anim"
                src="./img/How/5.png"
                alt=""
              />
            </div>
            <h3>Результат</h3>
            <p>Получение результата и окончательный расчет</p>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="second__main" ref={appSecondMain}>
          <div className="d-flex left-mainsecond">
            <div className="left-mainsecond-block">
              <h1>Что мы предлагаем?</h1>
              <p className="left-mainsecond-title">
                Димпломные, курсовые работы и .т.п
              </p>
              <p>
                Найдите ту услугу, которая вам необходима. Мы предложим то, в
                чём разбираемся больше всего
              </p>
            </div>
            <div className="right-mainsecond-block">
              <img
                className="bg-main-1"
                src="./img/Main-2/main-2-ellipse1.png"
                alt=""
              />
              <img
                className="bg-main-2"
                src="./img/Main-2/main-2-ellipse2.png"
                alt=""
              />
              <img
                className="bg-main-3"
                src="./img/Main-2/main-2-girl.png"
                alt=""
              />
            </div>
          </div>
          <div className="input__block">
            <input
              onClick={() => setIsActive(!isActive)}
              className="first-input"
              value={select}
            />
            <div className={isActive === true ? "active" : "dropdown"}>
              <p onClick={() => setSelect("1")}>1</p>
              <p>2</p>
            </div>
            <img className="input__arrow" src="./img/arrow.svg" alt="" />
            <input className="second-input" placeholder="Телефон" />
            <button>Узнать стоимость</button>
          </div>
        </section>
        <section className="cost">
          <img className="bg-img-2" src="./img/Cost/1.png" alt="" />
          <img className="bg-img-3" src="./img/Cost/2.png" alt="" />
          <div className="cost__highblock">
            <h3>Сколько стоит?</h3>
            <p>ТУзнайте из чего складывается стоимость работы</p>
          </div>
          <div className="cost-card">
            <div className="card-1 cost-grid-card">
              <img src="./img/Cost/icon-1.png" alt="" />
              <h3>Тип работ</h3>
              <p>
                В зависимости от типа работы (курсовая, контрольная, диплом и
                т.п.)
              </p>
            </div>
            <div className="cost-grid-card card-2">
              <img src="./img/Cost/icon-2.png" alt="" />
              <h3>Сроки</h3>
              <p>Чем больше срок - тем дешевле будет работа</p>
            </div>
            <div className="cost-grid-card card-3">
              <img src="./img/Cost/icon-3.png" alt="" />
              <h3>Уникальность</h3>
              <p>
                Взависимости от того, насколько уникальный проект вам необходим
              </p>
            </div>
            <div className="cost-grid-card card-4">
              <img src="./img/Cost/icon-4.png" alt="" />
              <h3>Объём работ</h3>
              <p>Количество страниц напрямую зависит на стоимость</p>
            </div>
            <div className="cost-grid-card card-5">
              <img src="./img/Cost/icon-5.png" alt="" />
              <h3>Тема работы</h3>
              <p>
                Если работа имеет узкую направленность, то стоимость будет выше
              </p>
            </div>
            <div className="cost-grid-card card-6">
              <img src="./img/Cost/icon-6.png" alt="" />
              <h3>Вуз</h3>
              <p>
                Оказывая помощь студентам, мы учитываем требования вашего ВУЗа
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="lets__start">
        <img className="how-bg-1" src="./img/LetsStart/bg-1.png" alt="" />
        <div className="how__highblock">
          <h3>Давайте начнём!</h3>
          <p>Укажите тип работы и опишите задачу, чтобы мы смогли вам помочь</p>
        </div>
        <div className="how__block">
          <div className="input__block">
            <input
              onClick={() => setIsActive(!isActive)}
              className="first-input"
              value={select}
            />
            <div className={isActive === true ? "active" : "dropdown"}>
              <p onClick={() => setSelect("1")}>1</p>
              <p>2</p>
            </div>
            <img className="input__arrow" src="./img/arrow.svg" alt="" />
            <input className="second-input" placeholder="Твой email" />
            <button>Подать заявку</button>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="guarantees">
          <img className="bg-1" src="./img/Guarantees/bg-1.png" alt="" />
          <div className="d-flex justify-between guarantees__wrapper">
            <div className="values__right-block">
              <img
                className="pos-a values__pos-a-1"
                src="./img/Guarantees/1.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-2"
                src="./img/Guarantees/2.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-3"
                src="./img/Guarantees/3.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-4"
                src="./img/Guarantees/4.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-5"
                src="./img/Guarantees/5.png"
                alt=""
              />
              <img
                className="pos-a values__pos-a-6"
                src="./img/Guarantees/6.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="guarantees-title">Наши Гарантии</h3>
              <p className="guarantees-subtitle">
                Мы создаём не просто работ, но и гарантируем<br></br> их
                качество и уникальность
              </p>
              <div className="guarantees-block">
                <div className="d-flex align-center">
                  <div>
                    <img src="./img/Guarantees/icon-1.png" alt="" />
                  </div>
                  <div className="guarantees-textblock">
                    <h3>Официально</h3>
                    <p>
                      Выбирая Ed-Help, вы заключаете соглашение<br></br> с
                      юридическим лицом
                    </p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img src="./img/Guarantees/icon-2.png" alt="" />
                  </div>
                  <div className="guarantees-textblock">
                    <h3>Законно</h3>
                    <p>
                      Работаем в соответствии с законом, действующими<br></br>{" "}
                      на территории Российской Федерации
                    </p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img src="./img/Guarantees/icon-3.png" alt="" />
                  </div>
                  <div className="guarantees-textblock">
                    <h3>Конфиденциальность</h3>
                    <p>
                      Мы соблюдаем <span>политику конфиденциальности</span>
                      <br></br> и не разглашаем данные клиентов третьим лицам
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="uniqueness">
          <div>
            <div className="input__block">
              <div className="input__hightitle">
                <h3>Уникальность работы</h3>
                <p>
                  Мы вышлем гайд по повышению уникальности в разных системах
                  проверки
                </p>
              </div>
              <div className="input__m-block">
                <input className="first-input" placeholder="Имя" />
                <img className="input__arrow" src="./img/arrow.svg" alt="" />
                <input
                  className="second-input"
                  placeholder="Введите вашу почту"
                />
                <button>Отправить</button>
              </div>
            </div>
          </div>
        </section>
        <Modal active={modalActive} setActive={setModalActive} />
        <footer className="footer">
          <img
            className="footer-bg-1"
            src="./img/Footer/footer-bg-1.png"
            alt=""
          />

          <div className="footer__wrapper">
            <div className="d-flex align-center justify-between footer__highblock">
              <div className="d-flex footer__highleft-block">
                <p>+7 (903) 543-01-89</p>
                <p>info@edhelp.ru</p>
              </div>
              <div className="footer__highright-block">
                <img src="./img/Footer/icon-1.png" alt="" />
                <img src="./img/Footer/icon-2.png" alt="" />
                <img src="./img/Footer/icon-3.png" alt="" />
                <img src="./img/Footer/icon-4.png" alt="" />
              </div>
            </div>
            <div className="footer__bottomblock d-flex justify-between">
              <div>
                <div className="d-flex align-center logo__block">
                  <img src="./img/Footer/logo.svg" alt="" />
                  <p className="logo__text">Ed-Help</p>
                </div>
                <p>
                  Сервис подготовки студентов к написанию дипломных, курсовых и
                  иных типов работ, необходимых для сдачи
                </p>
              </div>
              <div>
                <ul className="d-flex flex-column column-block">
                  <li>
                    <span>Сервис</span>
                  </li>
                  <li>О нас</li>
                  <li>Отзывы</li>
                  <li>Услуги</li>
                  <li>Связаться</li>
                </ul>
              </div>
              <div>
                <ul className="d-flex flex-column column-block">
                  <li>
                    <span>Документы</span>
                  </li>
                  <li>Договор начала работ</li>
                  <li>Прайс лист</li>
                  <li>Договор Оферты</li>
                  <li>Политика конфиденциальности</li>
                </ul>
              </div>
              <div>
                <ul className="d-flex flex-column column-block">
                  <li>
                    <span>Ссылки</span>
                  </li>
                  <li>Уникальность работы</li>
                  <li>Курсовые</li>
                  <li>Дипломные</li>
                  <li>Все статьи</li>
                </ul>
              </div>
            </div>
            <div className="footer__copyright">
              <p>© Все права защищены 2020-2021</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
