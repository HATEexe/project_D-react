export default function Orderwindow() {
  return (
    <>
      <div className="order__window">
        <form action="put email here">
          <span>Тип услуги</span>
          <input type="text" placeholder="UI/UX Дизайн" />

          <span>Фамилия</span>
          <input type="text" placeholder="Иванов" />

          <span>Имя</span>
          <input type="text" placeholder="Иван" />

          <span>Отчество</span>
          <input type="text" placeholder="Иванович" />

          <span>Номер телефона</span>
          <input type="text" placeholder="+7(900)999-99-99" />

          <span>Или электронную почту</span>
          <input type="text" placeholder="Email" />

          <button type="submit">ОТПРАВИТЬ</button>
        </form>
      </div>
    </>
  );
}
