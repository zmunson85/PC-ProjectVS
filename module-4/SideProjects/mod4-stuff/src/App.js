import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
    //default theme is set to light mode
    //store this theme in context so the other components can consume the same context, lift state to parent and share with children
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
        <div style={{ position: 'relative', left: '80%' }} className='toggleDiv'>
            <button onClick={toggleTheme} className='toggleBtn'>toggle 🌙</button>
        </div>
        <nav>
            <div className='nav-center'>
                <h1>Changing Themes</h1>
                <h2>Using CSS Variables</h2>
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