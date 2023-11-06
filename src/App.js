import logo from './logo.svg';
import './App.css';
import Appbar from './Appbar';

function App() {
  return (
    <div className="App">
      <Appbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>AM CCTP</p>
        <p>This is a test build for "The Undercover Project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>The Undercover Project - 2024</footer>
    </div>
  );
}

export default App;
