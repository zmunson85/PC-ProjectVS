import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ThemeContext } from './theme-context'

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        data-testid="header"
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
          data-testid="toggle-theme-btn"
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
