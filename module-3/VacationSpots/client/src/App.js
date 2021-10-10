import React from 'react';
import Output from './Output';
import data from './data'
function App() {
    const Cards = data.map(item => <Output key={item.place} location={item} />)
    return (
        <div>
            <header>Which Vacation Destination Suits You Best?</header>
            {Cards}
        </div>
    )
}

export default App;