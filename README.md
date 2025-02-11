# React Native useEffect Hook Issue

This repository demonstrates a common error in React Native when using the `useEffect` hook with a function in the dependency array. This leads to infinite rerenders, impacting app performance.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides the correct solution.

## Problem
The `useEffect` hook with a function as a dependency reruns on every render because the function reference changes.

## Solution
Use `useCallback` to memoize the function and prevent unnecessary rerenders.