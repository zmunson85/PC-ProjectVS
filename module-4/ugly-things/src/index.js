import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Provider } from "./Context"

ReactDOM.render(
   <Provider>
      <App />
   </Provider>, document.getElementById('root'));