import Heading from "./Heading";
import Card from "./Card";
/**import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}*/

function App() {
    return (
        <div className="App">
            <Heading firstName = "Bob"/>
            <Heading firstName="Any name other than Bob" />
            <Card h2="First card's h2" h3="First card's h3"/>
        </div>

    );
};

export default App;
