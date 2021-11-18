import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
    //default theme is set to light mode
    const [theme, setTheme] = useState('light-theme');

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    //every time the theme changes the callback function is run
    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return <main>
        <nav>
            <div className='nav-center'>
                <h1>Changing Themes</h1>
                <button onClick={toggleTheme} className='btn'>toggle</button>
            </div>

        </nav>
        <section>
            {data.map((item) => {
                return <Article key={item.id} {...item} />
            })}
        </section>
    </main>
}

export default App