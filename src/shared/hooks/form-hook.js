import { useCallback, useReducer } from "react";
// reducer function for useReducer hook
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      // replace the state entirely so don't spread the object
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};
export const useForm = (initialInputs, initialFormValidity) => {
  // useReducer
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  // functionality to update formstate when we receive the form data from a db(currently simulated)
  const setFormData = useCallback((inputData, formValidity) => {
    // we dispatch this action to the reducer
    //inputs,formIsValid are accessed using action.inputs and action.formIsValid
    //SET_DATA is accessed using action.SET_DATA
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);
  // retrun
  return [formState, inputHandler, setFormData];
};
