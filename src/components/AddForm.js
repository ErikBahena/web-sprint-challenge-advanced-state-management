import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { checkIfValuesAreEmpty } from "../helpers";

// actions
import { setError, addSmurf } from "../actions";

const initalFormValues = {
  name: "",
  position: "",
  nickname: "",
  description: "",
};

const AddForm = ({ errorMessage, dispatch }) => {
  // Setting state to initialFormValues so I can clear the form after the form submit in an easier way.
  const [state, setState] = useState(initalFormValues);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfValuesAreEmpty(state.name, state.position, state.nickname)) {
      dispatch(
        setError(
          "The name, position, and nickname sections must be filled out."
        )
      );
    }

    if (!checkIfValuesAreEmpty(state.name, state.position, state.nickname)) {
      axios.post("http://localhost:3333/smurfs", state).then((res) => {
        const newSmurf = res.data[res.data.length - 1];
        dispatch(addSmurf(newSmurf));
      });
      setState(initalFormValues);
    }
  };

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button onClick={handleSubmit}>Submit Smurf</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
  };
};

// I did not do mapActionsToProps because I think it's just simpler to import the actions and use them in a "global" context then to  map them into props, reference them from props and have to import them anyways.
export default connect(mapStateToProps)(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.

// What is the whole point of posting with axios if we are just going to dipatch this as a plain action with some data? It would make sense that after we post our data, we fetch again, then set that response as our new data. Or create a useEffect based on the smurfs array and once it updates then rerender our App.js. I guess since the server is not persistent then it doesn't matter anyway. Still seems unclear in the directions.

//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
