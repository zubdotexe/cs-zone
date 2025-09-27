## What is JSX, and why is it used?
JSX stands for JavaScript XML, which provides us with the opportunity to write HTML like syntax in JavaScript. This makes it easier to build UIs in React. Also, we can write JS syntax inside curly braces in JSX for dynamic data. Ultimately, JSX is transformed into traditional JS by tools like Babel before being executed by the browser.

## What is the difference between State and Props?
State is used to contain data that is displayed on the UI. Any change in the state triggers React to re-render the component that owns the state.

On the other hand, props are properties that are passed from the parent to the child components and not the other way around. Also, props are read-only which means the receiving child component cannot modify them. Furthermore, we can pass states, functions and even components as props.

## What is the useState hook, and how does it work?
The useState hook is used to create and update state in functional components. It returns an array containing the current state value and a function to update it.

Unlike ordinary variables, changes to state trigger React to re-render the component which allows the UI to update dynamically. Directly modifying a state variable won't update the UI. We need the state updater function for changes to be visible in the UI.

## How can you share state between components in React?
State in React can be shared among components by lifting it up to their closest common parent component. This method is known as state lifting. The parent component holds the shared state and passes it to the child components through props. This way multiple components can access and update the same state, keeping the UI in sync.

## How is event handling done in React?
Event handling in React is done through event handlers such as onClick, onChange or onSubmit. These handlers are usually functions that are defined in the components, and they are triggered when the event occurs. We can define the handler as a separate function or inline using an arrow function.
