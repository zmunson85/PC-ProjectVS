import React from 'react';
import './App.css';
import Switches from './Switches';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Pro DJ React</h3>
                <h6>-Zachary Munson-</h6>
                <Switches />
            </div>
        )
    }
}
export default App