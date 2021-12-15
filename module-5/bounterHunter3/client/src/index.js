import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { KillListProvider } from './context/bountyContext';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <KillListProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </KillListProvider>
  </Router>,
  document.getElementById('root')
);

