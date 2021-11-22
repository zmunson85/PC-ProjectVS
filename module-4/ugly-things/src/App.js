import React from 'react';
import './App.css';
import Heading from './Heading'
function App() {
  return (
    <>
      <div className='app-container'>
        <div className='context-data'>
          <Heading
            title='Ugly-Thing'
            description='User Provided Data'
          />
        </div>
      </div>
    </>
  );
}

export default App;
