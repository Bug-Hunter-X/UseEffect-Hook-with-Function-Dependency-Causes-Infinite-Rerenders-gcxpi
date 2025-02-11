To fix this, use the `useCallback` hook to memoize the function.  This ensures that the function reference remains the same unless its dependencies change.

```javascript
import { useCallback, useEffect } from 'react';

const MyComponent = () => {
  const fetchData = useCallback(async () => {
    // ... your fetch logic ...
  }, []); // Empty dependency array means fetchData only changes on mount

  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData is now stable, effect only runs on mount and when fetchData changes

  // ... rest of your component ...
};

export default MyComponent;
```
This revised code uses `useCallback` to create a memoized version of `fetchData`. The `useEffect` hook now only runs when `fetchData` changes (initially on mount). 