import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";
const SideDrawer = (props) => {
  const content = (
    // in={props.show} - tell sidebar when the sidebar is visible
    // classNames - special classname for CSSTransition
    // mountOnEnter unmountOnExit- aside should only be added to dom when it becomes visible or invisible
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
