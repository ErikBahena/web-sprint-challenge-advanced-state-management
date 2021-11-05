import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const SET_ERROR = "SET_ERROR";
export const ADD_SMURF = "ADD_SMURF";

//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
  };
};
//Task List:

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (newSmurf) => {
  return {
    type: ADD_SMURF,
    payload: newSmurf,
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = (newPerson) => {
  return {
    type: FETCH_SUCCESS,
    payload: newPerson,
  };
};

export const fetchError = (errorMessage) => {
  return {
    type: FETCH_ERROR,
    payload: errorMessage,
  };
};

//3. Add a standard action that allows us to set the value of the error message slice of state.
export const setError = (errorMessage) => {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  };
};
