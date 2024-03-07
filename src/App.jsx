import { useState } from "react";
import "./index.scss";
import "macro-css";
import Slider from "./Components/Slider";

function App() {
  const [count, setCount] = useState(0);

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
              <button>Связаться</button>
            </ul>
          </div>
        </nav>
        <section className="main">
          <div className="d-flex justify-between left__main-block">
            <div>
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
            <input className="first-input" value="Тип" />
            <img className="input__arrow" src="./img/arrow.svg" alt="" />
            <input className="second-input" placeholder="Твой email" />
            <button>Подать заявку</button>
          </div>
        </section>
        <section className="values">
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
                    <img src="./img/Value/r-1.svg" alt="" />
                  </div>
                  <div className="value__right-textblock">
                    <h3>Мы всегдо открыты</h3>
                    <p>Открытость миру - залог успеха; </p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img src="./img/Value/r-2.svg" alt="" />
                  </div>
                  <div className="value__right-textblock">
                    <h3>Задача-Решение</h3>
                    <p>Ваши задачи - наше решения; </p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img src="./img/Value/r-3.svg" alt="" />
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
        <section className="advantages">
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
        <section className="reviews">
          <div className="reviews-highblock">
            <h3>Отзывы студентов</h3>
            <p>
              Мы стараемся получать только положительные отзывы о своей работе
            </p>
          </div>
          <Slider />
        </section>
      </div>
    </>
  );
}

export default App;
