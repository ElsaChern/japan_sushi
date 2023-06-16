import React from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";

const Backdrop = ({ hideCart }) => {
  return <div className="backdrop" onClick={hideCart}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
