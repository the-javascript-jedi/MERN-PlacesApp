import React, { useCallback, useReducer } from "react";
import "./NewPlace.css";
import Input from "../../../shared/components/FormElements/Input/Input";
import Button from "../../../shared/components/FormElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      // for in loop used for traversing objects-title,description key
      for (const inputId in state.inputs) {
        // check if input we are looking at is the input getting updated
        if (inputId === action.inputId) {
          // action.isValid - from dispatched action
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      // return the state with updated isValid state for the input box and overall form validity
      return {
        ...state,
        inputs: {
          ...state.inputs,
          //title,description state
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        // overall form validity
        isValid: formIsValid,
      };
    default:
      return state;
  }
};
const NewPlace = () => {
  // useReducer gets a reducer function and an initial state as arguments
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    // overall form validity
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className='place-form' onSubmit={placeSubmitHandler}>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
      />
      <Input
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description.(atleast 5 characters)'
        onInput={inputHandler}
      />
      <Button type='submit'>Add Place</Button>
    </form>
  );
};

export default NewPlace;
