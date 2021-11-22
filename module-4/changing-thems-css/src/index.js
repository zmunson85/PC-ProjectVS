import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Header from './Header';
import App from './App';
import LikeCounter from './LikeCounter';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
        <LikeCounter />
    </React.StrictMode>,
    document.getElementById('root')
);
