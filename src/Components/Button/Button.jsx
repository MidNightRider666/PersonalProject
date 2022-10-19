import React from "react";
import css from "./Button.module.scss";

function Button(props) {
  const extraBtn = props.btnPrimary
    ? css.btnPrimary
    : props.RegLog
    ? css.RegLog
    : props.back
    ? css.back
    :"";
  return (
    <button
      disabled={props.dissable}
      onClick={props.onClick}
      className={`${css.btn} ${extraBtn}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
