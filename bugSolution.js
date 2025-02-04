```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect only runs once after the initial render
    console.log('Component mounted!'); 
    //Adding a return statement to cleanup the effect
    return () => {
      console.log('Component unmounted!');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```