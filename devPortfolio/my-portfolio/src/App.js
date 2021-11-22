import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const App = () => {
  const logoPos = useSpring({ x: 0, y: 0 })
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });
  return (
    <div className="App">
      <header className="App-header">
        <animated.div {...bindLogoPos()} style={{
          y: logoPos.y,
          x: logoPos.x,
        }}>
          <img src={logo} className="App-logo" alt="logo" />
        </animated.div>
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
  );
}

export default App;
