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

// function App() {
//     return (
//         <div className="App">
//             <Heading firstName = "Bob"/>
//             <Heading firstName="Any name other than Bob" />
//             <Card h2="First card's h2" h3="First card's h3"/>
//             <Card h2="second card's h2" h3="second card's h3"/>
//         </div>

//     );
// };

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum)
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
}
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick} > Guess the number between 1 and 3 </button>
    </div>
  );
}



export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 

export default App;
