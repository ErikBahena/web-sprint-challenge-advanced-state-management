# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

   The main issue that the Context API helps solve is that of passing data into subcomponents. Without the Context API, you would have to use props in a parent-to-child relationship between two components. Allowing the child to access the props/properties originating in the parent component. With props, maintaining consistency in spelling, usage(having to go back into the parent component to see what you called the property so you can access it in the child component), and nesting (when you have to pass data more than one level deep like Parent prop < child prop < grandchild prop) is all very cumbersome. The other way to pass data into subcomponents is with redux and the reducer pattern along with "connect" functions, which means a lot of boilerplate code to set up. The Context API allows you to simply pass data from as far away as you want using a context provider which can be referenced/used from any sub-level component within that context provider.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are functions that return objects with type and payload properties. Reducers are functions that take in a copy of the application state and an action object. Based on that action object the function will "reduce" down to a new version of the application state. Allowing us to create and return a new version of the application state based on some type of action. The store is a tree-like object which holds our application state. It can not be directly changed or mutated, but only redefined or updated, like a combination of a const and let variable declaration. The store is known as a single source of truth because it can only have one state at a time, meaning that our entire application is based on this one instance of the store. These parts work together as follows: an action is passed into a dispatch function that calls our reducer with our current state and that action. Our reducer returns a new version of the application state based on the action. The dispatch will take that new version of the application state and update our application store.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux thunk allows us to return and run a function in the action creation step and dispatch more actions within that function. That function usually has asynchronous actions that need to be waited upon to change state in some sequential order like fetch Start, fetch Success, and fetch Error. These "actions" would all change state but are based upon some asynchronous task like fetching from an API. This changes our action creators because instead of returning an object, they are returning a function.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

   Redux is by far my favorite because of how simple it is to change our state, just dispatch an action, and boom, you can access that state from anywhere in your application. Redux also helps with the separation of concerns, keeping our creation of initial state and new state in separate places. It is also far more efficient because you don't have to pass the state down through props, and re-rendering will only happen with components tied to a specific state. I'm impressed by whoever made it.
