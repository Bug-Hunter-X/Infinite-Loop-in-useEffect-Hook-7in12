# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook.  The `useEffect` hook, while powerful, can lead to unexpected behavior if not used correctly. Specifically, this example showcases an infinite loop caused by missing dependencies in the `useEffect` hook's dependency array.

## Bug Description

The `bug.js` file contains a React component that uses `useEffect` to update a state variable (`count`).  However, the dependency array is empty (`[]`), meaning the effect runs after every render. This leads to an infinite loop because the `setCount` function updates `count`, triggering another render, and so on.

## Solution

The `bugSolution.js` file demonstrates the correct way to use the `useEffect` hook in this scenario. The dependency array is adjusted to only run the effect once after the initial mount. This avoids the infinite loop. 

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop and the corrected version in the console log.