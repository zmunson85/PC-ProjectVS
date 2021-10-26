import './App.css';
import React, { useState } from 'react'



const App = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={incrementCount} >I was Clicked {count} times!</button>
    </div>
  );
}

export default App;
