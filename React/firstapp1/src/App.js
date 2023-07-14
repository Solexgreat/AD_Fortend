/**import logo from './logo.svg';*/
import './App.css';
import './index.css';
import {useState} from "react"

function App() {
  const [score, setScore] = useState("10")
  const [comment, setComment] = useState("")

  const handelSubmit = (e) => {
    e.prevenDefault();
    if (Number(score) <= 5 &&  comment.length < 10) {
      alert("Please provide a comment explaining why the experience was poor.")
      return;
    }

    console.log("form submitted!")
    setScore("10");
    setComment("");

  }
  return (
    <div className="feedback">
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h1>Feedback form</h1>
        <div className="Field">
          <label>Score:  {score}  </label><br/>
          <input type="range" 
          min="0" 
          max="10"
          value={score}
          onChange={e => setScore(e.target.value)}/>
        </div>
        <div className='Field'>
          <label>Comment: </label><br/>
          <textarea value={comment} onChange={e => setComment(e.target.value)}/>
        </div>
        <button type='submit' className='field_btn'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

/**const ToDo = props => {
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <input/>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
};

function App() {
    const {todos, setTodos} = useState([{
        id: 'todo1',
        createdAt: '18:00'
    }, {
        id: 'todo2',
        createdAt: '20:30'

    }])

    const reverseOrder = () => {
        // Reverse is a mutative operation so we need to creat a new array first 
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                    <ToDo key={index} id={todo.id} createdAt={todo.createdAt}/>))}
                </tbody>
            </table>
        </div>        
    );
} 


/**function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="A pp-logo" alt="logo" />
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

export default App;