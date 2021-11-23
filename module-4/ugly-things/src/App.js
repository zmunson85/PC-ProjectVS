import React from 'react';
import './App.css';
import Heading from './Heading'
import ThingsList from './ThingsList';
// import ThingsList from './ThingsList'
import UserInputForm from './UserInputForm';
function App() {
  return (
    <>
      <div className='app-container'>
        <div className='context-data'>
          <Heading
            title='Ugly-Things'
            description='User Provided Data'
          />
          {/* < ThingsList /> */}
          <UserInputForm />
          {/* < ThingsList /> */}
        </div>

      </div>
    </>
  );
}

export default App;
