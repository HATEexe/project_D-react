import { NavLink } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__head-text">
          <span>Давайте сотрудничать!</span>
        </div>
        <hr
          style={{
            marginTop: "20px",
            background: "white",
            height: "3px",
          }}
        />
        <div className="footer__grid">
          <div className="footer__copyright">
            <div className="footer__logo">
              <span className="colored">Brain</span>
              <span>Deadsers</span>
            </div>
            <span>
              どうにかこうにか、その他誰も読まない法律上のナンセンス、なぜなら？そして、誰もが疑問に思います。登録時には一方が無傷だったのに、最終的にはもう一方がなぜだったのでしょうか?
            </span>
          </div>
          <div className="footer__nav">
            <div className="footer__title">
              <span>Навигация</span>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink to="/">Главная</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/works">Работы</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/service">Услуги</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/vacancies">Вакансии</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <div className="footer__title">
              <span>Контакты</span>
            </div>
            <ul className="footer__list">
              <li className="footer__item">+7 (999) 999-99-99</li>
              <li className="footer__item">kakayato@pochta.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
