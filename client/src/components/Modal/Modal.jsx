import React, { FC } from "react";
import style from './Modal.module.css'
import ReactDOM from "react-dom";

const portalDiv = document.getElementById("portal");

const Modal = ({
  children,
  visible,
  onCancel,
}) => {
  if (!visible) return null;

  return portalDiv
    ? ReactDOM.createPortal(
        <div
          className={style.modal}
          onClick={onCancel}
        >
          <div className={style.body} onClick={(event) => event.stopPropagation()}>{children}</div>
        </div>,
        portalDiv
      )
    : null;
};

export default Modal;
