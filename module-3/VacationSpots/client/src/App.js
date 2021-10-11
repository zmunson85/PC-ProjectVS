import React from 'react';
import Output from './Output';
// import VisitColor from './Output'
import data from './data'
function App() {
    const Cards = data.map(item => <Output key={item.place} location={item} season={item.timeToGo} />)
    // const Color = data.map(season => <Output key={season.timeToGo} timeToGo={season} />)
    return (
        <div>
            <header>Which Vacation Destination Suits You Best?</header>
            {Cards}
            {/* {Color} */}
        </div>
    )
}

export default App;