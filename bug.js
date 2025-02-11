This error occurs when using the `useEffect` hook in React Native with a dependency array that includes a function.  The function's reference changes on every render, causing the effect to run on every render instead of only when dependencies change.

```javascript
useEffect(() => {
  // This effect will run on every render because fetchData is a new function each time.
  const fetchData = async () => {
    // ...
  };
  fetchData();
}, []);
```