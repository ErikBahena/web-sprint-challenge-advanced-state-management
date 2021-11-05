import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_ERROR,
  ADD_SMURF,
} from "../actions/index.js";

export const initialState = {
  smurfs: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        smurfs: [],
        isLoading: true,
        errorMessage: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        errorMessage: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        errorMessage: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,

        // In this case, the UX is better if the user can see their newly created smurf closer to the form. So I'm placing the order of smurfs as [previous smurfs, new smurf].
        smurfs: [...state.smurfs, action.payload],
        isLoading: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
