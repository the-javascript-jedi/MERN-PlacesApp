import React, { useReducer, useEffect } from "react";
import { validate } from "../../../util/validators";
import "./Input.css";
const InputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      // make a copy of the state and add two new keys
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};
const Input = (props) => {
  // useReducer similar to useState- useful for more complex functions
  //requires a reducer function and an optional initial state
  //useReducer returns 2 elements, a current state and a dispatch function, used to dispatch actions to the reducer function, which will return a new state and re-render the component
  const [inputState, dispatch] = useReducer(InputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  // useEffect
  useEffect(() => {
    onInput(id, value, isValid, onInput);
  }, []);

  // changeHandler for Input element
  const changeHandler = (event) => {
    // dispatch to the useReducer function hook
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      // validators is passed from the input component
      validators: props.validators,
    });
  };
  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  // if props.element is an input element display an input element or display a textarea
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* if input is invalid- render an error message */}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;
///////////////////////////////////////////////////////////////////////////////////////////
