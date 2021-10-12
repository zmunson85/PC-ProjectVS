import React from 'react';

function App() {
    return (
        <>
            <div className='flex-container'>
                <div >
                    <p>--Placeholder Text--</p>
                    <input className='first' type="checkbox" />
                </div>
                <div>
                    <p>--Placeholder Text--</p>
                    <input type="checkbox" />
                </div>

                <div>
                    <p>--Placeholder Text--</p>
                    <input type="checkbox" />
                </div>

                <div className='deleteTest'>
                    <p>--Todo Complete Text--</p>
                    <input id='check' type="checkbox" />

                    <button id='delete' type="button" />
                </div>

            </div>
        </>
    )
}
export default App;