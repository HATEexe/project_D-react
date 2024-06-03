import { NavLink } from "react-router-dom";

import "./Header.css";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

export default function Header() {
  return (
    <header>
      <div className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/" className={setActive}>
              Главная
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/works" className={setActive}>
              Работы
            </NavLink>
          </li>
          <li className="header__logo">
            <span className="colored">Brain</span>
            <span>Deadsers</span>
          </li>
          <li className="header__item">
            <NavLink to="/service" className={setActive}>
              Услуги
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/vacancies" className={setActive}>
              Вакансии
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
