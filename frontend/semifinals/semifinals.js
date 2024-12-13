import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component rendered! Current count is: ${count}`);

    return () => console.log(`Cleaning up! Count was: ${count}`);
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;
