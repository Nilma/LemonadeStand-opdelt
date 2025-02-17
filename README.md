
## Lemonade Stand App

A simple React application where users can buy lemons (costs money) and sell lemonade (generates profit).
This app demonstrates state management using React Hooks (useState) in Part 1 and Redux Toolkit in Part 2.

## Features
	•	Track profit dynamically
	•	Sell lemonade → Profit increases by $5
	•	Buy lemons → Profit decreases by $2
	•	UI updates instantly when the state changes

## Part 1: Managing State with useState

In Part 1, the app uses React’s useState hook to manage profit locally.

Technologies Used
	•	React (useState)
	•	Vite (for project setup)
	•	JSX

## Installation & Running the App
	1.	Clone this repository:

git clone https://github.com/your-username/lemonade-stand.git
cd lemonade-stand


	2.	Install dependencies:

npm install


	3.	Start the development server:

npm run dev


	4.	Open http://localhost:5173 in your browser.

## Files for Part 1
	•	src/LemonadeStand.jsx – Manages profit using useState
	•	src/App.jsx – Renders the LemonadeStand component

## Part 2: Managing State with Redux Toolkit

In Part 2, useState is replaced with Redux Toolkit for global state management.

Technologies Used
	•	React (useSelector, useDispatch)
	•	Redux Toolkit (createSlice, configureStore)
	•	React Redux (Provider)

## Installation & Running the App (with Redux)
	1.	Follow the setup for Part 1, then install Redux Toolkit:

npm install @reduxjs/toolkit react-redux


	2.	Start the development server:

npm run dev


	3.	The app should function the same, but now uses Redux for state management.

## Files for Part 2
	•	src/redux/profitSlice.js – Redux reducer for managing profit
	•	src/redux/store.js – Configures the Redux store
	•	src/LemonadeStand.jsx – Updated to use Redux (useSelector, useDispatch)
	•	src/App.jsx – Imports and renders the Redux-powered LemonadeStand component
	•	src/main.jsx – Wraps the app with Redux Provider

## Expected Behavior
	•	Profit starts at $0
	•	Clicking “Sell Lemonade” → Profit increases by $5
	•	Clicking “Buy Lemons” → Profit decreases by $2
	•	Instant UI updates using useState (Part 1) or Redux (Part 2)

## Future Improvements (Optional)
	•	Prevent negative profit
	•	Add a “Reset Profit” button
	•	Display a warning if the profit is too low

## License

This project is open-source and available under the MIT License.
