import "../styles/inputCard.css";
import Input from "./Input";

import arrow from "../assets/arrow.svg";

export default function InputCard({ icon, title, isActive, onShow, children }) {
  return (
    <div className="card-container" onClick={onShow}>
      <div className="title-container">
        <img src={icon} alt="" />
        <h2>{title}</h2>
        <img className={isActive && "rotate"} src={arrow} alt="" />
      </div>
      {isActive && children}
    </div>
  );
}
