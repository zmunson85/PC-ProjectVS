import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from './FriendList';

function App() {
    return (
        <div>
            <FriendList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));