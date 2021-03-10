import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from "./UserPlaces";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceForm.css";
// import the custom hook
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
const UpdatePlace = () => {
  ///useState hook
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  //custom hook
  // pass the initial form values and form validity as arguments to the custom hook
  //returns an array with the formState,inputHandler,setFormData which can be destructured
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  // check if the place passed in url params is present in the data
  //we set identified place here to simulate an asynchronous data loading action
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  // we call the setFormData function from the useForm hook after getting the identifiedPlace
  // if we call setFormData directly we dispatch an action to the inputHandler in useForm hook and that will ruun the reducer an produce a new state component will re-render and will have an infinite loop, so we must use the useEffect hook in our function
  useEffect(() => {
    console.log("identifiedPlace", identifiedPlace);
    // if identifiedPlace is present
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    // setIsLoading flag to update the form
    setIsLoading(false);
    //dependency identifiedPlace will not change because due to same URL data will always be the same
    //setFormData is wrapped in useCallback so that it also woný change
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(formState.inputs);
  };
  // return error message if no form element is present
  if (!identifiedPlace) {
    return (
      <Card>
        <h2>Could Not find Place!</h2>
      </Card>
    );
  }
  //currently initial values are being loaded so we make a check and render form if formState.inputs.title.value has any value
  //below we make a check if the formState.inputs.title.value does not have any values so we use a flag IsLoading to check that
  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading!!!</h2>
      </div>
    );
  }

  // return form with identifiedPlace data
  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description (min. 5 characters)'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};
export default UpdatePlace;
