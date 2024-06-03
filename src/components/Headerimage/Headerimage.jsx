import "./Headerimage.css";
import imgLink from "../../headerImg";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Headerimage() {
  const { pageid } = useParams();
  let pageNum = 0;

  switch (pageid) {
    case "":
      break;
    case "works":
      pageNum = 1;
      break;
    case "service":
      pageNum = 2;
      break;
    case "vacancies":
      pageNum = 3;
      break;
  }
  //TODO через useState отображение секции с оценкой
  //TODO через useState отображение окна для заказа при нажатии на кнопку

  return (
    <div className="container">
      <div className="pseudo__btn">
        <span>{imgLink[pageNum].pseudoText}</span>
      </div>
      <div className="main__text">
        <span>
          <span>
            Мы - <span className="colored">Brain</span>Deadsers,
          </span>
        </span>
        <span> {imgLink[pageNum].label}</span>
      </div>
      <div className="order__background">
        <img
          className={imgLink[pageNum].animatedImg}
          src={imgLink[pageNum].link}
        />
        <img class="background__ellipse" src="img/ellipse.png" />
      </div>
      <div class="order__section">
        <div
          class="grade__section"
          style={{ display: imgLink[pageNum].gradeSection }}
        >
          <ul class="grade__list">
            <li class="grade_item">
              <img src="/img/star.png" />
            </li>
            <li class="gradeListItem">
              <img src="/img/star.png" />
            </li>
            <li class="gradeListItem">
              <img src="/img/star.png" />
            </li>
            <li class="gradeListItem">
              <img src="/img/star.png" />
            </li>
            <li class="gradeListItem">
              <img src="/img/star.png" />
            </li>
          </ul>
          <div class="order__experience">
            <span className="order__year">5 ЛЕТ</span>
            <span>на рынке</span>
          </div>
        </div>
      </div>
    </div>
  );
}
