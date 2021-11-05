# Advanced State Management Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced state management**. During this sprint, you studied **the reducer pattern, and redux**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Introduction

In this challenge, you are to build a Smurfs village database utilizing Redux as your state management system. Build this challenge from the ground up using what you have learned about state management.

## Project Setup

- [ ] Run npm install to install your dependencies.
- [ ] Run npm start to run your frontend and backend code automatically.
- [ ] Note your backend code will run automatically when your run npm start. There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions

In this project, you will build the reducer, actions and basic redux connects nessiary to display smurf data. You will be implementing both thunk and traditional redux actions.

## API documentation

- **[GET]** to `http://localhost:3333/smurfs`: returns the list of all smurfs objects.
- **[POST]** to `http://localhost:3333/smurfs`: creates a new smurf object. Pass smurf data through the `body` of the request.

- **Smurf Object Structure**

```js
[
  {
    id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    name: "Poppa Smurf",
    position: "Village Leader",
    nickname: "Pops",
    description:
      "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
  },
];
```

## Project Requirements

#### Complete reducers/index.js

Add in the needed state and reducer cases to hold and modify smurf error messages, loading status and smurf data. **If at all possible, add in action cases one at a time, instead of all at once. Test your state connects and reducer cases as nessisary.**

- [ ] Adds the following state values into the initialState:

  - an array of smurfs
  - a boolean indicating if the app is loading
  - a string indicating a possible error message

- [ ] Add in the arguments needed to complete a standard reducer function.
- [ ] Add in a reducer case to accommodate the start of a smurf fetch.
- [ ] Add in a reducer case to accommodate the successful smurf api fetch.
- [ ] Add in a reducer cases to accommodate an error.
- [ ] Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, description and an internally generated id) into your smurf list.
- [ ] Add in a reducer case that adds in a value to the error message.

### Complete index.js

Connect your application to reducer through redux with the thunk and logger middleware packages attached.

### Complete actions/index.js

Add in the action creators and action constants needed to add a smurf to state and fetch smurfs from the server. **If at all possible, add in action cases one at a time, instead of all at once. Test your state connects and reducer cases as nessisary.**

- [ ] Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive all smurfs from the api. Save the result of to our state and show an error if one is made.
- [ ] Add a standard action that allows us to add new smurf (including the name, nickname, position, summary).
- [ ] Add a standard action that allows us to set the value of the error message slice of state.

### Complete App.js

Connect component to the fetchSmurfs action.

- [ ] Connect the fetchSmurfs actions to the App component.
- [ ] Call the fetchSmurfs action when the component first loads.

### Complete components/SmurfList.js

Connect this component to your smurfs and loading screen state slices.

- [ ] Connect the smurfs and loading state values to the SmurfList component.
- [ ] Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
- [ ] Replace the static isLoading variable with the state loading variable.

### Complete components/AddForm.js

Connect this component to the error state slice, setError and addSmurf actions. Complete the form handling code.

- [ ] Connect your error state slice, setError and addSmurf actions to the AddForm component.
- [ ] Replace all instances of the errorMessage static variable with your error message state slice.
- [ ] Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when validation code fails.
- [ ] Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.

## Important Notes:

- Again, unlike other projects, the local server used here can not be accessed through the browser. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.
- Note that a test file `codegrade.test.js` is include with some simple, baseline tests for your submission. Please make sure they pass before considering your project complete.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.

## Submission format

- [ ] Submit via Codegrade by commiting and pushing any new changes to **your main branch.**
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
- [ ] New commits will be evaluated by Codegrade if pushed before the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

   The main issue that the Context API helps solve is that of passing data into subcomponents. Without the Context API, you would have to use props in a parent-to-child relationship between two components. Allowing the child to access the props/properties originating in the parent component. With props, maintaining consistency in spelling, usage(having to go back into the parent component to see what you called the property so you can access it in the child component), and nesting (when you have to pass data more than one level deep like Parent prop < child prop < grandchild prop) is all very cumbersome. The other way to pass data into subcomponents is with redux and the reducer pattern along with "connect" functions, which means a lot of boilerplate code to set up. The Context API allows you to simply pass data from as far away as you want using a context provider which can be referenced/used from any sub-level component within that context provider.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are functions that return objects with type and payload properties. Reducers are functions that take in a copy of the application state and an action object. Based on that action object the function will "reduce" down to a new version of the application state. Allowing us to create and return a new version of the application state based on some type of action. The store is a tree-like object which holds our application state. It can not be directly changed or mutated, but only redefined or updated, like a combination of a const and let variable declaration. The store is known as a single source of truth because it can only have one state at a time, meaning that our entire application is based on this one instance of the store. These parts work together as follows: an action is passed into a dispatch function that calls our reducer with our current state and that action. Our reducer returns a new version of the application state based on the action. The dispatch will take that new version of the application state and update our application store.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux thunk allows us to return and run a function in the action creation step and dispatch more actions within that function. That function usually has asynchronous actions that need to be waited upon to change state in some sequential order like fetch Start, fetch Success, and fetch Error. These "actions" would all change state but are based upon some asynchronous task like fetching from an API. This changes our action creators because instead of returning an object, they are returning a function.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

   Redux is by far my favorite because of how simple it is to change our state, just dispatch an action, and boom, you can access that state from anywhere in your application. Redux also helps with the separation of concerns, keeping our creation of initial state and new state in separate places. It is also far more efficient because you don't have to pass the state down through props, and re-rendering will only happen with components tied to a specific state. I'm impressed by whoever made it.
