import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";
import { CSSTransition } from "react-transition-group";
const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      {/*if onSubmit function is passed from props we bind the passed onSubmit
      else we pass inline function where we get the event and call event.preventDefault */}
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {/*props.children - will render whatever is between the Modal tag */}
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <BackDrop onClick={props.onCancelBackdropClick} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        {/*...props-Forward all props from modal component to modal overlay
        This allows us to pass header, footer ,footerClass, contentClass as props to modaloverlay from the modal component
        */}
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
