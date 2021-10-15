import React from 'react';
import VacationCard from './VacationCard';
import data from './data'
function App() {
    const Cards = data.map(item => <VacationCard key={item.place} location={item} season={item.timeToGo} price={item.price} />)
    // const Color = data.map(season => <Output key={season.timeToGo} timeToGo={season} />)
    return (
        <div>
            <header>Which Vacation Destination Suits You Best?</header>
            {Cards}
        </div>
    )
}

export default App;