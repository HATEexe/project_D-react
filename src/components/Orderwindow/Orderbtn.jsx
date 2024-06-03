import Orderwindow from "./Orderwindow";

export default function Orderbtn(onClick) {
  return (
    <>
      <button className="order__btn" onClick={onClick}>
        ЗАКАЗАТЬ
      </button>
    </>
  );
}
